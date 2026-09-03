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
import { categories, formatPrice, products, type Product } from "@/lib/store-data";

const womenProducts = products.filter((product) => product.gender === "Women");
const menProducts = products.filter((product) => product.gender === "Men");
const oversizedProducts = products.filter((product) => product.gender === "Oversized");
const communityStories = [
  {
    label: "Acid wash hoodie streetwear",
    src: "https://www.staycoldapparel.com/cdn/shop/files/Grimfall-HeavyOversizedHoodie_AcidWashed_400GSM12_13c04338-553b-4b9d-9000-e29904c432b9.jpg?v=1767528681&width=2000",
  },
  {
    label: "Black cap streetwear pose",
    src: "https://corruptedera.com/cdn/shop/files/IMG_4590_af6ac5e7-57e2-4317-b8ad-8bb3248796b3_grande.jpg?v=1696970057",
  },
  {
    label: "Black oversized tee style",
    src: "https://static.wixstatic.com/media/2b0276_aeae652c3a424bf4a8001b90c410580c~mv2.jpg/v1/fill/w_600%2Ch_800%2Cal_c%2Cq_85%2Cenc_auto/2b0276_aeae652c3a424bf4a8001b90c410580c~mv2.jpg",
  },
  {
    label: "Olive cropped hoodie",
    src: "https://www.outreapparel.com/cdn/shop/products/outre_olive_webster_hoodie-1_2048x2048.jpg?v=1579198895",
  },
  {
    label: "White city streetwear",
    src: "https://images.unsplash.com/photo-1521803751845-f36d43bb1f76?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Space graphic oversized tee",
    src: "https://subtledust.com/cdn/shop/files/DSC_4405_SpaceVintageBlack.jpg?v=1745459211&width=1728",
  },
];

function ProductSection({
  id,
  title,
  products,
}: {
  id: string;
  title: string;
  products: Product[];
}) {
  return (
    <div className="collection-block" id={id}>
      <div className="section-heading compact-heading">
        <h3>{title}</h3>
        <Link href={`/#${id}`}>VIEW {title} →</Link>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-image">
              {product.badge && <span className="product-badge">{product.badge}</span>}
              <WishlistButton />
              <Image src={product.image} alt={product.name} fill sizes="(max-width: 820px) 100vw, 25vw" />
            </div>
            <div className="product-meta">
              <div>
                <h4>{product.name}</h4>
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
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-copy sr-only">
            <p>NEW SEASON. NEW YOU.</p>
            <h1>WEAR YOUR STORY</h1>
            <p>Every stitch has a meaning. Every design tells a story.</p>
          </div>
          <div className="hero-actions">
            <Link href="#new-drops" className="primary-button">
              SHOP NOW <ArrowRight size={16} />
            </Link>
            <Link href="#collections" className="secondary-button">
              EXPLORE COLLECTIONS
            </Link>
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
            <Link href="#women">VIEW ALL DROPS →</Link>
          </div>
          <ProductSection id="women" title="WOMEN" products={womenProducts} />
          <ProductSection id="men" title="MEN" products={menProducts} />
          <ProductSection id="oversized" title="OVERSIZED" products={oversizedProducts} />
          <div className="carousel-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </section>

        <section className="limited-banner" aria-labelledby="limited-banner-title">
          <div className="sr-only">
            <span>LIMITED DROP</span>
            <h2 id="limited-banner-title">NOT JUST CLOTHES. IT&apos;S YOUR IDENTITY.</h2>
          </div>
         
        </section>

        <section className="content-section community" id="lookbook">
          <div className="section-heading">
            <h2>REAL PEOPLE. REAL STORIES.</h2>
            <Link href="#lookbook">JOIN THE COMMUNITY #WEARYOURSTORY</Link>
          </div>
          <div className="story-grid">
            {communityStories.map((story) => (
              <div className="story-card" key={story.label}>
                <Image
                  src={story.src}
                  alt={story.label}
                  fill
                  sizes="(max-width: 560px) 50vw, (max-width: 1100px) 33vw, 16vw"
                />
              </div>
            ))}
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
