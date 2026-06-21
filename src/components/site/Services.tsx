import { FileText, Plane, Sprout, Languages, GraduationCap, CreditCard, ArrowRight, CalendarCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { services } from "@/data/services";
import type { Service } from "@/data/services";

const iconMap: Record<Service["icon"], typeof FileText> = { FileText, Plane, Sprout, Languages, GraduationCap, CreditCard };

/* One distinct accent colour per service card */
const cardAccents: Record<string, string> = {
  "university-placements": "from-blue-700 to-blue-500",
  "scholarship-support":   "from-amber-600 to-amber-400",
  "documentation-sop":     "from-violet-600 to-violet-400",
  "visa-assistance":       "from-emerald-600 to-emerald-400",
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-bold uppercase tracking-widest mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-foreground">Everything You Need,<br />All in One Place</h2>
          <p className="text-muted-foreground text-lg">Comprehensive support designed for every stage of your study abroad journey.</p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            const accent = cardAccents[s.slug] ?? "from-primary to-blue-400";
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group overflow-hidden rounded-2xl bg-card border border-border shadow-card hover-lift block"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  {/* Coloured icon badge */}
                  <div className={`absolute bottom-3 left-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-elegant`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                {/* Content */}
                <div className="p-5 relative">
                  {/* Coloured top line on hover */}
                  <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${accent} scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
                  <h3 className="font-bold text-base mb-1.5 text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-3 line-clamp-2">{s.short}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Test Prepare CTA banner */}
        <div className="mt-12 rounded-2xl bg-primary overflow-hidden flex flex-col sm:flex-row items-stretch shadow-elegant">
          <div className="flex-1 p-6 sm:p-8 flex items-center gap-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white shrink-0">
              <CalendarCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Ready to prepare for your language test?</h3>
              <p className="text-sm text-white/70 mt-0.5">IELTS · PTE · Duolingo · Japanese — limited seats per batch.</p>
            </div>
          </div>
          <div className="sm:border-l border-white/15 flex items-center px-6 sm:px-8 pb-6 sm:pb-0">
            <Link
              to="/test-prepare"
              className="inline-flex items-center gap-2 rounded-full bg-mint text-mint-foreground px-6 py-3 font-bold hover:scale-[1.03] hover:shadow-glow transition-all whitespace-nowrap"
            >
              Test Prepare <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
