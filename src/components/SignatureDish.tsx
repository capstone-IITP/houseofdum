"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { images } from "@/data/site";
import { orderHref } from "@/lib/links";
import Photo from "./Photo";
import Button from "./Button";
import { Reveal, RevealLines } from "./Reveal";

const labels = [
  { text: "Aromatic Basmati Rice", pos: "left-0 top-[9%] sm:-left-4", dur: 6 },
  { text: "Slow Cooked", pos: "right-0 top-[1%] sm:right-2", dur: 7 },
  { text: "Traditional Spices", pos: "left-0 top-[52%] sm:-left-14", dur: 8 },
  { text: "Fried Onions", pos: "right-0 top-[42%] sm:-right-10", dur: 6.5 },
  { text: "Authentic Dum", pos: "left-[20%] bottom-[1%] sm:left-[24%]", dur: 7.5 },
];

export default function SignatureDish() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96]);

  return (
    <section ref={ref} id="signature" className="relative overflow-hidden bg-charcoal py-28 lg:py-40">
      <div className="pattern-jaali pointer-events-none absolute inset-0 opacity-[0.035]" />
      <div className="relative mx-auto w-full max-w-[1320px] px-6 md:px-10">
        <RevealLines
          lines={["THE DUM THAT MAKES", "THE DIFFERENCE"]}
          className="mx-auto max-w-4xl text-center font-display text-[clamp(2.2rem,6vw,5rem)] font-semibold leading-[1] text-cream"
        />

        <div className="relative mx-auto mt-16 aspect-square w-full max-w-[640px] lg:mt-20">
          <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-gold/30" aria-hidden="true" />
          <motion.div style={{ rotate, scale }} className="absolute inset-[7%]">
            <Photo
              src={images.signature}
              alt="Overhead close-up of Hyderabadi dum biryani on a plate with rice, meat and fried onions"
              className="h-full w-full rounded-full border border-gold/50 shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
              priority={false}
            />
          </motion.div>

          {labels.map((l, i) => (
            <motion.div
              key={l.text}
              className={`absolute z-10 ${l.pos}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.7 }}
            >
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: l.dur, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-2 border border-gold/50 bg-ink/80 px-3 py-2 backdrop-blur-sm sm:px-4 sm:py-2.5"
              >
                <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden="true" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cream sm:text-[11px]">
                  {l.text}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <Reveal className="mt-16 flex justify-center">
          <Button href={orderHref()} arrow>
            Taste the difference
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
