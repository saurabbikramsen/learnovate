import heroImg from "@/assets/hero-student.jpg";
import { ArrowRight, Phone } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-32 pb-0 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center">
          {/* Left — copy */}
          <div className="animate-fade-in-up relative z-10 pb-12 lg:pb-24">
            <div className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-3.5 py-1.5 mb-7 shadow-card">
              <span className="h-2 w-2 rounded-full bg-mint animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-primary">ECAN REGISTERED · POKHARA</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight text-foreground">
              <span className="text-primary">600+ Nepali students</span> placed abroad with Learnovate
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Speak to our Pokhara-based counsellors for personalised scholarship, course & visa guidance — IELTS, PTE, Duolingo and entrance prep all under one roof.
            </p>

            {/* CTA card — light, no hard color background */}
            <div className="mt-9 inline-flex flex-col rounded-2xl bg-card p-5 shadow-card border border-border max-w-sm">
              <span className="text-foreground text-sm font-semibold mb-3">Talk to a Counsellor Today</span>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-bold hover:-translate-y-0.5 hover:shadow-elegant transition-all"
              >
                Book a FREE Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <a
              href="tel:+9779856082953"
              className="mt-6 ml-0 lg:ml-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" /> +977 9856082953
            </a>
          </div>

          {/* Right — portrait with squiggle */}
          <div className="relative">
            <svg
              aria-hidden="true"
              className="absolute -left-4 top-1/3 w-[110%] h-auto text-primary/50 hidden sm:block"
              viewBox="0 0 600 300"
              fill="none"
            >
              <path
                d="M10 180 C 120 80, 220 280, 340 150 S 560 50, 590 200"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="2 8"
              />
              <circle cx="40" cy="170" r="6" fill="oklch(0.86 0.16 175)" />
            </svg>
            <div className="relative mx-auto max-w-md lg:max-w-none animate-float">
              <img
                src={heroImg}
                alt="Smiling Nepali student counselled by Learnovate"
                width={1280}
                height={1280}
                className="relative z-10 w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="mt-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: "600+", l: "Students Placed" },
            { n: "10+", l: "Destinations Served" },
            { n: "50+", l: "University Partners" },
            { n: "ECAN", l: "Registered Member" },
          ].map((s) => (
            <div key={s.l} className="text-center md:text-left">
              <div className="font-display text-3xl md:text-5xl font-extrabold text-primary leading-none">{s.n}</div>
              <div className="text-sm md:text-base text-muted-foreground mt-2">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="text-center text-xs text-muted-foreground pb-4">(As of 2026)*</div>
      </div>
    </section>
  );
}