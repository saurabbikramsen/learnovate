import { Link } from "@tanstack/react-router";
import { countries } from "@/data/countries";

export function Countries() {
  return (
    <section id="countries" className="py-24 bg-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Destinations</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">Countries We Support</h2>
          <p className="text-muted-foreground text-lg">Explore world-renowned universities in top study destinations.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {countries.map((c) => (
            <Link
              key={c.name}
              to="/countries/$slug"
              params={{ slug: c.slug }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 text-center shadow-card hover-lift block"
            >
              <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full border border-border shadow-card transition-transform duration-300 group-hover:scale-105">
                <img
                  src={`https://flagcdn.com/w160/${c.code}.png`}
                  srcSet={`https://flagcdn.com/w320/${c.code}.png 2x`}
                  alt={`${c.name} flag`}
                  width={160}
                  height={120}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg text-foreground">{c.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{c.unis}</p>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}