import { images, why } from "@/data/site";
import Photo from "./Photo";
import { Reveal, RevealLines } from "./Reveal";

export default function WhyHouseOfDum() {
  return (
    <section id="why" className="bg-charcoal py-28 lg:py-40">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10">
        <RevealLines
          lines={["WHY", "HOUSE OF DUM?"]}
          className="font-display text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.95] text-cream"
        />

        <div className="mt-16 grid border-l border-t border-gold/25 md:grid-cols-2">
          {why.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 0.1} className="border-b border-r border-gold/25">
              <article className="group relative flex min-h-[280px] flex-col justify-end overflow-hidden p-8 md:min-h-[360px] md:p-12">
                <Photo
                  src={images.why[i]}
                  alt={w.title}
                  bare
                  className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-40"
                  imgClassName="scale-105 transition-transform duration-[1600ms] group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-ink/40 opacity-0 transition-opacity duration-700 group-hover:opacity-100" aria-hidden="true" />
                <div className="relative">
                  <h3 className="font-display text-[clamp(2.25rem,4.4vw,4rem)] font-semibold leading-[0.98] text-cream transition-colors duration-500 group-hover:text-gold-light">
                    {w.title}
                  </h3>
                  <span className="mt-5 block h-px w-12 bg-gold transition-all duration-500 group-hover:w-28" aria-hidden="true" />
                  <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-cream/70 transition-colors duration-500 group-hover:text-cream">
                    {w.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
