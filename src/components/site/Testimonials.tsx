import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Kumar Thapa Magar", country: "CQ University, Australia · 25% Scholarship", text: "Learnovate guided me through every step of my CQ University application. The 25% scholarship I received changed everything for my family.", rating: 5, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=70" },
  { name: "Sabina Gurung", country: "IELTS 7.5 Band", text: "The IELTS classes at Learnovate are top-class. The faculty's mock tests and one-on-one feedback helped me jump from 6.0 to 7.5 in just two months.", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=70" },
  { name: "Ramesh Adhikari", country: "BSc Forestry Entrance Topper", text: "Their entrance preparation for Forestry was incredibly structured. I cracked the exam on my first attempt — Learnovate truly knows how to teach.", rating: 5, avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=70" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">Student Success Stories</h2>
          <p className="text-muted-foreground text-lg">Real journeys from students who are now studying across the globe.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative p-7 rounded-2xl bg-card border border-border shadow-card hover-lift"
            >
              <Quote className="absolute top-5 right-5 h-9 w-9 text-primary/15" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="border-t border-border pt-4 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover border border-border"
                />
                <div>
                  <div className="font-bold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}