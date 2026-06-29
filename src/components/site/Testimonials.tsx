import { Star, Quote } from "lucide-react";

import aashaGurung        from "@/assets/success_stories/Aasha Gurung.jpeg";
import aashisThapaMagar   from "@/assets/success_stories/Aashis Thapa Magar.jpeg";
import anishaChhetri      from "@/assets/success_stories/Anisha Chhetri.jpeg";
import ashmitaThapaMagar  from "@/assets/success_stories/Ashmita Thapa Magar.jpeg";
import bijayaThapaMagar   from "@/assets/success_stories/Bijaya Thapa Magar.jpeg";
import bishalThapa        from "@/assets/success_stories/Bishal Thapa.jpeg";
import lejinaThapaChetri  from "@/assets/success_stories/Lejina Thapa Chetri.jpeg";
import rubanShrestha      from "@/assets/success_stories/Ruban Shrestha.jpeg";
import rupeshShrestha     from "@/assets/success_stories/Rupesh Shrestha.jpeg";
import shivaKumal         from "@/assets/success_stories/Shiva Kumal.jpeg";
import suzitaRana         from "@/assets/success_stories/Suzita Rana.jpeg";
import tonyaGurung        from "@/assets/success_stories/Tonya Gurung.jpeg";

type T = { name: string; country: string; text: string; rating: number; avatar: string };

const rowOne: T[] = [
  {
    name: "Aasha Gurung",
    country: "Settled in United Kingdom",
    text: "Learnovate made my UK dream a reality. From SOP drafting to CAS and visa — every step was handled with care and expertise. I'm now living and thriving in the UK.",
    rating: 5,
    avatar: aashaGurung,
  },
  {
    name: "Aashis Thapa Magar",
    country: "Studying in Australia",
    text: "Learnovate guided me through the Australian student visa process with incredible precision. From university selection to the health examination, everything was handled professionally. I'm now studying in Australia and couldn't be happier.",
    rating: 5,
    avatar: aashisThapaMagar,
  },
  {
    name: "Anisha Chhetri",
    country: "Settled in United Kingdom",
    text: "The counsellors at Learnovate are genuinely invested in your success. They helped me choose the right university for my career goals and prepared me for every step of the UK visa process.",
    rating: 5,
    avatar: anishaChhetri,
  },
  {
    name: "Ashmita Thapa Magar",
    country: "Studying in Canada",
    text: "Canada felt overwhelming to navigate alone. Learnovate matched me to the right college, prepared every document perfectly, and got my study permit approved. Transparent from day one — zero false promises.",
    rating: 5,
    avatar: ashmitaThapaMagar,
  },
  {
    name: "Bijaya Thapa Magar",
    country: "Settled in United Kingdom",
    text: "From the very first free counselling session, I felt confident I was in the right hands. Now I'm settled in the UK thanks to the team's relentless support and deep knowledge of the process.",
    rating: 5,
    avatar: bijayaThapaMagar,
  },
  {
    name: "Bishal Thapa",
    country: "Settled in United Kingdom",
    text: "My IELTS score wasn't where I needed it. Learnovate's test prep classes helped me push from 5.5 to 7.0 in one month. Couldn't have cleared the UK requirement without them.",
    rating: 5,
    avatar: bishalThapa,
  },
];

const rowTwo: T[] = [
  {
    name: "Lejina Thapa Chetri",
    country: "Settled in United Kingdom",
    text: "Learnovate handled my documentation meticulously — bank statements, police clearance, TB test — everything was perfect. UK visa came through without a single query letter.",
    rating: 5,
    avatar: lejinaThapaChetri,
  },
  {
    name: "Ruban Shrestha",
    country: "Studying in Australia",
    text: "The pre-departure orientation Learnovate ran was incredibly detailed. I arrived in Australia knowing exactly what to expect — accommodation, how to open a bank account, everything. They prepare you for life, not just the visa.",
    rating: 5,
    avatar: rubanShrestha,
  },
  {
    name: "Rupesh Shrestha",
    country: "Settled in United Kingdom",
    text: "I was skeptical at first, but Learnovate delivered on every promise. My university offer, CAS letter and visa all came through smoothly. Highly recommend to anyone planning to study in the UK.",
    rating: 5,
    avatar: rupeshShrestha,
  },
  {
    name: "Shiva Kumal",
    country: "Studying in New Zealand",
    text: "I had no idea New Zealand was such a great fit for my field. Learnovate opened my eyes to the opportunity and managed the entire application. Now I'm studying in Christchurch with a clear pathway to PR.",
    rating: 5,
    avatar: shivaKumal,
  },
  {
    name: "Suzita Rana",
    country: "Settled in United Kingdom",
    text: "Choosing Learnovate was the best decision of my academic journey. Professional, prompt, and genuinely caring — they treated my UK visa file as if it were their own.",
    rating: 5,
    avatar: suzitaRana,
  },
  {
    name: "Tonya Gurung",
    country: "Studying in Japan",
    text: "Japan felt like an impossible dream from Pokhara. Learnovate connected me with the right institution, handled my COE application, and made the whole process surprisingly smooth. Now I'm in Tokyo living a new life.",
    rating: 5,
    avatar: tonyaGurung,
  },
];

function Card({ t }: { t: T }) {
  return (
    <div className="relative w-[320px] sm:w-[360px] shrink-0 rounded-2xl bg-card border border-border shadow-card mx-3 overflow-hidden group hover-lift">
      {/* Coloured top strip */}
      <div className="h-1 bg-gradient-to-r from-primary to-primary-glow w-full group-hover:from-primary group-hover:to-mint transition-all duration-500" />
      <div className="p-6">
        <Quote className="absolute top-5 right-5 h-7 w-7 text-primary/15" />
        {/* Stars */}
        <div className="flex gap-1 mb-3">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-foreground/80 leading-relaxed mb-5 italic text-sm">"{t.text}"</p>
        <div className="border-t border-border pt-3 flex items-center gap-3">
          <img src={t.avatar} alt={t.name} loading="lazy"
            className="h-10 w-10 rounded-full object-cover object-top border-2 border-primary/20" />
          <div>
            <div className="font-bold text-foreground text-sm">{t.name}</div>
            <div className="text-xs text-primary/80 font-medium">{t.country}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ items, dir }: { items: T[]; dir: "left" | "right" }) {
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
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-bold uppercase tracking-widest mb-4">
            <Star className="h-4 w-4 fill-primary" /> Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-foreground">
            Student <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-muted-foreground text-lg">Real journeys from students now settled and thriving across the UK, Australia, Canada, New Zealand, Japan and beyond.</p>
        </div>
      </div>
      <div className="space-y-5">
        <Row items={rowOne} dir="left" />
        <Row items={rowTwo} dir="right" />
      </div>
    </section>
  );
}
