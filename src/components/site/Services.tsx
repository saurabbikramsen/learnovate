import { FileText, Plane, Sprout, Languages, GraduationCap, CreditCard, ArrowRight, CalendarCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { services } from "@/data/services";
import type { Service } from "@/data/services";

const iconMap: Record<Service["icon"], typeof FileText> = { FileText, Plane, Sprout, Languages, GraduationCap, CreditCard };

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">Everything You Need, All in One Place</h2>
          <p className="text-muted-foreground text-lg">Comprehensive support designed for every stage of your study abroad journey.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group overflow-hidden rounded-2xl bg-card border border-border shadow-card hover-lift block"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute bottom-3 left-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-card text-primary border border-border shadow-card">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-3">{s.short}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent border border-border shadow-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-card text-primary border border-border shadow-card shrink-0">
              <CalendarCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground">Ready to start IELTS prep?</h3>
              <p className="text-sm text-muted-foreground">Reserve your seat in the next batch — limited spots per class.</p>
            </div>
          </div>
          <Link
            to="/book-ielts"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 font-bold hover:-translate-y-0.5 hover:shadow-elegant transition-all whitespace-nowrap"
          >
            Book IELTS Seat <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}