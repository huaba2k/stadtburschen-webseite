<?php
// HIER DIE ECHTE VEREINS-MAIL EINTRAGEN
$to = "info@stadtburschen.de"; 

// Nur POST Requests erlauben
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 1. Honeypot Check (Spam-Schutz)
    if (!empty($_POST["website_check"])) {
        die("Spam detected.");
    }

    // 2. Daten bereinigen
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Validierung
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: /kontakt?error=invalid");
        exit;
    }

    // --- 3. E-Mail an den Verein (Admin) - JETZT HTML & UTF-8 FIX ---
    
    $adminSubject = "Neue ANFRAGE von $name (Webseite)";
    
    // HTML Body für den Admin (verbesserte Lesbarkeit, UTF-8 Umlaute fix)
    $adminHtmlContent = '
    <html>
    <body style="font-family: sans-serif; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; border: 1px solid #0053a0; border-radius: 8px; overflow: hidden; background: white;">
            <div style="background-color: #0053a0; padding: 15px; color: white;">
                <h2 style="margin: 0;">Neue Webseiten-Anfrage</h2>
            </div>
            <div style="padding: 20px; color: #333;">
                <p style="font-size: 16px;"><strong>Name:</strong> ' . htmlspecialchars($name) . '</p>
                <p style="font-size: 16px;"><strong>E-Mail:</strong> ' . htmlspecialchars($email) . '</p>
                <hr style="border: 0; border-top: 1px solid #ccc; margin: 15px 0;">
                <p><strong>Nachricht:</strong></p>
                <p style="white-space: pre-wrap; background: #eee; padding: 15px; border-radius: 4px; font-style: italic;">' . htmlspecialchars($message) . '</p>
            </div>
            <div style="background-color: #eee; padding: 10px; font-size: 12px; text-align: center;">
                Bitte schnellstmöglich bearbeiten.
            </div>
        </div>
    </body>
    </html>
    ';

    $adminHeaders = "MIME-Version: 1.0\r\n";
    // WICHTIGER FIX für Umlaute: Content-type und Charset setzen
    $adminHeaders .= "Content-type: text/html; charset=UTF-8\r\n"; 
    $adminHeaders .= "From: Webseite <noreply@stadtburschen.de>\r\n";
    $adminHeaders .= "Reply-To: $email\r\n";

    mail($to, $adminSubject, $adminHtmlContent, $adminHeaders);

    // --- 4. HTML-Bestätigung an den Nutzer (Bleibt wie vorher, ist schon UTF-8) ---
    
    $userSubject = "Ihre Nachricht an den Stadtburschen-Verein Freising e. V.";
    
    $htmlContent = '
    <html>
    <body style="font-family: sans-serif; background-color: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="background-color: #0053a0; padding: 20px; text-align: center;">
                <h1 style="color: #c5a059; margin: 0; font-size: 24px;">Stadtburschen-Verein Freising e. V.</h1>
            </div>
            <div style="padding: 30px; color: #333;">
                <h2 style="color: #0053a0;">Servus ' . htmlspecialchars($name) . ',</h2>
                <p>Danke für Ihre Nachricht. Wir haben sie erhalten und werden uns in Kürze bei Ihnen melden.</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                <p style="font-size: 14px; color: #666;"><strong>Ihre Nachricht:</strong><br>' . nl2br(htmlspecialchars($message)) . '</p>
            </div>
            <div style="background-color: #eee; padding: 15px; text-align: center; font-size: 12px; color: #888;">
                &copy; ' . date("Y") . ' Stadtburschen-Verein Freising e.V.
            </div>
        </div>
    </body>
    </html>
    ';

    $userHeaders = "MIME-Version: 1.0" . "\r\n";
    $userHeaders .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $userHeaders .= "From: Stadtburschen-Verein Freising e. V. <noreply@stadtburschen.de>" . "\r\n";

    mail($email, $userSubject, $htmlContent, $userHeaders);

    // 5. Zurückleiten mit Erfolg
    header("Location: /kontakt?success=true");
} else {
    // Falls jemand die Datei direkt aufruft
    header("Location: /");
}
?>