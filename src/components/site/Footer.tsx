import { Facebook, Instagram, Linkedin, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logoUrl from "@/assets/learnovate-logo.png";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border text-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-8">
          <div>
            <a href="#home" className="inline-flex items-center mb-3">
              <img src={logoUrl} alt="Learnovate" className="h-12 w-auto" />
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pokhara-based ECAN-registered consultancy guiding Nepali students to top universities, language test success and confident visa outcomes.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" hash="about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/countries" className="hover:text-primary transition-colors">Countries</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/team" className="hover:text-primary transition-colors">Team</Link></li>
              <li><Link to="/testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Visit Us</h4>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <div>
                Mahendrapool-4, Pokhara, Nepal<br />
                <span className="text-xs">(Opposite to Hulak Bhawan)</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Follow Us</h4>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary border border-border hover:-translate-y-0.5 hover:shadow-card transition-all">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Learnovate Int'l Education Consultant, Pokhara. All rights reserved.
        </div>
      </div>
    </footer>
  );
}