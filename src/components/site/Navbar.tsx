import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Languages,
  Sprout,
  GraduationCap,
  CreditCard,
  FileText,
  Plane,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logoUrl from "@/assets/learnovate-logo.png";
import { countries } from "@/data/countries";
import { services } from "@/data/services";

const serviceIcons = {
  Languages,
  Sprout,
  GraduationCap,
  CreditCard,
  FileText,
  Plane,
} as const;

const simpleLinks = [
  { to: "/book-ielts", label: "Book IELTS" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | "services" | "countries">(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-card border-b border-border"
          : "bg-background/60 backdrop-blur-sm"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" hash="home" className="flex items-center">
          <img src={logoUrl} alt="Learnovate Int'l Education Consultant" className="h-10 w-auto" />
        </Link>
        <ul className="hidden lg:flex items-center gap-8">
          <li
            className="relative"
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Services <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            {openMenu === "services" && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                <div className="w-80 bg-card border border-border rounded-xl shadow-elegant p-2">
                  {services.map((s) => {
                    const Icon = serviceIcons[s.icon] ?? GraduationCap;
                    return (
                      <Link
                        key={s.slug}
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        onClick={() => setOpenMenu(null)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-foreground hover:bg-soft hover:text-primary group"
                      >
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="font-medium">{s.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => setOpenMenu("countries")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link
              to="/countries"
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Countries <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            {openMenu === "countries" && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                <div className="w-[28rem] bg-card border border-border rounded-xl shadow-elegant p-3 grid grid-cols-2 gap-1">
                  {countries.map((c) => (
                    <Link
                      key={c.slug}
                      to="/countries/$slug"
                      params={{ slug: c.slug }}
                      onClick={() => setOpenMenu(null)}
                      className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-soft hover:text-primary transition-colors"
                    >
                      <img
                        src={`https://flagcdn.com/w40/${c.code}.png`}
                        alt={`${c.name} flag`}
                        className="h-4 w-6 object-cover rounded-sm border border-border"
                      />
                      <span className="text-sm font-medium text-foreground">{c.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
          {simpleLinks.map((l) => (
            <li key={l.label}>
              <Link to={l.to} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center justify-center rounded-full bg-mint text-mint-foreground px-5 py-2.5 text-sm font-bold hover:scale-[1.03] transition-transform"
        >
          Free Consultation
        </Link>
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in-up max-h-[80vh] overflow-y-auto">
          <ul className="px-4 py-4 space-y-2">
            <li>
              <Link to="/services" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary font-semibold">
                Services
              </Link>
              <ul className="pl-2 mt-1 space-y-1">
                {services.map((s) => {
                  const Icon = serviceIcons[s.icon] ?? GraduationCap;
                  return (
                    <li key={s.slug}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-foreground/80 hover:bg-secondary"
                      >
                        <Icon className="h-4 w-4 text-primary" />
                        {s.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <Link to="/countries" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary font-semibold">
                Countries
              </Link>
              <ul className="pl-2 mt-1 grid grid-cols-2 gap-1">
                {countries.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to="/countries/$slug"
                      params={{ slug: c.slug }}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-foreground/80 hover:bg-secondary"
                    >
                      <img src={`https://flagcdn.com/w40/${c.code}.png`} alt="" className="h-3 w-5 object-cover rounded-sm" />
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {simpleLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md bg-primary text-primary-foreground text-center font-semibold">
                Free Consultation
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}