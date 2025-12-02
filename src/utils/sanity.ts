import { sanityClient } from "sanity:client";
import { createRequire } from "module"; 

// TRICK 17: Wir nutzen 'createRequire'.
// Das zwingt den Server, das Paket auf die klassische Node-Art zu laden.
// Das funktioniert IMMER, egal was Vite oder TypeScript sagen.
const require = createRequire(import.meta.url);
const imageUrlBuilder = require("@sanity/image-url");

// Sicherheitsnetz: Manchmal ist die Funktion direkt da, manchmal im .default
const builder = (imageUrlBuilder.default || imageUrlBuilder)(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}