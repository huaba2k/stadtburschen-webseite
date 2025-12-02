import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

// WICHTIG: Die CSS-Stile der Bibliothek importieren
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Wir definieren, was die Komponente an Daten erwartet
interface Props {
  headline?: string;
  images: any[]; // Das Array der Bilder aus Sanity
}

export default function Gallery({ headline, images }: Props) {
  // Zustand: Ist die Lightbox offen?
  const [open, setOpen] = useState(false);
  // Zustand: Welches Bild index (0, 1, 2...) wird gerade gezeigt?
  const [index, setIndex] = useState(0);

  // Hilfsfunktion, um Sanity-URLs für die Lightbox vorzubereiten
  // Wir holen das große Originalbild, aber optimiert
  const slides = images.map((img) => ({
    src: img.url ? `${img.url}?w=1600&h=1200&fit=max&q=90` : "",
    alt: img.alt || headline || "Galeriebild",
  }));

  return (
    <div>
      {headline && (
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          {headline}
        </h3>
      )}

      {/* DIE THUMBNAIL-ANSICHT (Das Raster auf der Seite) */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div
            key={img.url + i}
            className="relative group aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
            onClick={() => {
              setIndex(i); // Merken, welches Bild geklickt wurde
              setOpen(true); // Lightbox öffnen
            }}
          >
            {img.url && (
              <img
                // Kleines Thumbnail für die Seite (600x600, zugeschnitten)
                src={`${img.url}?w=600&h=600&fit=crop&q=80`}
                alt={img.alt || headline || "Galeriebild"}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            )}
             {/* Lupe Icon Overlay beim Hovern */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white drop-shadow-lg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                </svg>
            </div>
          </div>
        ))}
      </div>

      {/* DIE LIGHTBOX (Vollbild-Slider) */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Thumbnails, Zoom]}
        // Dunkler Hintergrund und weiche Übergänge
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .95)" } }}
        animation={{ fade: 300, swipe: 500 }} // Smoothe Übergänge
        carousel={{ finite: false }} // Endloses Durchklicken
      />
    </div>
  );
}