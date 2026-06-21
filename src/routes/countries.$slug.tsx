import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, GraduationCap, MapPin, Briefcase, Wallet, Clock, Languages, Building2, CheckCircle2, Globe2, Award, TrendingUp } from "lucide-react";
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
            to="/countries"
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
                  to="/contact"
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
            { icon: MapPin,        label: "Universities", value: country.unis,                                       grad: "from-blue-600 to-blue-400"    },
            { icon: Calendar,      label: "Intakes",      value: country.intake,                                      grad: "from-emerald-600 to-emerald-400" },
            { icon: GraduationCap, label: "Top Courses",  value: country.popularCourses.slice(0, 2).join(" · "), grad: "from-violet-600 to-violet-400"  },
          ].map((f) => (
            <div key={f.label} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border shadow-card hover-lift">
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${f.grad} text-white shadow-card shrink-0`}>
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

      {/* Country at a glance */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-bold uppercase tracking-widest mb-3">
              Country Snapshot
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">{country.name} at a glance</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Building2, label: "Capital", value: country.capital },
              { icon: Languages, label: "Language", value: country.language },
              { icon: Wallet, label: "Currency", value: country.currency },
              { icon: GraduationCap, label: "Tuition Range", value: country.tuitionRange },
              { icon: MapPin, label: "Living Cost", value: country.livingCost },
              { icon: Clock, label: "Work While Studying", value: country.workHours },
            ].filter((f) => f.value).map((f) => (
              <div key={f.label} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border shadow-card hover-lift">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary border border-border shrink-0">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">{f.label}</div>
                  <div className="font-semibold text-foreground mt-1">{f.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-bold uppercase tracking-widest mb-3">
              Why {country.name}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">What makes it special</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {country.highlights.map((h: Country["highlights"][number], i: number) => {
              const gradients = ["from-blue-600 to-blue-400", "from-emerald-600 to-emerald-400", "from-violet-600 to-violet-400"];
              const grad = gradients[i % gradients.length];
              return (
                <div key={h.title} className="p-7 rounded-2xl bg-card border border-border shadow-card hover-lift relative overflow-hidden">
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${grad}`} />
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${grad} text-white mb-4 shadow-card`}>
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{h.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{h.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      {country.opportunities && (
        <section className="py-20 bg-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-bold uppercase tracking-widest mb-3">
                Opportunities
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Career &amp; immigration pathways</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {country.opportunities.map((o: { title: string; desc: string }, i: number) => {
                const icons   = [Globe2, Briefcase, Award, TrendingUp];
                const gradients = ["from-blue-600 to-blue-400", "from-amber-500 to-amber-400", "from-emerald-600 to-emerald-400", "from-violet-600 to-violet-400"];
                const Icon = icons[i % icons.length];
                const grad = gradients[i % gradients.length];
                return (
                  <div key={o.title} className="p-7 rounded-2xl bg-card border border-border shadow-card hover-lift relative overflow-hidden">
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${grad}`} />
                    <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${grad} text-white mb-4 shadow-card`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{o.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{o.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Course details table */}
      {country.courseDetails && (
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Top Programs</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Featured courses & fees</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-5">
              {country.courseDetails.map((c: { name: string; level: string; duration: string; avgFee: string; careers: string }) => (
                <div key={c.name} className="p-6 rounded-2xl bg-card border border-border shadow-card hover-lift">
                  <div className="flex items-center gap-2 mb-3 text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-accent text-primary font-semibold">{c.level}</span>
                    <span className="px-2.5 py-1 rounded-full border border-border text-muted-foreground">{c.duration}</span>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3">{c.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Avg fee</span>
                      <span className="font-semibold text-foreground">{c.avgFee}</span>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Career outcomes</div>
                      <div className="text-foreground/80">{c.careers}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Top universities + Requirements */}
      <section className="py-20 bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          {(country.universityDetails ?? country.topUniversities) && (
            <div className="p-8 rounded-2xl bg-card border border-border shadow-card">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Partner Universities</span>
              <h3 className="text-2xl font-bold mt-2 mb-5 text-foreground">Where our students study</h3>
              {country.universityDetails ? (
                <ul className="space-y-4">
                  {country.universityDetails.map((u: { name: string; city: string; type?: string; note?: string }) => (
                    <li key={u.name} className="p-4 rounded-xl border border-border bg-soft/50 hover:border-primary/40 transition-colors">
                      <div className="flex items-start gap-3">
                        <Building2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-bold text-foreground">{u.name}</span>
                            {u.type && (
                              <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-accent border border-border rounded-full px-2 py-0.5">{u.type}</span>
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
                            <MapPin className="h-3 w-3" /> {u.city}
                          </div>
                          {u.note && <p className="text-sm text-foreground/75 mt-2 leading-relaxed">{u.note}</p>}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-3">
                  {country.topUniversities!.map((u: string) => (
                    <li key={u} className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/85">{u}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
          {country.requirements && (
            <div className="p-8 rounded-2xl bg-card border border-border shadow-card">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Admission Requirements</span>
              <h3 className="text-2xl font-bold mt-2 mb-5 text-foreground">What you'll need</h3>
              <ul className="space-y-3">
                {country.requirements.map((r: string) => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/85">{r}</span>
                  </li>
                ))}
              </ul>
              {country.postStudyWork && (
                <div className="mt-6 p-4 rounded-xl bg-accent/60 border border-border">
                  <div className="text-xs uppercase tracking-widest font-semibold text-primary">Post-Study Work</div>
                  <div className="font-semibold text-foreground mt-1">{country.postStudyWork}</div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Popular courses */}
      <section className="py-20 bg-background">
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
            <Link to="/countries" className="text-sm font-semibold text-primary hover:underline">
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