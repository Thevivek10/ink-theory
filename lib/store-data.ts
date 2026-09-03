export type Product = {
  id: string;
  name: string;
  category: "Oversized" | "Hoodies" | "Graphic Tees" | "Accessories";
  gender: "Men" | "Women" | "Oversized";
  price: number;
  colors: string[];
  image: string;
  badge?: string;
};

export type Category = {
  title: string;
  href: string;
  image: string;
};

export const categories: Category[] = [
  {
    title: "MEN",
    href: "/?category=men",
    image: "/assets/category-men.svg",
  },
  {
    title: "WOMEN",
    href: "/?category=women",
    image: "/assets/category-women.svg",
  },
  {
    title: "OVERSIZED",
    href: "/?category=oversized",
    image: "/assets/category-oversized.svg",
  },
  {
    title: "ACCESSORIES",
    href: "/?category=accessories",
    image: "/assets/cap-black.svg",
  },
];

export const products: Product[] = [
  {
    id: "ink-splash-tee",
    name: "Ink Splash Tee",
    category: "Oversized",
    gender: "Oversized",
    price: 1199,
    colors: ["#0f1115", "#244d7c", "#f4f1ea"],
    image: "/assets/tee-black.svg",
    badge: "New",
  },
  {
    id: "ink-theory-hoodie",
    name: "Ink Theory Hoodie",
    category: "Hoodies",
    gender: "Men",
    price: 1799,
    colors: ["#1f4d79", "#111318", "#d8d6d1"],
    image: "/assets/hoodie-blue.svg",
  },
  {
    id: "abstract-flow-tee",
    name: "Abstract Flow Tee",
    category: "Graphic Tees",
    gender: "Women",
    price: 1199,
    colors: ["#f3efe8", "#0f1115", "#9aa7b3"],
    image: "/assets/tee-white.svg",
  },
  {
    id: "midnight-drip-hoodie",
    name: "Midnight Drip Hoodie",
    category: "Hoodies",
    gender: "Oversized",
    price: 1799,
    colors: ["#111318", "#244d7c", "#8b8f96"],
    image: "/assets/hoodie-black.svg",
    badge: "Limited",
  },
  {
    id: "signature-it-cap",
    name: "Signature IT Cap",
    category: "Accessories",
    gender: "Men",
    price: 799,
    colors: ["#111318", "#f3efe8", "#244d7c"],
    image: "/assets/cap-black.svg",
  },
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
