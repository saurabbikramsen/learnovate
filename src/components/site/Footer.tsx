import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logoUrl from "@/assets/learnovate-logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Top band */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-10">

          {/* Brand column */}
          <div>
            <img src={logoUrl} alt="Learnovate" className="h-12 w-auto brightness-0 invert mb-4" />
            <p className="text-sm text-white/65 leading-relaxed">
              Pokhara-based ECAN-registered consultancy guiding Nepali students to top universities, language test success and confident visa outcomes.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="social"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 hover:-translate-y-0.5 transition-all">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold mb-4 text-white text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/65">
              {[
                { to: "/" as const,            label: "Home"          },
                { to: "/countries" as const,   label: "Countries"     },
                { to: "/services" as const,    label: "Services"      },
                { to: "/test-prepare" as const,label: "Test Prepare"  },
                { to: "/testimonials" as const,label: "Testimonials"  },
                { to: "/faq" as const,         label: "FAQ"           },
                { to: "/contact" as const,     label: "Contact"       },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="hover:text-white transition-colors inline-flex items-center gap-1.5 group">
                    <span className="h-1 w-1 rounded-full bg-white/30 group-hover:bg-white/80 transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-bold mb-4 text-white text-sm uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-mint shrink-0" />
                <div>
                  Mahendrapool-4, Pokhara, Nepal<br />
                  <span className="text-xs text-white/45">(Opposite to Hulak Bhawan)</span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-mint shrink-0" />
                <a href="tel:+97761586088" className="hover:text-white transition-colors">061-586088</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-mint shrink-0" />
                <a href="tel:+9779856082953" className="hover:text-white transition-colors">+977 9856082953</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-mint shrink-0" />
                <a href="mailto:info@learnovate.edu.np" className="hover:text-white transition-colors">info@learnovate.edu.np</a>
              </li>
            </ul>
          </div>

          {/* Free consultation CTA */}
          <div>
            <h4 className="font-bold mb-4 text-white text-sm uppercase tracking-widest">Get Started</h4>
            <p className="text-sm text-white/65 mb-4 leading-relaxed">
              Book a free counselling session and take the first step towards your dream university.
            </p>
            <Link to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-mint text-mint-foreground px-5 py-2.5 text-sm font-bold hover:scale-[1.03] hover:shadow-glow transition-all">
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
        <span>© {new Date().getFullYear()} Learnovate Int'l Education Consultant, Pokhara. All rights reserved.</span>
        <span className="inline-flex items-center gap-1">
          ECAN Registered <span className="h-1 w-1 rounded-full bg-mint" /> Member
        </span>
      </div>
    </footer>
  );
}
