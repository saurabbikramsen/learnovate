import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Countries } from "@/components/site/Countries";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Learnovate Int'l Education Consultant — Pokhara, Nepal" },
      { name: "description", content: "ECAN-registered consultancy in Pokhara offering IELTS, PTE, Duolingo prep, Forestry/Agriculture/Veterinary entrance coaching, and overseas university placements." },
      { property: "og:title", content: "Learnovate — Study Abroad & Test Prep in Pokhara" },
      { property: "og:description", content: "IELTS · PTE · Duolingo · Forestry, Agriculture & Veterinary entrance prep · International university placements. ECAN registered." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Learnovate Int'l Education Consultant",
          description: "ECAN-registered education and visa consultancy in Pokhara, Nepal.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Pokhara",
            addressCountry: "NP",
          },
          telephone: "+977-9856082953",
          email: "info@learnovate.com.np",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Countries />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </main>
  );
}
