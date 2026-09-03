"use client";

import { Product, products } from "@/lib/store-data";

export type CartItem = {
  productId: string;
  quantity: number;
};

const STORAGE_KEY = "ink-theory-cart";

export function readCart(): CartItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return [];
    }

    const parsed = JSON.parse(stored) as CartItem[];
    return parsed.filter(
      (item) =>
        typeof item.productId === "string" &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0,
    );
  } catch {
    return [];
  }
}

export function writeCart(items: CartItem[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("cartchange"));
}

export function clearCart() {
  writeCart([]);
}

export function addToCart(productId: string) {
  const current = readCart();
  const existing = current.find((item) => item.productId === productId);

  if (existing) {
    existing.quantity += 1;
    writeCart([...current]);
    return;
  }

  writeCart([...current, { productId, quantity: 1 }]);
}

export function updateQuantity(productId: string, quantity: number) {
  const next = readCart()
    .map((item) => (item.productId === productId ? { ...item, quantity } : item))
    .filter((item) => item.quantity > 0);
  writeCart(next);
}

export function getCartProducts(items: CartItem[]) {
  return items
    .map((item) => {
      const product = products.find((entry) => entry.id === item.productId);
      return product ? { product, quantity: item.quantity } : null;
    })
    .filter(Boolean) as { product: Product; quantity: number }[];
}

export function cartCount(items: CartItem[]) {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

export function cartSubtotal(items: CartItem[]) {
  return getCartProducts(items).reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );
}
