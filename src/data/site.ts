/**
 * ─────────────────────────────────────────────────────────────
 *  HOUSE OF DUM — central content & config
 *  Everything the owner needs to edit lives in this file.
 *  Any value wrapped in [SQUARE BRACKETS] is a placeholder.
 *  Replace it with the real value and the site updates itself
 *  (buttons, links, structured data, footer, map).
 * ─────────────────────────────────────────────────────────────
 */

export const isPlaceholder = (v?: string) => !v || v.trim().startsWith("[");

export const site = {
  name: "HOUSE OF DUM",
  shortName: "House of Dum",
  title: "House of Dum | Authentic Hyderabad Dum Biryani",
  description:
    "House of Dum — serving authentic Hyderabad Dum Biryani, slow cooked to perfection with traditional flavours and rich aromas.",
  tagline: "In the world of fast food, we are slow cooked.",
  supporting:
    "Creating magic through taste. Serving authentic Hyderabad Dum Biryani.",
  footerLine: "Creating Magic Through Taste.",

  /** Public URL of the site, e.g. "https://houseofdum.in" (used for SEO tags) */
  siteUrl: "[WEBSITE URL]",

  contact: {
    address: "[RESTAURANT ADDRESS]",
    phone: "[PHONE NUMBER]",
    /** WhatsApp number with country code, digits only, e.g. "919876543210" */
    whatsapp: "[WHATSAPP NUMBER]",
    /** Zomato / Swiggy / own ordering page */
    orderUrl: "[ORDERING LINK]",
    /** Google Maps share link for the "Get directions" button */
    directionsUrl: "[GOOGLE MAPS LINK]",
    /** Google Maps "Embed a map" src URL. Leave as placeholder to show the map placeholder. */
    mapEmbedUrl: "[GOOGLE MAPS EMBED URL]",
    hours: "[OPENING HOURS]",
  },

  social: {
    instagramHandle: "houseofdum",
  },
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Our Process", href: "#process" },
  { label: "Contact", href: "#order" },
];

/**
 * Photo paths. Drop real photos into /public/images using these names
 * (or change the names here). Until a file exists, a dark placeholder
 * tile that names the missing file is shown instead.
 */
export const images = {
  hero: "/images/hero-biryani.jpg",
  intro: "/images/intro-biryani.jpg",
  signature: "/images/signature-plate.jpg",
  why: [
    "/images/why-slow-cooked.jpg",
    "/images/why-authentic.jpg",
    "/images/why-ingredients.jpg",
    "/images/why-passion.jpg",
  ],
  story: "/images/story.jpg",
  instagram: [
    "/images/insta-1.jpg",
    "/images/insta-2.jpg",
    "/images/insta-3.jpg",
    "/images/insta-4.jpg",
    "/images/insta-5.jpg",
    "/images/insta-6.jpg",
  ],
};

export const menu = [
  {
    id: "biryani",
    title: "Biryani",
    note: "Cooked on dum, served hot.",
    items: [
      {
        name: "Chicken Dum Biryani",
        description:
          "Tender chicken and long-grain basmati, layered with spices and sealed to cook on dum.",
        price: "₹ 350",
        image: "/images/menu-chicken-biryani.jpg",
      },
      {
        name: "Mutton Dum Biryani",
        description:
          "Slow-cooked mutton and basmati, layered and sealed so every grain takes on the flavour.",
        price: "₹ 450",
        image: "/images/menu-mutton-biryani.jpg",
      },
      {
        name: "Special Dum Biryani",
        description:
          "Our house special, layered and slow cooked in the traditional dum style.",
        price: "₹ 550",
        image: "/images/menu-special-biryani.jpg",
      },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    note: "What belongs next to the handi.",
    items: [
      {
        name: "Mirchi Ka Salan",
        description:
          "A tangy, spiced chilli gravy, the classic partner to dum biryani.",
        price: "₹ 120",
        image: "/images/menu-salan.jpg",
      },
      {
        name: "Raita",
        description: "Cool, whisked yoghurt to balance the spice.",
        price: "₹ 80",
        image: "/images/menu-raita.jpg",
      },
      {
        name: "Fried Onions",
        description: "Crisp, golden onions to top every bite.",
        price: "₹ 50",
        image: "/images/menu-onions.jpg",
      },
    ],
  },
  {
    id: "extras",
    title: "Desserts",
    note: "The perfect end to your meal.",
    items: [
      {
        name: "Gulab Jamun",
        description: "Soft milk dumplings in sugar syrup.",
        price: "₹ 100",
        image: "/images/menu-extra-1.jpg",
      },
      {
        name: "Double Ka Meetha",
        description: "Classic Hyderabadi bread pudding dessert.",
        price: "₹ 150",
        image: "/images/menu-extra-2.jpg",
      },
      {
        name: "Extra Dum Rice",
        description: "A portion of fragrant dum cooked biryani rice.",
        price: "₹ 180",
        image: "/images/menu-extra-3.jpg",
      },
    ],
  },
];

export const why = [
  { title: "Slow Cooked", text: "Because great flavour takes time." },
  {
    title: "Authentic Flavours",
    text: "Inspired by the traditional flavours of Hyderabad.",
  },
  { title: "Quality Ingredients", text: "Every ingredient has a purpose." },
  { title: "Made With Passion", text: "From the kitchen to your table." },
];

export const steps = [
  {
    n: "01",
    title: "Layer",
    text: "Carefully layer the rice, meat and spices.",
    image: "/images/process-1-layer.jpg",
    alt: "Rice, meat and spices being layered in a handi",
  },
  {
    n: "02",
    title: "Seal",
    text: "Seal the handi to lock in the flavours.",
    image: "/images/process-2-seal.jpg",
    alt: "A handi being sealed for dum cooking",
  },
  {
    n: "03",
    title: "Slow Cook",
    text: "Let the biryani cook gently in traditional Dum style.",
    image: "/images/process-3-slow-cook.jpg",
    alt: "Biryani slow cooking on dum",
  },
  {
    n: "04",
    title: "Serve",
    text: "Open the Dum. Release the aroma. Serve hot.",
    image: "/images/process-4-serve.jpg",
    alt: "Steam rising as the handi is opened",
  },
];

export const story = {
  paragraphs: [
    "House of Dum is built on a simple belief: biryani tastes better when nobody hurries it.",
    "We bring authentic Hyderabad Dum Biryani to people who appreciate slow cooking and real flavour. Rice, meat and spices are layered in the handi, sealed, and left to cook gently in their own steam.",
    "Fast food has its place. This isn't it. Here the aroma comes first, and the first spoonful is worth the wait.",
  ],
  /** Optional personal note. Replace, or set to "" to hide. */
  founderNote:
    "[FOUNDER NOTE — add a personal message or the brand's origin story here]",
};
