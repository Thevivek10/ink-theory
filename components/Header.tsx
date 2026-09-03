"use client";

import Link from "next/link";
import {
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { cartCount, readCart } from "@/lib/cart-store";

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const sync = () => setCount(cartCount(readCart()));
    sync();
    window.addEventListener("cartchange", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("cartchange", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return (
    <>
      <div className="announcement">FREE SHIPPING ON ORDERS ABOVE ₹999</div>
      <header className="site-header">
        <Link href="/" className="brand" aria-label="Ink Theory home">
          <span className="brand-mark">IT</span>
          <span>
            <strong>INK THEORY</strong>
            <small>WEAR YOUR STORY</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          <div
            className="shop-menu"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className="nav-button"
              onClick={() => setOpen((value) => !value)}
              type="button"
            >
              SHOP <ChevronDown size={14} />
            </button>
            {open && (
              <div className="dropdown">
                <Link href="/?category=men">Men</Link>
                <Link href="/?category=women">Women</Link>
                <Link href="/?category=oversized">Oversized</Link>
              </div>
            )}
          </div>
          <Link href="/#new-drops">New Drops</Link>
          <Link href="/#collections">Collections</Link>
          <Link href="/#about">About Us</Link>
          <Link href="/#lookbook">Lookbook</Link>
        </nav>

        <div className="header-actions">
          <button aria-label="Search" className="icon-button" type="button">
            <Search size={22} />
          </button>
          <button aria-label="Account" className="icon-button" type="button">
            <UserRound size={22} />
          </button>
          <button aria-label="Wishlist" className="icon-button hide-small" type="button">
            <Heart size={21} />
          </button>
          <Link href="/cart" className="icon-button cart-link" aria-label="Cart">
            <ShoppingBag size={23} />
            {count > 0 && <span>{count}</span>}
          </Link>
          <button
            className="icon-button mobile-toggle"
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-panel">
          <button
            className="icon-button mobile-close"
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <X size={24} />
          </button>
          <Link href="/?category=men">Men</Link>
          <Link href="/?category=women">Women</Link>
          <Link href="/?category=oversized">Oversized</Link>
          <Link href="/#new-drops">New Drops</Link>
          <Link href="/#collections">Collections</Link>
          <Link href="/#lookbook">Lookbook</Link>
        </div>
      )}
    </>
  );
}
