"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";
import { nav } from "@/data/site";
import { instagramUrl, orderHref, whatsappHref } from "@/lib/links";
import Logo from "./Logo";
import Button from "./Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          solid ? "border-gold/20 bg-ink/90 py-3 backdrop-blur-md" : "border-transparent bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-6 md:px-10">
          <a href="#home" aria-label="House of Dum, back to top" onClick={() => setOpen(false)}>
            <Logo />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative py-1 text-[12px] font-medium uppercase tracking-[0.18em] text-cream/80 transition-colors hover:text-gold-light"
              >
                {l.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
            <Button href={orderHref()} size="sm">
              Order now
            </Button>
          </nav>

          <button
            type="button"
            className="relative z-50 flex h-11 w-11 items-center justify-center lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block h-4 w-7">
              <motion.span
                className="absolute left-0 top-0 h-px w-full bg-gold"
                animate={open ? { y: 8, rotate: 45 } : { y: 0, rotate: 0 }}
                transition={{ duration: 0.35 }}
              />
              <motion.span
                className="absolute left-0 top-[8px] h-px w-full bg-gold"
                animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="absolute bottom-0 left-0 h-px w-full bg-gold"
                animate={open ? { y: -8, rotate: -45 } : { y: 0, rotate: 0 }}
                transition={{ duration: 0.35 }}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink px-6 pb-10 pt-28"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="pattern-jaali pointer-events-none absolute inset-0 opacity-[0.06]" />
            <nav aria-label="Mobile" className="relative flex flex-col gap-1">
              {nav.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.07, duration: 0.6 }}
                  className="border-b border-gold/15 py-4 font-display text-4xl font-semibold uppercase tracking-wide text-cream active:text-gold-light"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="relative flex flex-col gap-5">
              <Button href={orderHref()} onClick={() => setOpen(false)} className="w-full">
                Order now
              </Button>
              <div className="flex items-center gap-5 text-gold">
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href={whatsappHref()} aria-label="WhatsApp">
                  <MessageCircle className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
