"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  CartItem,
  cartSubtotal,
  getCartProducts,
  readCart,
  updateQuantity,
} from "@/lib/cart-store";
import { formatPrice } from "@/lib/store-data";

export function CartView() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const sync = () => setItems(readCart());
    sync();
    window.addEventListener("cartchange", sync);
    return () => window.removeEventListener("cartchange", sync);
  }, []);

  const cartProducts = useMemo(() => getCartProducts(items), [items]);
  const subtotal = cartSubtotal(items);
  const shipping = subtotal >= 999 || subtotal === 0 ? 0 : 99;
  const total = subtotal + shipping;

  if (cartProducts.length === 0) {
    return (
      <main className="simple-page">
        <section className="empty-state">
          <span className="section-kicker">Your cart</span>
          <h1>Your story starts with a first piece.</h1>
          <p>Add tees, hoodies, or accessories from the new drop.</p>
          <Link href="/#new-drops" className="primary-button">
            Shop new drops →
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="simple-page">
      <section className="cart-layout">
        <div>
          <span className="section-kicker">Your cart</span>
          <h1>Review Your Bag</h1>
          <div className="cart-list">
            {cartProducts.map(({ product, quantity }) => (
              <article className="cart-row" key={product.id}>
                <div className="cart-image">
                  <Image src={product.image} alt={product.name} fill sizes="120px" />
                </div>
                <div>
                  <h2>{product.name}</h2>
                  <p>
                    {product.gender} / {product.category}
                  </p>
                  <strong>{formatPrice(product.price)}</strong>
                </div>
                <div className="quantity-control">
                  <button
                    aria-label="Decrease quantity"
                    type="button"
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                  >
                    <Minus size={15} />
                  </button>
                  <span>{quantity}</span>
                  <button
                    aria-label="Increase quantity"
                    type="button"
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                  >
                    <Plus size={15} />
                  </button>
                </div>
                <button
                  className="remove-button"
                  aria-label="Remove item"
                  type="button"
                  onClick={() => updateQuantity(product.id, 0)}
                >
                  <Trash2 size={18} />
                </button>
              </article>
            ))}
          </div>
        </div>
        <aside className="summary-box">
          <h2>Order Summary</h2>
          <div>
            <span>Subtotal</span>
            <strong>{formatPrice(subtotal)}</strong>
          </div>
          <div>
            <span>Shipping</span>
            <strong>{shipping === 0 ? "Free" : formatPrice(shipping)}</strong>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <strong>{formatPrice(total)}</strong>
          </div>
          <Link href="/checkout" className="primary-button">
            Checkout →
          </Link>
        </aside>
      </section>
    </main>
  );
}
