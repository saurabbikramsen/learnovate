import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Countries } from "@/components/site/Countries";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createFileRoute("/countries/")({
  head: () => ({
    meta: [
      { title: "Study Abroad Destinations — Learnovate" },
      { name: "description", content: "Explore study abroad destinations supported by Learnovate — Australia, UK, USA, Canada, New Zealand, Japan, South Korea and Malta." },
      { property: "og:title", content: "Study Abroad Destinations — Learnovate" },
      { property: "og:description", content: "Top universities, intakes, scholarships and visa pathways across 8 countries." },
    ],
  }),
  component: CountriesPage,
});

function CountriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <Countries />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}