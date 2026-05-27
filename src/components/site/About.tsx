import { Award, Users, Globe2, ShieldCheck } from "lucide-react";

const features = [
  { icon: Award, title: "ECAN Registered", desc: "Officially recognized member of the Educational Consultancies Association of Nepal." },
  { icon: Users, title: "Experienced Faculty", desc: "Highly qualified instructors for IELTS, PTE, Duolingo and entrance prep." },
  { icon: Globe2, title: "University Placements", desc: "Direct partnerships with universities like CQ University and scholarship guidance." },
  { icon: ShieldCheck, title: "End-to-End Support", desc: "From your first counseling to visa stamping — we're with you every step." },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-foreground">
              Pokhara's Premier <span className="text-primary">Education & Visa</span> Consultancy
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Learnovate Int'l Education Consultant is a trusted name in Pokhara, specializing in study abroad programs, language test preparation, and entrance guidance for ambitious Nepali students.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're preparing for IELTS, applying to overseas universities, or chasing a Forestry, Agriculture or Veterinary entrance — our experienced faculty and personal attention make the difference.
            </p>
            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=70"
                alt="Learnovate counselors with students in Pokhara"
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl bg-card border border-border shadow-card hover-lift"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary mb-4 transition-transform duration-300 hover:rotate-3">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}