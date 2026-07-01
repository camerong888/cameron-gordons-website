"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ImageRef } from "@/data/types";
import Picture from "@/components/ui/Picture";

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
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Open image: ${image.alt}`}
            className="group overflow-hidden rounded-lg border border-line bg-surface-2 transition-colors hover:border-copper/60"
          >
            <Picture
              image={image}
              sizes="(max-width: 768px) 50vw, 360px"
              className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
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
        className="fixed inset-0 m-auto w-[min(96vw,1100px)] bg-transparent p-0 backdrop:bg-black/85"
        aria-label="Image viewer"
      >
        {index !== null && (
          <div className="relative">
            <Picture
              image={images[index]}
              sizes="96vw"
              className="max-h-[82vh] w-full rounded-lg object-contain"
            />
            <p className="mt-3 text-center font-mono text-xs text-white/80">
              {images[index].alt} · {index + 1}/{images.length}
            </p>
            <div className="mt-3 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous image"
                className="rounded-md border border-white/25 px-4 py-2 font-mono text-sm text-white hover:border-white/60"
              >
                ← Prev
              </button>
              <button
                type="button"
                onClick={close}
                aria-label="Close image viewer"
                className="rounded-md border border-white/25 px-4 py-2 font-mono text-sm text-white hover:border-white/60"
              >
                Close ✕
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next image"
                className="rounded-md border border-white/25 px-4 py-2 font-mono text-sm text-white hover:border-white/60"
              >
                Next →
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
