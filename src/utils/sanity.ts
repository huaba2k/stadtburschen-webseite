import { sanityClient } from "sanity:client";
import * as SanityImageUrl from "@sanity/image-url";

// Wir zwingen TypeScript, uns machen zu lassen
const lib = SanityImageUrl as any;

// Wir suchen die Funktion: 
// 1. Ist es der 'default' Export?
// 2. Oder heißt die Funktion 'imageUrlBuilder'?
// 3. Oder ist das Paket selbst die Funktion?
const builderFn = lib.default || lib.imageUrlBuilder || lib;

// Jetzt führen wir die gefundene Funktion aus
const builder = builderFn(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}