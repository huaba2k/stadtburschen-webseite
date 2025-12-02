// Wir importieren den Client
import { sanityClient } from "sanity:client";

// TRICK: Wir nennen es 'sanityImageBuilder' statt 'imageUrlBuilder', 
// um Namenskonflikte mit Typen zu vermeiden.
import sanityImageBuilder from "@sanity/image-url";

// Den Builder initialisieren
const builder = sanityImageBuilder(sanityClient);

// Die Funktion, die wir überall nutzen
export function urlFor(source: any) {
  return builder.image(source);
}