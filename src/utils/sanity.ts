import { sanityClient } from "sanity:client";
// Wir importieren ALLES als Objekt 'SanityImageURL'
import * as SanityImageURL from "@sanity/image-url";

// Der Trick: Manche Server wollen .default, manche das Objekt selbst.
// Wir nehmen .default, falls es da ist, sonst das Objekt.
const builder = (SanityImageURL.default || SanityImageURL)(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}