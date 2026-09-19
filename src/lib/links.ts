import { site, isPlaceholder } from "@/data/site";

const digits = (s: string) => s.replace(/[^\d]/g, "");

/** Every "Order" button resolves here. Falls back to the on-page order section. */
export const orderHref = () =>
  isPlaceholder(site.contact.orderUrl) ? "#order" : site.contact.orderUrl;

export const callHref = () =>
  isPlaceholder(site.contact.phone)
    ? "#order"
    : `tel:+${digits(site.contact.phone)}`;

export const whatsappHref = () =>
  isPlaceholder(site.contact.whatsapp)
    ? "#order"
    : `https://wa.me/${digits(site.contact.whatsapp)}?text=${encodeURIComponent(
        "Hi House of Dum, I'd like to place an order."
      )}`;

export const directionsHref = () => {
  if (!isPlaceholder(site.contact.directionsUrl)) return site.contact.directionsUrl;
  if (!isPlaceholder(site.contact.address))
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      site.contact.address
    )}`;
  return "#order";
};

export const instagramUrl = `https://www.instagram.com/${site.social.instagramHandle}/`;

export const isExternal = (href: string) => /^https?:\/\//.test(href);
