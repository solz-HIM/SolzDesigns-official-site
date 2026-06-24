import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Solz Designs to start your premium website project — e-commerce, portfolio, or business sites. Based in Zimbabwe.",
  alternates: { canonical: "https://solzdesigns.co.zw/contact" },
};

export default function Contact() {
  return (
    <>
      <Navigation />
      <main>
        <section>
          <h1>Let's build something premium.</h1>
          <p>
            Tell us about your project and we'll get back to you. Whether it's an
            e-commerce store, a portfolio, or a full business website — we're
            ready.
          </p>
        </section>

        <section>
          <h2>Get in touch</h2>
          <ul>
            <li>
              Phone / WhatsApp:{" "}
              <a href="tel:+263778231792">+263 77 823 1792</a>
            </li>
            <li>
              Email:{" "}
              <a href="mailto:mcgyver8605@gmail.com">mcgyver8605@gmail.com</a>
            </li>
            <li>
              Facebook:{" "}
              <a
                href="https://www.facebook.com/profile.php?id=61590005594397"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solz Designs on Facebook
              </a>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
