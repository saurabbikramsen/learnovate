import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Team } from "@/components/site/Team";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createFileRoute("/team/")({
  head: () => ({
    meta: [
      { title: "Meet the Team — Learnovate" },
      { name: "description", content: "Counsellors, trainers, documentation specialists and visa experts behind Learnovate, Pokhara." },
      { property: "og:title", content: "Meet the Team — Learnovate" },
      { property: "og:description", content: "Get to know the people who'll walk your study abroad journey with you." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <Team />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}