"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { ProductImage } from "@/lib/types";

interface ProductGalleryProps {
  productName: string;
  images: ProductImage[];
}

export default function ProductGallery({
  productName,
  images,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [fadeKey, setFadeKey] = useState(0);

  const activeImage = images[activeIndex] ?? images[0];

  const selectImage = useCallback((index: number) => {
    setActiveIndex(index);
    setFadeKey((k) => k + 1);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  useEffect(() => {
    if (!lightboxOpen) {
      return;
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
      if (e.key === "ArrowRight") {
        setActiveIndex((i) => (i + 1) % images.length);
        setFadeKey((k) => k + 1);
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((i) => (i - 1 + images.length) % images.length);
        setFadeKey((k) => k + 1);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxOpen, images.length, closeLightbox]);

  if (!activeImage) {
    return null;
  }

  return (
    <>
      <div className="w-full min-w-0">
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="relative w-full overflow-hidden bg-[#EFECE6] cursor-zoom-in group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A7653]"
          style={{ paddingBottom: "125%" }}
          aria-label={`View ${productName} gallery fullscreen`}
        >
          <Image
            key={fadeKey}
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-center animate-[fadeIn_0.45s_ease-out] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            priority
          />
        </button>

        {images.length > 1 && (
          <div
            className="mt-4 flex gap-2 overflow-x-auto scrollbar-hide pb-1 -mx-0.5 px-0.5"
            role="tablist"
            aria-label={`${productName} image thumbnails`}
          >
            {images.map((image, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={`${image.src}-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={image.alt}
                  onClick={() => selectImage(index)}
                  className={`relative shrink-0 w-[4.5rem] h-[5.625rem] sm:w-20 sm:h-[5.625rem] overflow-hidden bg-[#EFECE6] border transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A7653] ${
                    isActive
                      ? "border-[#171717] opacity-100"
                      : "border-[#D9D5CE] opacity-70 hover:opacity-100 hover:border-[#9A7653]"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover object-center"
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[#171717]/95 flex flex-col items-center justify-center p-5"
          role="dialog"
          aria-modal="true"
          aria-label={`${productName} image gallery`}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-[#F7F5F1] text-xs tracking-[0.2em] font-semibold hover:text-[#9A7653] transition-colors"
          >
            CLOSE
          </button>

          <div className="relative w-full max-w-3xl aspect-[4/5] max-h-[80vh] bg-[#EFECE6]">
            <Image
              key={`lb-${fadeKey}`}
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain object-center animate-[fadeIn_0.35s_ease-out]"
            />
          </div>

          {images.length > 1 && (
            <div className="mt-6 flex gap-2 max-w-3xl w-full overflow-x-auto scrollbar-hide justify-center">
              {images.map((image, index) => (
                <button
                  key={`lb-thumb-${index}`}
                  type="button"
                  onClick={() => selectImage(index)}
                  className={`relative shrink-0 w-14 h-[4.375rem] overflow-hidden bg-[#EFECE6] border ${
                    index === activeIndex
                      ? "border-[#F7F5F1]"
                      : "border-[#6B6862] opacity-60 hover:opacity-100"
                  }`}
                  aria-label={image.alt}
                >
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
