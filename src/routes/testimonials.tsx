import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Testimonials } from "@/components/site/Testimonials";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Student Stories — Learnovate" },
      { name: "description", content: "Real success stories from Learnovate students now studying across Australia, UK, USA, Canada and beyond." },
      { property: "og:title", content: "Student Stories — Learnovate" },
      { property: "og:description", content: "Hear directly from our students about their study abroad journey." },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <Testimonials />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}