import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Services } from "@/components/site/Services";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services — Learnovate" },
      { name: "description", content: "IELTS · PTE · Duolingo prep, university placements, scholarship support, SOP writing and visa assistance from Learnovate, Pokhara." },
      { property: "og:title", content: "Our Services — Learnovate" },
      { property: "og:description", content: "End-to-end study abroad services from a trusted Pokhara consultancy." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}