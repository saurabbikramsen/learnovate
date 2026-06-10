import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Mail, Phone, ArrowLeft, GraduationCap, Languages, Sparkles } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { team } from "@/data/team";

export const Route = createFileRoute("/team/$slug")({
  loader: ({ params }) => {
    const member = team.find((m) => m.slug === params.slug);
    if (!member) throw notFound();
    return { member };
  },
  head: ({ loaderData }) => {
    const m = loaderData?.member;
    return {
      meta: [
        { title: `${m?.name ?? "Team"} — ${m?.role ?? "Learnovate"}` },
        { name: "description", content: m?.bio.slice(0, 160) ?? "Meet the Learnovate team." },
        { property: "og:title", content: `${m?.name} — Learnovate` },
        { property: "og:description", content: m?.bio.slice(0, 160) ?? "" },
        { property: "og:image", content: m?.photo ?? "" },
      ],
    };
  },
  component: TeamMemberPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-4">Team member not found</h1>
        <Link to="/" className="text-primary font-semibold hover:underline">Go home</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground mb-3">Something went wrong</h1>
        <p className="text-muted-foreground mb-4">{error.message}</p>
        <button onClick={reset} className="text-primary font-semibold hover:underline">Try again</button>
      </div>
    </div>
  ),
});

function TeamMemberPage() {
  const { member } = Route.useLoaderData();
  const others = team.filter((m) => m.slug !== member.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 md:pt-32 pb-12 bg-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/team" className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-6 hover:gap-3 transition-all">
            <ArrowLeft className="h-4 w-4" /> Back to team
          </Link>
          <div className="grid lg:grid-cols-[320px,1fr] gap-10 items-start">
            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <img src={member.photo} alt={member.name} className="w-full h-[380px] object-cover" />
            </div>
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">{member.role}</span>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mt-2">{member.name}</h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{member.bio}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 font-bold hover:-translate-y-0.5 hover:shadow-elegant transition-all">
                  <Phone className="h-4 w-4" /> {member.phone}
                </a>
                <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 rounded-full border border-border bg-card text-foreground px-5 py-2.5 font-semibold hover:-translate-y-0.5 hover:shadow-card transition-all">
                  <Mail className="h-4 w-4" /> {member.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary border border-border mb-4"><Sparkles className="h-5 w-5" /></div>
            <h3 className="font-bold text-foreground mb-3">Expertise</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {member.expertise.map((e: string) => <li key={e}>· {e}</li>)}
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary border border-border mb-4"><GraduationCap className="h-5 w-5" /></div>
            <h3 className="font-bold text-foreground mb-3">Education</h3>
            <p className="text-sm text-muted-foreground">{member.education}</p>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary border border-border mb-4"><Languages className="h-5 w-5" /></div>
            <h3 className="font-bold text-foreground mb-3">Languages</h3>
            <p className="text-sm text-muted-foreground">{member.languages.join(" · ")}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Other team members</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((m) => (
              <Link key={m.slug} to="/team/$slug" params={{ slug: m.slug }} className="group overflow-hidden rounded-2xl bg-card border border-border shadow-card hover-lift block">
                <img src={m.photo} alt={m.name} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="p-5">
                  <h3 className="font-bold text-foreground">{m.name}</h3>
                  <p className="text-sm text-primary font-semibold mt-0.5">{m.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
