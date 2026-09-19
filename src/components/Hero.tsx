"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { images, site } from "@/data/site";
import { orderHref } from "@/lib/links";
import Photo from "./Photo";
import Button from "./Button";
import { RevealLines } from "./Reveal";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
      {/* Photo with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 -z-30 scale-110">
        <Photo
          src={images.hero}
          alt="Close-up of Hyderabadi dum biryani with steam rising, fried onions and layered rice"
          className="h-full w-full"
          bare
          priority
        />
      </motion.div>
      <div className="absolute inset-0 -z-20 bg-ink/55" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-ink to-transparent" />

      {/* Rising steam */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        {[
          { left: "18%", delay: "0s", size: "18rem" },
          { left: "48%", delay: "3s", size: "22rem" },
          { left: "74%", delay: "6s", size: "16rem" },
        ].map((s, i) => (
          <span
            key={i}
            className="absolute -bottom-24 animate-steam rounded-full bg-cream/25 blur-3xl"
            style={{ left: s.left, width: s.size, height: s.size, animationDelay: s.delay }}
          />
        ))}
      </div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="mx-auto w-full max-w-[1320px] px-6 pb-32 pt-44 md:px-10 md:pb-28"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-6 text-[11px] font-semibold uppercase tracking-[0.32em] text-gold md:text-xs"
        >
          Authentic Hyderabadi Dum Biryani
        </motion.p>

        <RevealLines
          as="h1"
          lines={["SLOW COOKED.", "DEEP FLAVOURED.", "MADE WITH SOUL."]}
          delay={0.45}
          className="font-display text-[clamp(1.9rem,8.2vw,7.5rem)] font-semibold leading-[0.95] tracking-[-0.005em] text-cream"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.9 }}
          className="mt-8 max-w-xl"
        >
          <p className="font-display text-2xl font-medium italic text-gold-light md:text-3xl">{site.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-cream/75 md:text-base">{site.supporting}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={orderHref()} arrow>
              Order now
            </Button>
            <Button href="#menu" variant="outline">
              Explore our menu
            </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <a
        href="#intro"
        aria-label="Scroll to next section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cream/60">Scroll</span>
        <span className="relative h-11 w-px bg-gold/30">
          <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 animate-scroll-dot rounded-full bg-gold" />
        </span>
      </a>
    </section>
  );
}
