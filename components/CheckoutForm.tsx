"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  CartItem,
  cartSubtotal,
  clearCart,
  getCartProducts,
  readCart,
} from "@/lib/cart-store";
import { formatPrice } from "@/lib/store-data";

export function CheckoutForm() {
  const router = useRouter();
  const [items, setItems] = useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState("upi");

  useEffect(() => {
    setItems(readCart());
  }, []);

  const cartProducts = useMemo(() => getCartProducts(items), [items]);
  const subtotal = cartSubtotal(items);
  const shipping = subtotal >= 999 || subtotal === 0 ? 0 : 99;
  const total = subtotal + shipping;

  function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    clearCart();
    router.push("/order-confirmation");
  }

  return (
    <main className="simple-page">
      <form className="checkout-layout" onSubmit={submitOrder}>
        <section className="checkout-card">
          <span className="section-kicker">Mock checkout</span>
          <h1>Shipping Details</h1>
          <div className="form-grid">
            <label>
              Full name
              <input required placeholder="Vivek Kumar" />
            </label>
            <label>
              Phone
              <input required placeholder="+91 98765 43210" />
            </label>
            <label className="wide">
              Address
              <input required placeholder="House number, street, area" />
            </label>
            <label>
              City
              <input required placeholder="New Delhi" />
            </label>
            <label>
              Pincode
              <input required placeholder="110001" />
            </label>
          </div>

          <h2>Payment Method</h2>
          <div className="payment-options">
            {["upi", "card", "cod"].map((method) => (
              <label key={method} className={paymentMethod === method ? "selected" : ""}>
                <input
                  checked={paymentMethod === method}
                  name="payment"
                  type="radio"
                  value={method}
                  onChange={() => setPaymentMethod(method)}
                />
                {method === "upi" ? "UPI" : method === "card" ? "Card" : "Cash on Delivery"}
              </label>
            ))}
          </div>
        </section>

        <aside className="summary-box">
          <h2>Order Summary</h2>
          {cartProducts.length === 0 ? (
            <p>Your cart is empty. This checkout will create a demo order.</p>
          ) : (
            cartProducts.map(({ product, quantity }) => (
              <div key={product.id}>
                <span>
                  {product.name} × {quantity}
                </span>
                <strong>{formatPrice(product.price * quantity)}</strong>
              </div>
            ))
          )}
          <div>
            <span>Shipping</span>
            <strong>{shipping === 0 ? "Free" : formatPrice(shipping)}</strong>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <strong>{formatPrice(total)}</strong>
          </div>
          <button className="primary-button" type="submit">
            Place mock order →
          </button>
        </aside>
      </form>
    </main>
  );
}
