import { Star, Quote } from "lucide-react";

type T = { name: string; country: string; text: string; rating: number; avatar: string };

const rowOne: T[] = [
  { name: "Kumar Thapa Magar", country: "CQ University, Australia · 25% Scholarship", text: "Learnovate guided me through every step of my CQ University application. The 25% scholarship changed everything for my family.", rating: 5, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=70" },
  { name: "Sabina Gurung", country: "IELTS 7.5 Band", text: "The IELTS classes are top-class. Mock tests and one-on-one feedback helped me jump from 6.0 to 7.5 in just two months.", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=70" },
  { name: "Anish Pariyar", country: "Coventry University, UK", text: "From CAS to visa interview, every step was handled with care. I landed in the UK feeling fully prepared.", rating: 5, avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200&auto=format&fit=crop&q=70" },
  { name: "Pratima Shrestha", country: "Conestoga College, Canada", text: "Learnovate's GIC and SDS guidance made the Canadian visa process painless. I'm now in my second semester.", rating: 5, avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=70" },
  { name: "Bibek K.C.", country: "PTE 79+ Score", text: "Their PTE strategies are gold. I scored 82 on my second attempt — couldn't have done it alone.", rating: 5, avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=70" },
];

const rowTwo: T[] = [
  { name: "Ramesh Adhikari", country: "University of Roehampton, UK", text: "Learnovate's UK team handled my CAS and Personal Statement perfectly. I'm now studying in London on a partial scholarship.", rating: 5, avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=70" },
  { name: "Sushmita Poudel", country: "Federation University, Australia", text: "From SOP drafting to pre-departure briefing, the team treated me like family. Highly recommended.", rating: 5, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=70" },
  { name: "Niraj Bhattarai", country: "AUT, New Zealand", text: "Visa rejected once with another agency. Learnovate re-built my file properly and I got approved in 6 weeks.", rating: 5, avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&auto=format&fit=crop&q=70" },
  { name: "Aastha Lamichhane", country: "Ulster University, UK", text: "Friendly counsellors, transparent process and zero false promises. My UK student visa was approved within weeks.", rating: 5, avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&auto=format&fit=crop&q=70" },
  { name: "Saurav Pandey", country: "MS in CS, USA", text: "Got into a top US university with a tuition waiver. The SOP review sessions were a game changer.", rating: 5, avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&auto=format&fit=crop&q=70" },
];

function Card({ t }: { t: T }) {
  return (
    <div className="relative w-[320px] sm:w-[360px] shrink-0 p-6 rounded-2xl bg-card border border-border shadow-card mx-3">
      <Quote className="absolute top-4 right-4 h-7 w-7 text-primary/15" />
      <div className="flex gap-1 mb-3">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-foreground/80 leading-relaxed mb-5 italic text-sm">"{t.text}"</p>
      <div className="border-t border-border pt-3 flex items-center gap-3">
        <img src={t.avatar} alt={t.name} loading="lazy" className="h-10 w-10 rounded-full object-cover border border-border" />
        <div>
          <div className="font-bold text-foreground text-sm">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.country}</div>
        </div>
      </div>
    </div>
  );
}

function Row({ items, dir }: { items: T[]; dir: "left" | "right" }) {
  // Duplicate the list so the translate -50% loop appears seamless.
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden marquee-pause [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className={`flex w-max ${dir === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}>
        {doubled.map((t, i) => (
          <Card key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">Student Success Stories</h2>
          <p className="text-muted-foreground text-lg">Real journeys from students who are now studying across the globe.</p>
        </div>
      </div>
      <div className="space-y-5">
        <Row items={rowOne} dir="left" />
        <Row items={rowTwo} dir="right" />
      </div>
    </section>
  );
}