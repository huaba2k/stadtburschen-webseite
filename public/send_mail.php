<?php
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

    // 3. E-Mail an den Verein (Admin)
    $to = "info@stadtburschen.de"; // HIER DEINE ECHTE VEREINS-MAIL EINTRAGEN
    $subject = "Neue Nachricht von $name (Webseite)";
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Nachricht:\n$message\n";
    $headers = "From: Webseite <noreply@stadtburschen.de>\r\n";
    $headers .= "Reply-To: $email\r\n";

    mail($to, $subject, $email_content, $headers);

    // 4. Schicke HTML-Bestätigung an den Nutzer
    $userSubject = "Deine Nachricht an die Stadtburschen Freising";
    
    // HTML Template (Royalblau & Gold)
    $htmlContent = '
    <html>
    <body style="font-family: sans-serif; background-color: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="background-color: #0053a0; padding: 20px; text-align: center;">
                <h1 style="color: #c5a059; margin: 0; font-size: 24px;">Stadtburschen Freising</h1>
            </div>
            <div style="padding: 30px; color: #333;">
                <h2 style="color: #0053a0;">Servus ' . $name . ',</h2>
                <p>Danke für deine Nachricht! Wir haben sie gut erhalten.</p>
                <p>Ein Mitglied der Vorstandschaft wird sich in Kürze bei dir melden.</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                <p style="font-size: 14px; color: #666;"><strong>Deine Nachricht:</strong><br>' . nl2br(htmlspecialchars($message)) . '</p>
            </div>
            <div style="background-color: #eee; padding: 15px; text-align: center; font-size: 12px; color: #888;">
                &copy; ' . date("Y") . ' Stadtburschen Freising e.V.
            </div>
        </div>
    </body>
    </html>
    ';

    $userHeaders = "MIME-Version: 1.0" . "\r\n";
    $userHeaders .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $userHeaders .= "From: Stadtburschen Freising <noreply@stadtburschen.de>" . "\r\n";

    mail($email, $userSubject, $htmlContent, $userHeaders);

    // 5. Zurückleiten mit Erfolg
    header("Location: /kontakt?success=true");
} else {
    // Falls jemand die Datei direkt aufruft
    header("Location: /");
}
?>