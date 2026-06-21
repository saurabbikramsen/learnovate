import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logoUrl from "@/assets/learnovate-logo.png";

const SocialFacebook = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const SocialInstagram = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);
const SocialLinkedIn = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const socials = [
  { Comp: SocialFacebook,  href: "https://facebook.com/learnovate.pokhara", label: "Facebook"  },
  { Comp: SocialInstagram, href: "https://instagram.com/learnovate",         label: "Instagram" },
  { Comp: SocialLinkedIn,  href: "https://linkedin.com/company/learnovate",  label: "LinkedIn"  },
];

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
              {socials.map(({ Comp, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 hover:-translate-y-0.5 transition-all">
                  <Comp />
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
                <a href="mailto:info@learnovate.com.np" className="hover:text-white transition-colors">info@learnovate.com.np</a>
              </li>
            </ul>
          </div>

          {/* Free consultation CTA */}
          <div>
            <h4 className="font-bold mb-4 text-white text-sm uppercase tracking-widest">Get Started</h4>
            <p className="text-sm text-white/65 mb-5 leading-relaxed">
              Book a free counselling session and take the first step towards your dream university.
            </p>
            <Link to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-mint text-mint-foreground px-5 py-2.5 text-sm font-bold hover:scale-[1.03] hover:shadow-glow transition-all">
              Free Consultation
            </Link>
            <p className="mt-4 text-xs text-white/40 leading-relaxed">
              Office Hours: Sun – Fri<br />9:00 AM – 6:00 PM (NPT)
            </p>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
        <span>© {new Date().getFullYear()} Learnovate Int'l Education Consultant Pvt. Ltd., Pokhara. All rights reserved.</span>
        <span className="inline-flex items-center gap-1.5">
          ECAN Registered <span className="h-1 w-1 rounded-full bg-mint" /> Member
        </span>
      </div>
    </footer>
  );
}
