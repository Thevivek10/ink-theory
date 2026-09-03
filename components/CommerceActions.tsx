"use client";

import { Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { addToCart } from "@/lib/cart-store";

export function AddToCartButton({ productId }: { productId: string }) {
  const [added, setAdded] = useState(false);

  return (
    <button
      className="mini-add"
      type="button"
      onClick={() => {
        addToCart(productId);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1200);
      }}
    >
      <ShoppingBag size={16} />
      {added ? "Added" : "Add"}
    </button>
  );
}

export function WishlistButton() {
  const [active, setActive] = useState(false);

  return (
    <button
      aria-label="Toggle wishlist"
      className={`wishlist ${active ? "active" : ""}`}
      type="button"
      onClick={() => setActive((value) => !value)}
    >
      <Heart size={20} fill={active ? "currentColor" : "none"} />
    </button>
  );
}
