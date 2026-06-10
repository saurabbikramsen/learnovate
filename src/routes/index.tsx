import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Certificates } from "@/components/site/Certificates";
import { Team } from "@/components/site/Team";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Learnovate Int'l Education Consultant — Pokhara, Nepal" },
      { name: "description", content: "ECAN-registered consultancy at Mahendrapool-4, Pokhara, offering IELTS, PTE, Duolingo prep, scholarship support and overseas university placements." },
      { property: "og:title", content: "Learnovate — Study Abroad & Test Prep in Pokhara" },
      { property: "og:description", content: "IELTS · PTE · Duolingo · International university placements · Visa support. ECAN registered." },
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
            streetAddress: "Mahendrapool-4 (opposite Hulak Bhawan)",
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
      <Certificates />
      <Team />
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </main>
  );
}
