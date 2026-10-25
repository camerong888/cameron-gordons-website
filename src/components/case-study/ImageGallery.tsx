"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ImageRef } from "@/data/types";
import Picture from "@/components/ui/Picture";

const control =
  "grid size-11 place-items-center rounded-full bg-white/12 text-white transition-[background-color,transform] duration-150 ease-out hover:bg-white/24 active:scale-[0.94]";

function Chevron({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={flip ? "rotate-180" : ""}
    >
      <path
        d="M9 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Thumbnail grid + accessible lightbox (native <dialog>): Esc closes,
 * arrow keys navigate, swipe works on touch devices.
 */
export default function ImageGallery({ images }: { images: ImageRef[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);

  const close = useCallback(() => {
    dialogRef.current?.close();
    setIndex(null);
  }, []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setIndex((i) =>
        i === null ? i : (i + dir + images.length) % images.length
      ),
    [images.length]
  );

  useEffect(() => {
    if (index !== null && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Open image: ${image.alt}`}
            className="group aspect-[4/3] overflow-hidden rounded-2xl bg-bg-alt transition-transform duration-150 ease-out active:scale-[0.98]"
          >
            <Picture
              image={image}
              sizes="(min-width: 1128px) 340px, (min-width: 768px) 33vw, 50vw"
              className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setIndex(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 48) step(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
        className="m-auto w-[min(94vw,1100px)] bg-transparent p-0 backdrop:bg-black/85 backdrop:backdrop-blur-sm open:animate-[lightbox-in_200ms_var(--ease-out)]"
        aria-label="Image viewer"
      >
        {index !== null && (
          <div className="grid justify-items-center gap-4">
            <Picture
              image={images[index]}
              sizes="94vw"
              className="max-h-[78vh] w-auto max-w-full rounded-2xl object-contain"
            />
            <p className="text-center text-meta text-white/80">
              {images[index].alt} · {index + 1} of {images.length}
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous image"
                className={control}
              >
                <Chevron flip />
              </button>
              <button
                type="button"
                onClick={close}
                aria-label="Close image viewer"
                className={control}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next image"
                className={control}
              >
                <Chevron />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
