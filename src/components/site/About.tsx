import { Award, Users, Globe2, ShieldCheck, MapPin } from "lucide-react";

const features = [
  { icon: Award, title: "ECAN Registered", desc: "Officially recognized member of the Educational Consultancies Association of Nepal." },
  { icon: Users, title: "Experienced Faculty", desc: "Certified IELTS, PTE and Duolingo trainers with strong band-score track records." },
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
              A trusted, student-focused <span className="text-primary">study abroad</span> partner in Pokhara
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Learnovate International Education Consultant Pvt. Ltd. was established in 2020 by CEO Bikalpa K.C. in Mahendrapool-4, Pokhara, with a clear vision — to guide students toward the right international education through honest, transparent and professional counselling.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From career counselling and university selection to application processing, visa assistance and English test preparation, every student receives personalised support based on their academic goals and ambitions — with the highest standards of ethical practice.
            </p>
            <div className="mb-6 flex items-start gap-3 p-4 rounded-xl bg-accent border border-border">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div className="text-sm text-foreground">
                <div className="font-semibold">Mahendrapool-4, Pokhara, Nepal</div>
                <div className="text-muted-foreground">Opposite to Hulak Bhawan</div>
              </div>
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