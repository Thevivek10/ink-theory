import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function ConfirmationPage() {
  return (
    <>
      <Header />
      <main className="simple-page">
        <section className="empty-state success-state">
          <CheckCircle2 size={54} />
          <span className="section-kicker">Order confirmed</span>
          <h1>Your mock Ink Theory order is placed.</h1>
          <p>
            This prototype clears the local cart and shows a confirmation screen,
            without charging payment or creating a backend order.
          </p>
          <Link href="/" className="primary-button">
            Back to storefront →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
