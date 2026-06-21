import { Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Calendar } from "lucide-react";
import { countries } from "@/data/countries";

export function Countries() {
  return (
    <section id="countries" className="py-24 bg-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-bold uppercase tracking-widest mb-4">
            Destinations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-foreground">Countries We Support</h2>
          <p className="text-muted-foreground text-lg">
            Click a country to explore partner universities, intakes, tuition and visa pathways.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((c) => {
            const uniCount = c.universityDetails?.length ?? c.topUniversities?.length ?? 0;
            return (
              <Link
                key={c.slug}
                to="/countries/$slug"
                params={{ slug: c.slug }}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-card hover-lift block"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={c.heroImg}
                    alt={`Study in ${c.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-card/95 backdrop-blur px-3 py-1.5 border border-border shadow-card">
                    <img
                      src={`https://flagcdn.com/w80/${c.code}.png`}
                      alt={`${c.name} flag`}
                      className="h-4 w-6 object-cover rounded-sm"
                    />
                    <span className="text-xs font-bold text-foreground">{c.name}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-foreground/85 leading-relaxed line-clamp-2 mb-4">{c.tagline}</p>
                  <div className="flex flex-wrap gap-2 text-xs mb-4">
                    {uniCount > 0 && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary text-white font-semibold text-xs">
                        <Building2 className="h-3 w-3" /> {uniCount}+ universities
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-soft text-muted-foreground font-semibold border border-border">
                      <Calendar className="h-3 w-3" /> {c.intake}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all">
                    View universities <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}