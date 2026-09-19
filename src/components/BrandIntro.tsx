import { images } from "@/data/site";
import Photo from "./Photo";
import Eyebrow, { Ornament } from "./Eyebrow";
import { Reveal, RevealLines } from "./Reveal";

const points = [
  { label: "Authentic", text: "Hyderabadi flavours" },
  { label: "Slow Cooked", text: "Traditional Dum preparation" },
  { label: "Full of Flavour", text: "Rich spices & carefully layered ingredients" },
];

export default function BrandIntro() {
  return (
    <section id="intro" className="relative overflow-hidden bg-ink py-28 lg:py-40">
      <div className="pattern-jaali pointer-events-none absolute -right-24 top-10 h-[34rem] w-[34rem] opacity-[0.05]" />
      <div className="relative mx-auto grid w-full max-w-[1320px] items-center gap-16 px-6 md:px-10 lg:grid-cols-12 lg:gap-20">
        {/* Photo */}
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-t-full border border-gold/40" aria-hidden="true" />
            <Photo
              src={images.intro}
              alt="A handi of Hyderabadi dum biryani, freshly opened"
              className="group aspect-[3/4] w-full rounded-t-full"
              imgClassName="transition-transform duration-[1400ms] ease-out group-hover:scale-105"
            />
          </div>
        </Reveal>

        {/* Text */}
        <div className="lg:col-span-7 lg:pl-8">
          <Eyebrow>Our craft</Eyebrow>
          <RevealLines
            lines={["THE ART", "OF DUM"]}
            className="mt-5 font-display text-[clamp(3.25rem,9vw,7.5rem)] font-semibold leading-[0.92] text-gold"
          />
          <Ornament className="mt-8" />
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl font-display text-2xl font-medium leading-snug text-cream md:text-[2rem]">
              Great biryani isn&apos;t rushed. At House of Dum, every grain, every spice and every layer comes
              together through the timeless art of slow cooking.
            </p>
            <p className="mt-6 max-w-lg text-[15px] leading-[1.8] text-cream/70">
              We focus on authentic Hyderabad-style dum preparation. The handi is sealed and the biryani cooks
              gently in its own steam, so the rice, the meat and the spices become one.
            </p>
          </Reveal>

          <dl className="mt-12 grid gap-8 border-t border-gold/25 pt-8 sm:grid-cols-3 sm:gap-0">
            {points.map((p, i) => (
              <Reveal key={p.label} delay={0.1 * i} className={i > 0 ? "sm:border-l sm:border-gold/25 sm:pl-6" : "sm:pr-6"}>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">{p.label}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-cream/75">{p.text}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
