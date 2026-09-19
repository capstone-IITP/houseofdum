"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { steps } from "@/data/site";
import Photo from "./Photo";
import { Reveal, RevealLines } from "./Reveal";

type Step = (typeof steps)[number];

function DesktopPanel({ s }: { s: Step }) {
  return (
    <div className="flex h-full w-screen shrink-0 items-center gap-16 px-16 pt-24 xl:px-28">
      <Photo src={s.image} alt={s.alt} className="h-[58vh] w-[30vw] shrink-0 rounded-t-full border border-gold/40" />
      <div className="max-w-md">
        <span className="text-outline-gold font-display text-[9rem] font-semibold leading-none">{s.n}</span>
        <h3 className="mt-2 font-display text-6xl font-semibold uppercase text-gold">{s.title}</h3>
        <p className="mt-5 text-lg leading-relaxed text-cream/80">{s.text}</p>
      </div>
    </div>
  );
}

export default function DumProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${((steps.length - 1) / steps.length) * 100}%`]);
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="bg-ink">
      {/* Desktop: pinned horizontal scroll */}
      <div ref={ref} className="relative hidden lg:block" style={{ height: `${steps.length * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="pattern-jaali pointer-events-none absolute inset-0 opacity-[0.04]" />
          <RevealLines
            lines={["FROM POT TO PLATE"]}
            className="absolute left-16 top-28 z-10 font-display text-3xl font-semibold text-cream xl:left-28"
          />
          <motion.div style={{ x, width: `${steps.length * 100}vw` }} className="flex h-full">
            {steps.map((s) => (
              <DesktopPanel key={s.n} s={s} />
            ))}
          </motion.div>
          <div className="absolute inset-x-16 bottom-10 h-px bg-gold/20 xl:inset-x-28" aria-hidden="true">
            <motion.div style={{ width: bar }} className="h-px bg-gold" />
          </div>
        </div>
      </div>

      {/* Mobile / tablet: stacked */}
      <div className="px-6 py-24 md:px-10 lg:hidden">
        <RevealLines
          lines={["FROM POT", "TO PLATE"]}
          className="font-display text-[clamp(3rem,11vw,5rem)] font-semibold leading-[0.95] text-cream"
        />
        <div className="mt-14 space-y-20">
          {steps.map((s) => (
            <Reveal key={s.n} className="grid items-center gap-8 md:grid-cols-2">
              <Photo src={s.image} alt={s.alt} className="mx-auto aspect-[4/5] w-full max-w-sm rounded-t-full border border-gold/40" />
              <div>
                <span className="text-outline-gold font-display text-8xl font-semibold leading-none">{s.n}</span>
                <h3 className="mt-2 font-display text-5xl font-semibold uppercase text-gold">{s.title}</h3>
                <p className="mt-4 max-w-sm text-base leading-relaxed text-cream/80">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
