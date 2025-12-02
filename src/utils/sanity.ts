import { sanityClient } from "sanity:client";
import * as SanityImageURL from "@sanity/image-url";

// Wir nutzen 'as any', um TypeScript ruhig zu stellen.
// Der Server braucht diese Weiche, um sicher zu laufen.
const builder = ((SanityImageURL as any).default || SanityImageURL)(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}