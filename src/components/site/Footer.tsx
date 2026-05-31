import { GraduationCap, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border text-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-8">
          <div>
            <a href="#home" className="flex items-center gap-2 font-display font-bold text-xl mb-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary border border-border">
                <GraduationCap className="h-5 w-5" />
              </span>
              Learno<span className="text-primary">vate</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pokhara-based ECAN-registered consultancy guiding Nepali students to top universities, language test success, and entrance exam glory.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["About","Countries","Services","FAQ","Contact"].map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
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