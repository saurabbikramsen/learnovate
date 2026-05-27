import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, GraduationCap, MapPin } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { countries, getCountryBySlug } from "@/data/countries";
import type { Country } from "@/data/countries";

export const Route = createFileRoute("/countries/$slug")({
  loader: ({ params }) => {
    const country = getCountryBySlug(params.slug);
    if (!country) throw notFound();
    return { country };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.country;
    const title = c ? `Study in ${c.name} — Learnovate` : "Study Abroad — Learnovate";
    const description = c
      ? `${c.tagline} Get free counselling from Learnovate, Pokhara for studying in ${c.name}.`
      : "Explore study abroad destinations with Learnovate.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(c?.heroImg ? [{ property: "og:image", content: c.heroImg }] : []),
        ...(c?.heroImg ? [{ name: "twitter:image", content: c.heroImg }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 text-center">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Country not found</h1>
        <p className="text-muted-foreground mb-6">We don't have a page for that destination yet.</p>
        <Link to="/" className="text-primary font-semibold hover:underline">Back to home</Link>
      </div>
    </div>
  ),
  component: CountryPage,
});

function CountryPage() {
  const { country } = Route.useLoaderData();
  const others = countries.filter((c) => c.slug !== country.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-16 bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            hash="countries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> All destinations
          </Link>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-3 rounded-full bg-card border border-border px-4 py-2 mb-6 shadow-card">
                <img
                  src={`https://flagcdn.com/w80/${country.code}.png`}
                  alt={`${country.name} flag`}
                  className="h-5 w-7 object-cover rounded-sm"
                />
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">Destination</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.05]">
                Study in <span className="text-primary">{country.name}</span>
              </h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">
                {country.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/"
                  hash="contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-bold hover:-translate-y-0.5 hover:shadow-elegant transition-all"
                >
                  Book Free Counselling
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://wa.me/9779856082953"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card text-foreground px-6 py-3 font-semibold hover:-translate-y-0.5 hover:shadow-card transition-all"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-border shadow-card">
                <img
                  src={country.heroImg}
                  alt={`Study in ${country.name}`}
                  className="w-full h-[360px] lg:h-[440px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-4">
          {[
            { icon: MapPin, label: "Universities", value: country.unis },
            { icon: Calendar, label: "Intakes", value: country.intake },
            { icon: GraduationCap, label: "Top Courses", value: country.popularCourses.slice(0, 2).join(" · ") },
          ].map((f) => (
            <div key={f.label} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border shadow-card hover-lift">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary border border-border shrink-0">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">{f.label}</div>
                <div className="font-bold text-foreground mt-1">{f.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Why {country.name}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">What makes it special</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {country.highlights.map((h: Country["highlights"][number]) => (
              <div key={h.title} className="p-7 rounded-2xl bg-card border border-border shadow-card hover-lift">
                <h3 className="font-bold text-lg text-foreground mb-2">{h.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular courses */}
      <section className="py-20 bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Popular Courses</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">What Nepali students study in {country.name}</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {country.popularCourses.map((c: string) => (
              <span
                key={c}
                className="px-5 py-2.5 rounded-full bg-card border border-border text-foreground font-semibold shadow-card hover:-translate-y-0.5 hover:border-primary/40 transition-all"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Other destinations */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Explore More</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Other destinations</h2>
            </div>
            <Link to="/" hash="countries" className="text-sm font-semibold text-primary hover:underline">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {others.map((c) => (
              <Link
                key={c.slug}
                to="/countries/$slug"
                params={{ slug: c.slug }}
                className="group rounded-2xl bg-card border border-border p-6 text-center shadow-card hover-lift block"
              >
                <div className="mx-auto mb-3 h-16 w-16 overflow-hidden rounded-full border border-border shadow-card transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={`https://flagcdn.com/w160/${c.code}.png`}
                    alt={`${c.name} flag`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="font-bold text-foreground">{c.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{c.unis}</div>
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