import type { ImageRef } from "@/data/types";
import Picture, { aspectOf } from "./Picture";

/**
 * The large photo under a page title. Landscape shots fill a 16:9 frame;
 * portrait and squarer ones sit whole on a neutral stage, the way a product
 * is shot, instead of being cropped to fit.
 */
export default function Stage({
  image,
  caption,
  priority = false,
}: {
  image: ImageRef;
  caption?: string;
  priority?: boolean;
}) {
  const fill = aspectOf(image.src) >= 1.3;
  return (
    <figure>
      <div
        className={`aspect-video overflow-hidden rounded-[1.625rem] ${
          fill ? "" : "flex items-center justify-center bg-bg-alt p-5 md:p-10"
        }`}
      >
        <Picture
          image={image}
          sizes="(min-width: 1128px) 1040px, 100vw"
          priority={priority}
          className={
            fill
              ? "size-full object-cover"
              : "h-full w-auto max-w-full rounded-2xl object-contain"
          }
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-meta text-ink-2">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
