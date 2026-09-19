import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { isPlaceholder, site } from "@/data/site";
import { callHref, directionsHref, orderHref, whatsappHref } from "@/lib/links";
import Button from "./Button";
import { Reveal, RevealLines } from "./Reveal";

export default function OrderSection() {
  const c = site.contact;
  const hasMap = !isPlaceholder(c.mapEmbedUrl);

  return (
    <section id="order" className="relative overflow-hidden bg-charcoal py-28 lg:py-40">
      <div className="pattern-jaali pointer-events-none absolute inset-0 opacity-[0.04]" />
      <div className="relative mx-auto grid w-full max-w-[1320px] gap-16 px-6 md:px-10 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-6">
          <RevealLines
            lines={["YOUR DUM", "IS WAITING."]}
            className="font-display text-[clamp(3rem,8.5vw,7rem)] font-semibold leading-[0.93] text-gold"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 font-display text-2xl italic text-cream md:text-3xl">
              Ready for authentic Hyderabad Dum Biryani?
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={orderHref()} arrow>
                Order now
              </Button>
              <Button href={directionsHref()} variant="outline" icon={<MapPin className="h-4 w-4" aria-hidden="true" />}>
                Get directions
              </Button>
              <Button href={callHref()} variant="outline" icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
                Call us
              </Button>
            </div>
            <a
              href={whatsappHref()}
              {...(whatsappHref().startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="mt-5 inline-flex items-center gap-2 text-sm text-cream/75 transition-colors hover:text-gold-light"
            >
              <MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" />
              Prefer WhatsApp? Order there.
            </a>

            <ul className="mt-12 space-y-5 border-t border-gold/25 pt-8 text-[15px] text-cream/80">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span>{c.address}</span>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span>{c.phone}</span>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span>{c.hours}</span>
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal className="lg:col-span-6" delay={0.15}>
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-gold/40 bg-ink lg:aspect-auto lg:h-full lg:min-h-[420px]">
            {hasMap ? (
              <iframe
                src={c.mapEmbedUrl}
                title="House of Dum location map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0 grayscale invert-[0.92] contrast-[0.9]"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                <div className="pattern-jaali absolute inset-0 opacity-[0.08]" />
                <MapPin className="relative h-9 w-9 text-gold" aria-hidden="true" />
                <p className="relative text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">Map placeholder</p>
                <p className="relative max-w-xs text-sm text-cream/50">
                  Paste a Google Maps embed URL into <code className="text-cream/70">mapEmbedUrl</code> in
                  src/data/site.ts.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
