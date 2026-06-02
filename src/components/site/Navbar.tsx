import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logoUrl from "@/assets/logo.svg";


type NavLink =
  | { kind: "hash"; hash: string; label: string }
  | { kind: "route"; to: string; label: string };

const links: NavLink[] = [
  { kind: "hash", hash: "home", label: "Home" },
  { kind: "hash", hash: "about", label: "About" },
  { kind: "hash", hash: "countries", label: "Countries" },
  { kind: "hash", hash: "services", label: "Services" },
  { kind: "hash", hash: "team", label: "Team" },
  { kind: "hash", hash: "testimonials", label: "Testimonials" },
  { kind: "hash", hash: "faq", label: "FAQ" },
  { kind: "route", to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          {links.map((l) => (
            <li key={l.label}>
              {l.kind === "hash" ? (
                <Link to="/" hash={l.hash} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">{l.label}</Link>
              ) : (
                <Link to={l.to} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">{l.label}</Link>
              )}
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
        <div className="lg:hidden bg-background border-t border-border animate-fade-in-up">
          <ul className="px-4 py-4 space-y-2">
            {links.map((l) => (
              <li key={l.label}>
                {l.kind === "hash" ? (
                  <Link to="/" hash={l.hash} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary">{l.label}</Link>
                ) : (
                  <Link to={l.to} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-foreground hover:bg-secondary">{l.label}</Link>
                )}
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