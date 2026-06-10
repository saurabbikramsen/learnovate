import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Learnovate" },
      { name: "description", content: "Common questions about study abroad, language test prep, scholarships and visa support — answered by Learnovate, Pokhara." },
      { property: "og:title", content: "FAQ — Learnovate" },
      { property: "og:description", content: "Answers to the questions Nepali students ask us most often." },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <FAQ />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}