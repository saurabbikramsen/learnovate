import { useState, useEffect } from "react";
import {
  Menu, X, ChevronDown,
  Languages, Sprout, GraduationCap, CreditCard, FileText, Plane,
  Home, BookOpen, BarChart3, Laptop,
  MessageSquare, Trophy, Star,
  Building2, HelpCircle,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logoUrl from "@/assets/learnovate-logo.png";
import { countries } from "@/data/countries";
import { services } from "@/data/services";

const serviceIcons = { Languages, Sprout, GraduationCap, CreditCard, FileText, Plane } as const;

const testPrepareOptions = [
  { id: "ielts",    label: "IELTS",                desc: "International English Language Testing System", icon: BookOpen  },
  { id: "pte",      label: "PTE Academic",          desc: "Pearson Test of English — AI-scored",          icon: BarChart3 },
  { id: "duolingo", label: "Duolingo English Test", desc: "At-home test, results in 48 hours",            icon: Laptop    },
  { id: "japanese", label: "Japanese Language",     desc: "JLPT N5 to N2 preparation courses",           icon: Languages },
] as const;

const moreOptions = [
  { label: "Testimonials",     desc: "Real student success stories",                icon: Star,        to: "/testimonials" as const },
  { label: "Student Reviews",  desc: "Written feedback from Learnovate alumni",     icon: MessageSquare, to: "/testimonials" as const },
  { label: "UK Success Stories",desc: "Students now thriving & settled in the UK", icon: Trophy,      to: "/testimonials" as const },
  { label: "FAQ",              desc: "Common questions answered",                   icon: HelpCircle,  to: "/faq" as const          },
  { label: "About Learnovate", desc: "Registration, location & free counselling",   icon: Building2,   to: "/faq" as const          },
] as const;

type OpenMenu = null | "services" | "countries" | "test-prepare" | "more";

export function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [mobileSections, setMobileSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobile = (key: string) =>
    setMobileSections((prev) => ({ ...prev, [key]: !prev[key] }));

  const panel = "absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50";

  const dropdownHeader = (label: string, sub: string) => (
    <div className="bg-primary px-4 py-3">
      <p className="text-xs font-bold uppercase tracking-widest text-white/70">{label}</p>
      <p className="text-sm font-semibold text-white mt-0.5">{sub}</p>
    </div>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/92 backdrop-blur-md shadow-card border-b-2 border-primary/25"
          : "bg-white/72 backdrop-blur-sm",
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src={logoUrl} alt="Learnovate" className="h-10 w-auto" />
        </Link>

        {/* ── Desktop nav ── */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">

          {/* Home */}
          <li>
            <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Home
            </Link>
          </li>

          {/* Services ▾ */}
          <li className="relative" onMouseEnter={() => setOpenMenu("services")} onMouseLeave={() => setOpenMenu(null)}>
            <Link to="/services" className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Services <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            {openMenu === "services" && (
              <div className={panel}>
                <div className="w-80 bg-white border border-border rounded-xl shadow-elegant overflow-hidden">
                  {dropdownHeader("Our Services", "Everything you need to go abroad")}
                  <div className="p-2">
                    {services.map((s) => {
                      const Icon = serviceIcons[s.icon] ?? GraduationCap;
                      return (
                        <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} onClick={() => setOpenMenu(null)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-foreground hover:bg-accent group transition-colors">
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="font-medium">{s.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Countries ▾ */}
          <li className="relative" onMouseEnter={() => setOpenMenu("countries")} onMouseLeave={() => setOpenMenu(null)}>
            <Link to="/countries" className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Countries <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            {openMenu === "countries" && (
              <div className={panel}>
                <div className="w-[28rem] bg-white border border-border rounded-xl shadow-elegant overflow-hidden">
                  {dropdownHeader("Destinations", "10+ countries we actively support")}
                  <div className="p-3 grid grid-cols-2 gap-1">
                    {countries.map((c) => (
                      <Link key={c.slug} to="/countries/$slug" params={{ slug: c.slug }} onClick={() => setOpenMenu(null)}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent hover:text-primary transition-colors">
                        <img src={`https://flagcdn.com/w40/${c.code}.png`} alt={`${c.name} flag`} className="h-4 w-6 object-cover rounded-sm border border-border" />
                        <span className="text-sm font-medium text-foreground">{c.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Test Prepare ▾ */}
          <li className="relative" onMouseEnter={() => setOpenMenu("test-prepare")} onMouseLeave={() => setOpenMenu(null)}>
            <Link to="/test-prepare" className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Test Prepare <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            {openMenu === "test-prepare" && (
              <div className={panel}>
                <div className="w-72 bg-white border border-border rounded-xl shadow-elegant overflow-hidden">
                  {dropdownHeader("Language Tests", "Choose your exam to prepare")}
                  <div className="p-2">
                    {testPrepareOptions.map((t) => {
                      const Icon = t.icon;
                      return (
                        <Link key={t.id} to="/test-prepare" hash={t.id} onClick={() => setOpenMenu(null)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-foreground hover:bg-accent group transition-colors">
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div>
                            <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{t.label}</div>
                            <div className="text-[11px] text-muted-foreground leading-tight">{t.desc}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Contact — simple link */}
          <li>
            <Link to="/contact" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Contact
            </Link>
          </li>

          {/* More ▾ — LAST item */}
          <li className="relative" onMouseEnter={() => setOpenMenu("more")} onMouseLeave={() => setOpenMenu(null)}>
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              More <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", openMenu === "more" && "rotate-180")} />
            </button>
            {openMenu === "more" && (
              <div className={cn(panel, "right-0 left-auto translate-x-0")}>
                <div className="w-72 bg-white border border-border rounded-xl shadow-elegant overflow-hidden">
                  {dropdownHeader("More Pages", "Testimonials, FAQ & more")}
                  <div className="p-2">
                    {/* Testimonials section */}
                    <div className="px-3 pt-2 pb-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Testimonials</p>
                    </div>
                    {moreOptions.filter((o) => o.to === "/testimonials").map((t) => {
                      const Icon = t.icon;
                      return (
                        <Link key={t.label} to={t.to} onClick={() => setOpenMenu(null)}
                          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-foreground hover:bg-accent group transition-colors">
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                            <Icon className="h-3.5 w-3.5" />
                          </span>
                          <div>
                            <div className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">{t.label}</div>
                            <div className="text-[11px] text-muted-foreground leading-tight">{t.desc}</div>
                          </div>
                        </Link>
                      );
                    })}
                    {/* Divider */}
                    <div className="my-1 border-t border-border" />
                    {/* FAQ section */}
                    <div className="px-3 pt-2 pb-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">FAQ</p>
                    </div>
                    {moreOptions.filter((o) => o.to === "/faq").map((t) => {
                      const Icon = t.icon;
                      return (
                        <Link key={t.label} to={t.to} onClick={() => setOpenMenu(null)}
                          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-foreground hover:bg-accent group transition-colors">
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                            <Icon className="h-3.5 w-3.5" />
                          </span>
                          <div>
                            <div className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">{t.label}</div>
                            <div className="text-[11px] text-muted-foreground leading-tight">{t.desc}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>

        {/* Free Consultation CTA */}
        <Link to="/contact"
          className="hidden lg:inline-flex items-center justify-center rounded-full bg-mint text-mint-foreground px-5 py-2.5 text-sm font-bold hover:scale-[1.03] hover:shadow-glow transition-all shrink-0">
          Free Consultation
        </Link>

        {/* Mobile hamburger */}
        <button className="lg:hidden p-2 text-foreground ml-auto" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* ── Mobile menu ── */}
      {open && (
        <div className="lg:hidden bg-white border-t border-border animate-fade-in-up max-h-[80vh] overflow-y-auto">
          <ul className="px-4 py-4 space-y-1">

            {/* Home */}
            <li>
              <Link to="/" onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-foreground hover:bg-accent font-semibold">
                <Home className="h-4 w-4 text-primary" /> Home
              </Link>
            </li>

            {/* Services */}
            <li>
              <button type="button" onClick={() => toggleMobile("services")}
                className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-foreground hover:bg-accent font-semibold">
                Services <ChevronDown className={cn("h-4 w-4 text-primary transition-transform", mobileSections.services && "rotate-180")} />
              </button>
              {mobileSections.services && (
                <ul className="pl-2 mt-1 space-y-0.5">
                  {services.map((s) => {
                    const Icon = serviceIcons[s.icon] ?? GraduationCap;
                    return (
                      <li key={s.slug}>
                        <Link to="/services/$slug" params={{ slug: s.slug }} onClick={() => setOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-foreground/80 hover:bg-accent">
                          <Icon className="h-4 w-4 text-primary" /> {s.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>

            {/* Countries */}
            <li>
              <button type="button" onClick={() => toggleMobile("countries")}
                className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-foreground hover:bg-accent font-semibold">
                Countries <ChevronDown className={cn("h-4 w-4 text-primary transition-transform", mobileSections.countries && "rotate-180")} />
              </button>
              {mobileSections.countries && (
                <ul className="pl-2 mt-1 grid grid-cols-2 gap-0.5">
                  {countries.map((c) => (
                    <li key={c.slug}>
                      <Link to="/countries/$slug" params={{ slug: c.slug }} onClick={() => setOpen(false)}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-foreground/80 hover:bg-accent">
                        <img src={`https://flagcdn.com/w40/${c.code}.png`} alt="" className="h-3 w-5 object-cover rounded-sm" />
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Test Prepare */}
            <li>
              <button type="button" onClick={() => toggleMobile("test-prepare")}
                className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-foreground hover:bg-accent font-semibold">
                Test Prepare <ChevronDown className={cn("h-4 w-4 text-primary transition-transform", mobileSections["test-prepare"] && "rotate-180")} />
              </button>
              {mobileSections["test-prepare"] && (
                <ul className="pl-2 mt-1 space-y-0.5">
                  {testPrepareOptions.map((t) => {
                    const Icon = t.icon;
                    return (
                      <li key={t.id}>
                        <Link to="/test-prepare" hash={t.id} onClick={() => setOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-foreground/80 hover:bg-accent">
                          <Icon className="h-4 w-4 text-primary" /> {t.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>

            {/* Contact */}
            <li>
              <Link to="/contact" onClick={() => setOpen(false)} className="block px-3 py-2.5 rounded-lg text-foreground hover:bg-accent">
                Contact
              </Link>
            </li>

            {/* More */}
            <li>
              <button type="button" onClick={() => toggleMobile("more")}
                className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-foreground hover:bg-accent font-semibold">
                More <ChevronDown className={cn("h-4 w-4 text-primary transition-transform", mobileSections.more && "rotate-180")} />
              </button>
              {mobileSections.more && (
                <ul className="pl-2 mt-1 space-y-0.5">
                  {moreOptions.map((t) => {
                    const Icon = t.icon;
                    return (
                      <li key={t.label}>
                        <Link to={t.to} onClick={() => setOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-foreground/80 hover:bg-accent">
                          <Icon className="h-4 w-4 text-primary" /> {t.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>

            {/* Free Consultation */}
            <li className="pt-2">
              <Link to="/contact" onClick={() => setOpen(false)}
                className="block px-3 py-3 rounded-full bg-mint text-mint-foreground text-center font-bold">
                Free Consultation
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
