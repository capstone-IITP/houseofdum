"use client";
import { Instagram } from "lucide-react";
import { images, site } from "@/data/site";
import { instagramUrl } from "@/lib/links";
import Photo from "./Photo";
import Button from "./Button";
import { Reveal, RevealLines } from "./Reveal";

export default function InstagramGallery() {
  return (
    <section id="social" className="bg-ink py-28 lg:py-40">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <RevealLines
              lines={["FOLLOW THE", "FLAVOUR"]}
              className="font-display text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.95] text-cream"
            />
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block font-display text-3xl italic text-gold transition-colors hover:text-gold-light"
            >
              @{site.social.instagramHandle}
            </a>
          </div>
          <Button
            href={instagramUrl}
            variant="outline"
            icon={<Instagram className="h-4 w-4" aria-hidden="true" />}
          >
            Follow us on Instagram
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
          {images.instagram.map((src, i) => (
            <Reveal key={src} delay={(i % 3) * 0.08}>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View House of Dum on Instagram"
                className="group relative block aspect-square overflow-hidden"
              >
                <Photo
                  src={src}
                  alt={`House of Dum Instagram post ${i + 1}`}
                  className="h-full w-full"
                  imgClassName="transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Instagram className="h-8 w-8 text-gold-light" aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
