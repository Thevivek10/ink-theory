import Link from "next/link";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="brand dark">
            <span className="brand-mark">IT</span>
            <span>
              <strong>INK THEORY</strong>
              <small>WEAR YOUR STORY</small>
            </span>
          </div>
          <p>We do not just make clothes, we create stories you can wear.</p>
          <div className="socials">
            <Instagram size={18} />
            <Facebook size={18} />
            <Twitter size={18} />
            <Youtube size={18} />
          </div>
        </div>
        <div>
          <h3>Shop</h3>
          <Link href="/?category=men">All Products</Link>
          <Link href="/?category=oversized">T-Shirts</Link>
          <Link href="/?category=women">Hoodies</Link>
          <Link href="/#new-drops">New Drops</Link>
          <Link href="/cart">Cart</Link>
        </div>
        <div>
          <h3>Customer Care</h3>
          <Link href="/cart">Track Your Order</Link>
          <Link href="/checkout">Returns & Refunds</Link>
          <Link href="/checkout">Shipping Policy</Link>
          <Link href="/checkout">Size Guide</Link>
          <Link href="/checkout">Contact Us</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/#about">About Us</Link>
          <Link href="/#about">Our Story</Link>
          <Link href="/#lookbook">Lookbook</Link>
          <Link href="/#about">Sustainability</Link>
          <Link href="/#about">Press</Link>
        </div>
        <div className="newsletter">
          <h3>Newsletter</h3>
          <p>Be the first to know about new drops and exclusive offers.</p>
          <form>
            <input aria-label="Email address" placeholder="Enter your email" type="email" />
            <button type="submit">→</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Ink Theory. All rights reserved.</span>
        <span>VISA &nbsp; Mastercard &nbsp; UPI &nbsp; Paytm</span>
      </div>
    </footer>
  );
}
