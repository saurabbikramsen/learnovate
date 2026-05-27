import { FileText, Plane, Sprout, Languages, GraduationCap, CreditCard } from "lucide-react";

const services = [
  { icon: Languages, title: "IELTS · PTE · Duolingo", desc: "Structured language test preparation with experienced trainers and seasonal discount offers.", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=70" },
  { icon: Sprout, title: "Entrance Preparation", desc: "Specialized coaching for Forestry, Agriculture and Veterinary entrance exams.", img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop&q=70" },
  { icon: GraduationCap, title: "University Placements", desc: "Direct guidance for international universities including CQ University and more.", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=70" },
  { icon: CreditCard, title: "Scholarship Support", desc: "Application support for merit & need-based scholarships at partner universities.", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=70" },
  { icon: FileText, title: "Documentation & SOP", desc: "Professional help with SOPs, recommendation letters, and complete application files.", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=70" },
  { icon: Plane, title: "Visa Assistance", desc: "End-to-end visa documentation, mock interviews, and pre-departure briefing.", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=70" },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">Everything You Need, All in One Place</h2>
          <p className="text-muted-foreground text-lg">Comprehensive support designed for every stage of your study abroad journey.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group overflow-hidden rounded-2xl bg-card border border-border shadow-card hover-lift"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-card text-primary border border-border shadow-card">
                  <s.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}