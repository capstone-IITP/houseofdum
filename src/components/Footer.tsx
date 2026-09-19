import { Instagram, MessageCircle } from "lucide-react";
import { site, nav } from "@/data/site";
import { instagramUrl, whatsappHref } from "@/lib/links";
import Logo from "./Logo";

const footerNav = nav.filter((n) => ["Home", "Our Story", "Menu", "Contact"].includes(n.label));

export default function Footer() {
  const c = site.contact;
  return (
    <footer className="border-t border-gold/25 bg-ink pb-28 pt-20 md:pb-12">
      <div className="mx-auto grid w-full max-w-[1320px] gap-12 px-6 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo />
          <p className="mt-6 font-display text-3xl italic text-cream">{site.footerLine}</p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center border border-gold/40 text-gold transition-colors hover:border-gold-light hover:text-gold-light"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={whatsappHref()}
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center border border-gold/40 text-gold transition-colors hover:border-gold-light hover:text-gold-light"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer" className="lg:col-span-3 lg:col-start-7">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">Explore</h2>
          <ul className="mt-5 space-y-3">
            {footerNav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-[15px] text-cream/75 transition-colors hover:text-gold-light">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">Visit</h2>
          <ul className="mt-5 space-y-3 text-[15px] text-cream/75">
            <li>{c.address}</li>
            <li>{c.phone}</li>
            <li>{c.hours}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 w-full max-w-[1320px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-3 border-t border-gold/15 pt-8 md:flex-row md:items-center">
          <p className="font-display text-xl italic text-gold">&ldquo;{site.tagline}&rdquo;</p>
          <p className="text-xs text-cream/40">&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
