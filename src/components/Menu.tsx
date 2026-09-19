"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { menu } from "@/data/site";
import { orderHref } from "@/lib/links";
import Photo from "./Photo";
import { Reveal, RevealLines } from "./Reveal";

export default function Menu() {
  const [catId, setCatId] = useState(menu[0].id);
  const [activeName, setActiveName] = useState<string | null>(null);

  const cat = menu.find((c) => c.id === catId) ?? menu[0];
  const activeItem = cat.items.find((i) => i.name === activeName) ?? cat.items[0];

  return (
    <section id="menu" className="relative bg-ink py-28 lg:py-40">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10">
        <div className="max-w-2xl">
          <RevealLines
            lines={["OUR MENU"]}
            className="font-display text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.95] text-gold"
          />
          <Reveal delay={0.15}>
            <p className="mt-5 font-display text-2xl italic text-cream/85 md:text-3xl">
              Simple ingredients. Bold flavours. Proper Dum.
            </p>
          </Reveal>
        </div>

        {/* Category tabs */}
        <div role="tablist" aria-label="Menu categories" className="mt-14 flex gap-8 overflow-x-auto hide-scrollbar whitespace-nowrap border-b border-gold/20">
          {menu.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={c.id === catId}
              onClick={() => {
                setCatId(c.id);
                setActiveName(null);
              }}
              className={`relative pb-4 text-[12px] font-semibold uppercase tracking-[0.24em] transition-colors ${
                c.id === catId ? "text-gold-light" : "text-cream/50 hover:text-cream"
              }`}
            >
              {c.title}
              {c.id === catId && (
                <motion.span layoutId="menu-underline" className="absolute inset-x-0 -bottom-px h-[2px] bg-gold" />
              )}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-16 lg:grid-cols-12">
          {/* List */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
              >
                <p className="mb-8 text-sm italic text-cream/50">{cat.note}</p>
                <ul className="space-y-10">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      onMouseEnter={() => setActiveName(item.name)}
                      onFocus={() => setActiveName(item.name)}
                      className="group flex gap-5"
                    >
                      {/* Thumbnail on small screens */}
                      <Photo
                        src={item.image}
                        alt={item.name}
                        bare
                        className="h-20 w-20 shrink-0 rounded-full border border-gold/40 lg:hidden"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline gap-3">
                          <h3 className="font-display text-2xl font-semibold text-cream transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold-light md:text-[2rem]">
                            {item.name}
                          </h3>
                          <span className="hidden flex-1 border-b border-dotted border-gold/40 sm:block" aria-hidden="true" />
                          <span className="ml-auto whitespace-nowrap text-sm font-semibold tracking-wide text-gold sm:ml-0">
                            {item.price}
                          </span>
                        </div>
                        <div className="mt-2 flex items-end justify-between gap-6">
                          <p className="max-w-md text-[14px] leading-relaxed text-cream/65">{item.description}</p>
                          <a
                            href={orderHref()}
                            {...(orderHref().startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            aria-label={`Order ${item.name}`}
                            className="inline-flex shrink-0 items-center gap-1.5 border-b border-gold/50 pb-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold transition-all hover:gap-2.5 hover:border-gold-light hover:text-gold-light"
                          >
                            Order
                            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Featured photo follows the hovered item (desktop) */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
                <div className="absolute -left-4 -top-4 h-full w-full rounded-t-full border border-gold/35" aria-hidden="true" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.image}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                  >
                    <Photo src={activeItem.image} alt={activeItem.name} className="h-full w-full rounded-t-full" />
                  </motion.div>
                </AnimatePresence>
              </div>
              <p className="mt-6 text-center font-display text-xl italic text-cream/70">{activeItem.name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
