import { Link } from "@tanstack/react-router";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { team } from "@/data/team";

export function Team() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Our People</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">Meet the Learnovate Team</h2>
          <p className="text-muted-foreground text-lg">Counsellors, trainers and visa specialists who'll walk your journey with you.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m) => (
            <Link
              key={m.slug}
              to="/team/$slug"
              params={{ slug: m.slug }}
              className="group overflow-hidden rounded-2xl bg-card border border-border shadow-card hover-lift block"
            >
              <div className="relative h-64 overflow-hidden bg-soft">
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-foreground">{m.name}</h3>
                <p className="text-sm text-primary font-semibold mt-1">{m.role}</p>
                <div className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> {m.phone}</div>
                  <div className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> {m.email}</div>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  View profile <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
