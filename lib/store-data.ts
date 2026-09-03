export type Product = {
  id: string;
  name: string;
  category: "Graphic Tees" | "Crop Tops" | "Jersey Tees" | "Polo Tees" | "Oversized";
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
    href: "/#men",
    image: "/assets/men-thalasi-jersey.jpg",
  },
  {
    title: "WOMEN",
    href: "/#women",
    image: "/assets/women-vogue-boss.jpg",
  },
  {
    title: "OVERSIZED",
    href: "/#oversized",
    image: "/assets/oversized-summertime.jpg",
  },
  {
    title: "NEW DROPS",
    href: "/#new-drops",
    image: "/assets/oversized-porsche-white.jpg",
  },
];

export const products: Product[] = [
  {
    id: "women-vogue-boss-tee",
    name: "Vogue Boss Graphic Tee",
    category: "Graphic Tees",
    gender: "Women",
    price: 1299,
    colors: ["#f4f1ea", "#c8a15e", "#111318"],
    image: "/assets/women-vogue-boss.jpg",
    badge: "New",
  },
  {
    id: "women-panda-pocket-tee",
    name: "Panda Pocket Tee",
    category: "Graphic Tees",
    gender: "Women",
    price: 999,
    colors: ["#c7cdd0", "#111318", "#f4f1ea"],
    image: "/assets/women-panda-pocket.jpg",
  },
  {
    id: "women-pink-bow-line-tee",
    name: "Pink Bow Line Tee",
    category: "Graphic Tees",
    gender: "Women",
    price: 1199,
    colors: ["#e7ded0", "#d29ba0", "#111318"],
    image: "/assets/women-pink-bow-line.jpg",
  },
  {
    id: "women-ribbed-crop-tops",
    name: "Ribbed Crop Top Set",
    category: "Crop Tops",
    gender: "Women",
    price: 1499,
    colors: ["#f4f1ea", "#e4b9cf", "#111318"],
    image: "/assets/women-crop-tops.jpg",
  },
  {
    id: "men-thalasi-jersey",
    name: "Thalasi Jersey Tee",
    category: "Jersey Tees",
    gender: "Men",
    price: 1599,
    colors: ["#56311f", "#f2e7cf", "#111318"],
    image: "/assets/men-thalasi-jersey.jpg",
    badge: "New",
  },
  {
    id: "men-burgundy-polo",
    name: "Burgundy Racing Polo",
    category: "Polo Tees",
    gender: "Men",
    price: 1699,
    colors: ["#6c1820", "#f4f1ea", "#111318"],
    image: "/assets/men-burgundy-polo.jpg",
  },
  {
    id: "men-vintage-brown-tee",
    name: "Vintage Brown Graphic Tee",
    category: "Graphic Tees",
    gender: "Men",
    price: 1399,
    colors: ["#6b432f", "#d7d0bd", "#111318"],
    image: "/assets/men-vintage-brown.jpg",
  },
  {
    id: "men-leotude-navy-tee",
    name: "Leotude Navy Tee",
    category: "Graphic Tees",
    gender: "Men",
    price: 1299,
    colors: ["#111827", "#c0a06c", "#f3eee5"],
    image: "/assets/men-leotude-navy.jpg",
  },
  {
    id: "men-faaaahhh-washed-tee",
    name: "Washed Faaaahhh Tee",
    category: "Oversized",
    gender: "Men",
    price: 1199,
    colors: ["#343333", "#efe0b8", "#b8a487"],
    image: "/assets/men-faaaahhh.jpg",
  },
  {
    id: "oversized-summertime-tee",
    name: "Summertime Back Print Tee",
    category: "Oversized",
    gender: "Oversized",
    price: 1499,
    colors: ["#b9b9a7", "#ece4ce", "#111318"],
    image: "/assets/oversized-summertime.jpg",
    badge: "Limited",
  },
  {
    id: "oversized-bow-maroon-tee",
    name: "Maroon Bow Oversize Tee",
    category: "Oversized",
    gender: "Oversized",
    price: 1299,
    colors: ["#7a1822", "#eeb7cc", "#ded7cc"],
    image: "/assets/oversized-bow-maroon.jpg",
  },
  {
    id: "oversized-porsche-white-tee",
    name: "911 White Oversized Tee",
    category: "Oversized",
    gender: "Oversized",
    price: 1599,
    colors: ["#f4f4f2", "#111318", "#858585"],
    image: "/assets/oversized-porsche-white.jpg",
  },
  {
    id: "oversized-patterned-black-tee",
    name: "Patterned Black Oversized Tee",
    category: "Oversized",
    gender: "Oversized",
    price: 1399,
    colors: ["#222225", "#d9d9d9", "#7a91a6"],
    image: "/assets/oversized-patterned-black.jpg",
  },
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
