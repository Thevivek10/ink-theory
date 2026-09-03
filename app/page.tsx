import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Globe2,
  LockKeyhole,
  PackageCheck,
  RefreshCcw,
  Star,
  Truck,
} from "lucide-react";
import { AddToCartButton, WishlistButton } from "@/components/CommerceActions";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { categories, formatPrice, products } from "@/lib/store-data";

const sideTeasers = [
  ["Oversized Tees", "/assets/tee-black.svg"],
  ["Premium Hoodies", "/assets/hoodie-black.svg"],
  ["Signature Caps", "/assets/cap-black.svg"],
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="scroll-mark">SCROLL DOWN</div>
          <div className="hero-copy">
            <p>NEW SEASON. NEW YOU.</p>
            <h1>
              WEAR
              <span>YOUR</span>
              <em>STORY</em>
            </h1>
            <div className="hero-line" />
            <p className="hero-subcopy">
              Every stitch has a meaning.
              <br />
              Every design tells a story.
            </p>
            <div className="hero-actions">
              <Link href="#new-drops" className="primary-button">
                SHOP NOW <ArrowRight size={16} />
              </Link>
              <Link href="#collections" className="secondary-button">
                EXPLORE COLLECTIONS
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <Image
              src="/assets/hero-figure.svg"
              alt="Model wearing Ink Theory oversized tee"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="hero-teasers">
            {sideTeasers.map(([label, image]) => (
              <Link href="#new-drops" key={label} className="teaser">
                <span className="teaser-image">
                  <Image src={image} alt="" fill sizes="72px" />
                </span>
                <span>
                  <strong>{label}</strong>
                  EXPLORE →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="benefits" aria-label="Store benefits">
          <div>
            <Truck size={30} />
            <span>
              <strong>FREE SHIPPING</strong>
              On all orders above ₹999
            </span>
          </div>
          <div>
            <BadgeCheck size={30} />
            <span>
              <strong>PREMIUM QUALITY</strong>
              Finest fabrics & prints
            </span>
          </div>
          <div>
            <RefreshCcw size={30} />
            <span>
              <strong>EASY RETURNS</strong>
              Hassle free returns
            </span>
          </div>
          <div>
            <LockKeyhole size={30} />
            <span>
              <strong>SECURE PAYMENTS</strong>
              100% safe & secure
            </span>
          </div>
        </section>

        <section className="content-section" id="collections">
          <div className="section-heading">
            <h2>SHOP BY CATEGORY</h2>
            <Link href="/?category=all">VIEW ALL CATEGORIES →</Link>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <Link className="category-card" href={category.href} key={category.title}>
                <Image src={category.image} alt={category.title} fill sizes="25vw" />
                <span>
                  <strong>{category.title}</strong>
                  <i />
                </span>
                <b>→</b>
              </Link>
            ))}
          </div>
        </section>

        <section className="content-section" id="new-drops">
          <div className="section-heading">
            <h2>NEW DROPS</h2>
            <Link href="/?drop=new">VIEW ALL DROPS →</Link>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image">
                  {product.badge && <span className="product-badge">{product.badge}</span>}
                  <WishlistButton />
                  <Image src={product.image} alt={product.name} fill sizes="20vw" />
                </div>
                <div className="product-meta">
                  <div>
                    <h3>{product.name}</h3>
                    <p>{formatPrice(product.price)}</p>
                  </div>
                  <div className="color-dots" aria-label={`${product.name} colors`}>
                    {product.colors.map((color) => (
                      <span key={color} style={{ background: color }} />
                    ))}
                  </div>
                </div>
                <AddToCartButton productId={product.id} />
              </article>
            ))}
          </div>
          <div className="carousel-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </section>

        <section className="limited-banner">
          <div>
            <span>LIMITED DROP</span>
            <h2>
              NOT JUST
              <br />
              CLOTHES.
              <br />
              IT&apos;S YOUR
              <br />
              <em>IDENTITY.</em>
            </h2>
          </div>
          <Link href="#new-drops" className="light-button">
            SHOP LIMITED EDITION <ArrowRight size={16} />
          </Link>
          <div className="banner-models">
            <Image src="/assets/banner-models.svg" alt="Ink Theory limited drop preview" fill sizes="50vw" />
          </div>
        </section>

        <section className="content-section community" id="lookbook">
          <div className="section-heading">
            <h2>REAL PEOPLE. REAL STORIES.</h2>
            <Link href="#lookbook">JOIN THE COMMUNITY #WEARYOURSTORY</Link>
          </div>
          <div className="story-grid">
            {["White fit", "Back print", "Blue tee", "Street hoodie", "Cap look", "Navy hoodie"].map(
              (label, index) => (
                <div className="story-card" key={label}>
                  <Image
                    src={`/assets/story-${index + 1}.svg`}
                    alt={label}
                    fill
                    loading="eager"
                    sizes="16vw"
                  />
                </div>
              ),
            )}
          </div>
        </section>

        <section className="stats-band">
          <div>
            <PackageCheck size={38} />
            <strong>200K+</strong>
            <span>FOLLOWERS</span>
          </div>
          <div>
            <Truck size={38} />
            <strong>50K+</strong>
            <span>HAPPY CUSTOMERS</span>
          </div>
          <div>
            <Star size={38} />
            <strong>4.8/5</strong>
            <span>CUSTOMER RATING</span>
          </div>
          <div>
            <Globe2 size={38} />
            <strong>SHIPPING</strong>
            <span>WORLDWIDE</span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
