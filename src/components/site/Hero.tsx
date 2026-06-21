import heroImg from "@/assets/hero-graduate.png";
import { Search, MapPin } from "lucide-react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { countries } from "@/data/countries";

import aashaGurung from "@/assets/success_stories/Aasha Gurung.jpeg";
import aashisThapaMagar from "@/assets/success_stories/Aashis Thapa Magar.jpeg";
import anishaChhetri from "@/assets/success_stories/Anisha Chhetri.jpeg";
import ashmitaThapaMagar from "@/assets/success_stories/Ashmita Thapa Magar.jpeg";
import bijayaThapaMagar from "@/assets/success_stories/Bijaya Thapa Magar.jpeg";
import bishalThapa from "@/assets/success_stories/Bishal Thapa.jpeg";
import lejinaThapaChetri from "@/assets/success_stories/Lejina Thapa Chetri.jpeg";
import rubanShrestha from "@/assets/success_stories/Ruban Shrestha.jpeg";
import rupeshShrestha from "@/assets/success_stories/Rupesh Shrestha.jpeg";
import shivaKumal from "@/assets/success_stories/Shiva Kumal.jpeg";
import suzitaRana from "@/assets/success_stories/Suzita Rana.jpeg";
import tonyaGurung from "@/assets/success_stories/Tonya Gurung.jpeg";

const successStories = [
  { name: "Aasha Gurung", country: "United Kingdom", img: aashaGurung },
  { name: "Aashis Thapa Magar", country: "United Kingdom", img: aashisThapaMagar },
  { name: "Anisha Chhetri", country: "United Kingdom", img: anishaChhetri },
  { name: "Ashmita Thapa Magar", country: "United Kingdom", img: ashmitaThapaMagar },
  { name: "Bijaya Thapa Magar", country: "United Kingdom", img: bijayaThapaMagar },
  { name: "Bishal Thapa", country: "United Kingdom", img: bishalThapa },
  { name: "Lejina Thapa Chetri", country: "United Kingdom", img: lejinaThapaChetri },
  { name: "Ruban Shrestha", country: "United Kingdom", img: rubanShrestha },
  { name: "Rupesh Shrestha", country: "United Kingdom", img: rupeshShrestha },
  { name: "Shiva Kumal", country: "United Kingdom", img: shivaKumal },
  { name: "Suzita Rana", country: "United Kingdom", img: suzitaRana },
  { name: "Tonya Gurung", country: "United Kingdom", img: tonyaGurung },
];

type UniHit = { uni: string; countryName: string; slug: string };
const universityIndex: UniHit[] = countries.flatMap((c) =>
  (c.topUniversities ?? []).map((uni) => ({ uni, countryName: c.name, slug: c.slug })),
);

export function Hero() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(successStories.length / perPage);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [] as UniHit[];
    return universityIndex
      .filter((h) => h.uni.toLowerCase().includes(q) || h.countryName.toLowerCase().includes(q))
      .slice(0, 7);
  }, [query]);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const go = (hit: UniHit) => {
    setOpen(false);
    setQuery(hit.uni);
    navigate({ to: "/countries/$slug", params: { slug: hit.slug } });
  };

  useEffect(() => {
    const id = setInterval(() => setPage((p) => (p + 1) % totalPages), 4000);
    return () => clearInterval(id);
  }, [totalPages]);

  const visible = successStories.slice(page * perPage, page * perPage + perPage);

  return (
    <section
      id="home"
      className="relative pt-28 md:pt-32 pb-0 overflow-hidden bg-hero"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.92 0.01 240) 1px, transparent 1px), linear-gradient(90deg, oklch(0.92 0.01 240) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center">
          {/* Left — copy */}
          <div className="animate-fade-in-up relative z-10 pb-12 lg:pb-20 text-center lg:text-left">
            <p
              className="text-3xl md:text-4xl mb-1"
              style={{
                fontFamily: "'Caveat', cursive",
                color: "oklch(0.55 0.18 35)",
                transform: "rotate(-3deg)",
                display: "inline-block",
              }}
            >
              make your ✦
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1] tracking-tight text-primary">
              ABROAD STUDY
            </h1>
            <p className="mt-5 text-2xl md:text-3xl font-semibold text-foreground/80">
              Dreams Come True With <span className="text-primary">Learnovate</span>
            </p>

            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              ECAN-registered consultancy in Pokhara — IELTS · PTE · Duolingo prep, scholarships, and overseas university placement under one roof.
            </p>

            {/* Search bar with university autocomplete */}
            <div ref={wrapRef} className="relative mt-8 max-w-lg mx-auto lg:mx-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (results[active]) go(results[active]);
                }}
                className="flex items-center gap-2 rounded-full bg-card p-1.5 pl-5 border border-border shadow-card"
              >
                <Search className="h-5 w-5 text-primary shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setOpen(true);
                    setActive(0);
                  }}
                  onFocus={() => setOpen(true)}
                  onKeyDown={(e) => {
                    if (!open || results.length === 0) return;
                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      setActive((a) => (a + 1) % results.length);
                    } else if (e.key === "ArrowUp") {
                      e.preventDefault();
                      setActive((a) => (a - 1 + results.length) % results.length);
                    } else if (e.key === "Escape") {
                      setOpen(false);
                    }
                  }}
                  placeholder="Search universities — try Conestoga, Pace, Roehampton…"
                  className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-foreground/50 py-2"
                  aria-label="Search universities"
                  aria-autocomplete="list"
                  aria-expanded={open && results.length > 0}
                />
                <button
                  type="submit"
                  className="rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold hover:-translate-y-0.5 hover:shadow-elegant transition-all"
                >
                  Search
                </button>
              </form>

              {open && query.trim() && (
                <div className="absolute z-40 left-0 right-0 mt-2 rounded-2xl bg-card border border-border shadow-elegant overflow-hidden">
                  {results.length === 0 ? (
                    <div className="px-5 py-4 text-sm text-muted-foreground text-left">
                      No university found.{" "}
                      <Link to="/countries" className="text-primary font-semibold underline">
                        Browse all countries
                      </Link>
                    </div>
                  ) : (
                    <ul role="listbox" className="max-h-80 overflow-auto py-1 text-left">
                      {results.map((h, i) => (
                        <li key={`${h.slug}-${h.uni}`}>
                          <button
                            type="button"
                            role="option"
                            aria-selected={i === active}
                            onMouseEnter={() => setActive(i)}
                            onClick={() => go(h)}
                            className={`w-full flex items-center justify-between gap-3 px-4 py-3 text-sm transition-colors ${
                              i === active ? "bg-accent" : "hover:bg-accent/60"
                            }`}
                          >
                            <span className="font-semibold text-foreground truncate">{h.uni}</span>
                            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                              <MapPin className="h-3.5 w-3.5" /> {h.countryName}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>

            {/* Success stories carousel */}
            <div className="mt-10">
              <p
                className="text-2xl md:text-3xl text-foreground/85 mb-4"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Our success stories
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-5">
                {visible.map((s) => (
                  <div key={s.name} className="group flex flex-col items-center animate-fade-in-up">
                    <div className="relative">
                      <img
                        src={s.img}
                        alt={`${s.name} — settled in ${s.country}`}
                        loading="lazy"
                        width={120}
                        height={120}
                        className="relative h-20 w-20 md:h-24 md:w-24 rounded-full object-cover ring-2 ring-primary/30 ring-offset-2 ring-offset-background transition-transform group-hover:scale-105"
                      />
                    </div>
                    <span className="mt-2 text-xs font-bold text-foreground/80 text-center leading-tight">{s.name}</span>
                    <span className="text-[10px] text-primary/70 font-medium">{s.country}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-center lg:justify-start gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setPage(i)}
                    aria-label={`Show stories page ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === page ? "w-6 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right — circular framed portrait with paper plane & thought bubble */}
          <div className="relative min-h-[520px] md:min-h-[600px]">
            {/* Paper plane (top-left of frame) */}
            <svg
              aria-hidden="true"
              className="absolute top-4 left-2 md:left-6 w-24 h-24 md:w-32 md:h-32 text-foreground/70 animate-float z-30"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            >
              <path d="M4 28 L60 6 L40 58 L30 38 Z" fill="white" />
              <path d="M4 28 L40 38 L30 38 Z" fill="#e6efe9" />
              <path d="M60 6 L30 38" />
            </svg>

            {/* Thought bubble */}
            <div className="absolute top-8 right-0 md:right-4 z-30 animate-float" style={{ animationDelay: "0.6s" }}>
              <div className="relative">
                <div
                  className="rounded-[42%_58%_55%_45%/55%_45%_60%_40%] bg-white border-2 border-primary/70 px-7 py-5 shadow-card"
                  style={{ minWidth: 180 }}
                >
                  <p className="text-primary font-extrabold tracking-wide leading-tight text-center text-sm md:text-base">
                    BEST<br />CONSULTANCY<br />IN NEPAL
                  </p>
                </div>
                <div className="absolute -bottom-2 -left-3 h-4 w-4 rounded-full bg-white border-2 border-primary/70" />
                <div className="absolute -bottom-6 -left-6 h-2.5 w-2.5 rounded-full bg-white border-2 border-primary/70" />
              </div>
            </div>

            {/* Circular ring frame */}
            <div className="relative mx-auto w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] mt-12">
              {/* Flat ring frame — no AI gradients */}
              <div
                className="absolute inset-0 rounded-full border-[10px] border-primary/15"
                style={{ boxShadow: "0 20px 50px -30px oklch(0.20 0.10 260 / 0.40)" }}
              />
              <div className="absolute inset-[10px] rounded-full overflow-hidden bg-[oklch(0.96_0.015_60)]">
                <img
                  src={heroImg}
                  alt="Smiling graduate in cap and gown — Learnovate study abroad consultancy"
                  width={1024}
                  height={1024}
                  className="absolute inset-0 w-full h-full object-contain object-bottom scale-110"
                />
              </div>
            </div>

            {/* Graduation cap & diploma decoration */}
            <svg
              aria-hidden="true"
              className="absolute -bottom-2 right-4 md:right-10 w-24 h-24 md:w-32 md:h-32 animate-float z-30"
              style={{ animationDelay: "1.2s" }}
              viewBox="0 0 64 64"
              fill="none"
            >
              <rect x="14" y="46" width="34" height="6" rx="1" fill="#f5e6c8" />
              <rect x="14" y="46" width="34" height="6" rx="1" fill="none" stroke="#0a0a0a" strokeWidth="1" />
              <circle cx="31" cy="49" r="2.5" fill="#c4302b" />
              <polygon points="32,14 58,22 32,30 6,22" fill="#0a0a0a" />
              <rect x="28" y="26" width="8" height="10" fill="#0a0a0a" />
              <path d="M50 22 L50 38 Q 50 42 46 42" stroke="#d4af37" strokeWidth="1.5" fill="none" />
              <circle cx="46" cy="43" r="2" fill="#d4af37" />
            </svg>
          </div>
        </div>
      </div>

      {/* Stats bar — brand navy blue */}
      <div className="mt-8 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: "600+", l: "Students Placed" },
            { n: "10+", l: "Destinations Served" },
            { n: "50+", l: "University Partners" },
            { n: "ECAN", l: "Registered Member" },
          ].map((s) => (
            <div key={s.l} className="text-center md:text-left">
              <div className="font-display text-3xl md:text-5xl font-extrabold text-white leading-none">{s.n}</div>
              <div className="text-sm md:text-base text-white/70 mt-2">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="text-center text-xs text-white/50 pb-4">(As of 2026)*</div>
      </div>
    </section>
  );
}