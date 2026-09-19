import { images, story } from "@/data/site";
import Photo from "./Photo";
import Eyebrow from "./Eyebrow";
import { Reveal, RevealLines } from "./Reveal";

export default function OurStory() {
  return (
    <section id="story" className="relative overflow-hidden bg-charcoal py-28 lg:py-40">
      <div className="mx-auto grid w-full max-w-[1320px] gap-16 px-6 md:px-10 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-6">
          <Eyebrow>Our story</Eyebrow>
          <RevealLines
            lines={["BORN FROM", "A LOVE", "FOR DUM"]}
            className="mt-5 font-display text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.95] text-gold"
          />
          <Reveal delay={0.1} className="mt-12 max-w-lg space-y-6">
            {story.paragraphs.map((p, i) => (
              <p
                key={i}
                className={i === 0 ? "font-display text-3xl font-medium leading-snug text-cream" : "text-[15px] leading-[1.85] text-cream/70"}
              >
                {p}
              </p>
            ))}
            {story.founderNote && (
              <blockquote className="mt-8 border border-dashed border-gold/50 p-5 text-sm italic leading-relaxed text-gold/80">
                {story.founderNote}
              </blockquote>
            )}
          </Reveal>
        </div>
        <Reveal className="lg:col-span-6 lg:pt-24">
          <Photo
            src={images.story}
            alt="The House of Dum kitchen, a handi of dum biryani cooking slowly"
            className="group aspect-[4/5] w-full"
            imgClassName="transition-transform duration-[1400ms] group-hover:scale-105"
          />
        </Reveal>
      </div>
    </section>
  );
}
