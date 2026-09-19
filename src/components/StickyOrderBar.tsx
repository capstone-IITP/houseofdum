"use client";
import { MessageCircle, Phone } from "lucide-react";
import Button from "./Button";
import { callHref, orderHref, whatsappHref } from "@/lib/links";

/** Always-visible ordering shortcut on phones. */
export default function StickyOrderBar() {
  const iconBtn =
    "flex h-12 w-12 shrink-0 items-center justify-center border border-gold/50 text-gold active:bg-gold/10";
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-gold/30 bg-ink/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md md:hidden">
      <Button href={orderHref()} className="h-12 flex-1 !py-0">
        Order now
      </Button>
      <a href={callHref()} aria-label="Call us" className={iconBtn}>
        <Phone className="h-5 w-5" />
      </a>
      <a href={whatsappHref()} aria-label="Order on WhatsApp" className={iconBtn}>
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}
