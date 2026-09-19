"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  /** Hide the "add photo" caption in the placeholder (for decorative backgrounds). */
  bare?: boolean;
};

/**
 * Renders a photo from /public/images. If the file is missing, shows a
 * clearly-labelled dark placeholder tile instead of a broken image, so the
 * owner knows exactly which photo to drop in.
 */
export default function Photo({ src, alt, className = "", imgClassName = "", priority, bare }: Props) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setFailed(false);
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-charcoal ${className}`}>
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        />
      )}
      {failed && (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex items-center justify-center bg-charcoal"
        >
          <div className="pattern-jaali absolute inset-0 opacity-[0.1]" />
          {!bare && (
            <p className="relative max-w-[80%] text-center text-[10px] font-semibold uppercase leading-relaxed tracking-[0.22em] text-gold/70">
              Photo needed
              <span className="mt-1 block normal-case tracking-normal text-cream/40">
                {src.split("/").pop()}
              </span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
