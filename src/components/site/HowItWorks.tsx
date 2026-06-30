import { MessageSquare, GraduationCap, FileText, ShieldCheck, Plane } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  num: string;
  Icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
};

const steps: Step[] = [
  {
    num: "01",
    Icon: MessageSquare,
    title: "Free Expert Counselling",
    desc: "Start with a no-obligation 30-minute session. Our counsellors assess your profile, clarify your goals, and chart a clear roadmap — destination, course, timeline, and budget.",
    color: "#60a5fa",
  },
  {
    num: "02",
    Icon: GraduationCap,
    title: "Country, Course & University Selection",
    desc: "We shortlist 3–5 universities across the UK, Australia, Canada, New Zealand, Japan and beyond, matched to your academic profile, budget and long-term career plans.",
    color: "#a78bfa",
  },
  {
    num: "03",
    Icon: FileText,
    title: "Application Process",
    desc: "SOPs, recommendation letters, application forms and offer-letter tracking — our documentation specialists manage every piece so your file reaches each university deadline-ready.",
    color: "#34d399",
  },
  {
    num: "04",
    Icon: ShieldCheck,
    title: "Visa Application & Preparation",
    desc: "With 1,000+ student visas filed, our team knows what embassies look for. We build your financial file, run mock interviews and handle every requirement end to end.",
    color: "#fbbf24",
  },
  {
    num: "05",
    Icon: Plane,
    title: "Pre-Departure Guidance",
    desc: "Before you fly, we brief you on arrival logistics, accommodation, banking, SIM cards and cultural expectations — so day one abroad feels familiar, not overwhelming.",
    color: "#fb7185",
  },
];

function StepVisual({ step }: { step: Step }) {
  return (
    <div className="shrink-0 relative flex items-center justify-center w-64 h-64 md:w-72 md:h-72">
      <div
        className="absolute inset-0 rounded-full"
        style={{ background: `${step.color}06` }}
      />
      <div
        className="absolute inset-4 rounded-full border border-dashed opacity-20"
        style={{ borderColor: step.color }}
      />
      <div
        className="w-44 h-44 md:w-52 md:h-52 flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${step.color}18, ${step.color}2e)`,
          borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
          border: `2px solid ${step.color}22`,
        }}
      >
        <step.Icon className="h-20 w-20" style={{ color: step.color }} />
      </div>
      <div
        className="absolute -top-2 -right-2 text-7xl font-black opacity-[0.08] select-none leading-none"
        style={{ color: step.color }}
      >
        {step.num}
      </div>
      <div
        className="absolute bottom-8 left-4 h-3 w-3 rounded-full opacity-50"
        style={{ background: step.color }}
      />
      <div
        className="absolute top-10 left-6 h-2 w-2 rounded-full opacity-30"
        style={{ background: step.color }}
      />
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24" style={{ background: "oklch(0.20 0.12 260)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p
            className="text-lg mb-1"
            style={{ fontFamily: "'Caveat', cursive", color: "oklch(0.72 0.10 220)" }}
          >
            Here's how
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Learnovate Guides Your Study Journey
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto">
            From the very first conversation to boarding your flight — we're with you at every step.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-20 md:space-y-28">
          {steps.map((step, i) => {
            const isEven = i % 2 === 1;
            return (
              <div
                key={step.num}
                className={`flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""} items-center gap-10 md:gap-20`}
              >
                {/* Text */}
                <div className="flex-1 w-full">
                  <div className="flex items-baseline gap-3 mb-5">
                    <span className="text-5xl font-black opacity-15 select-none text-white leading-none">
                      {step.num}
                    </span>
                    <div
                      className="h-px w-14 opacity-30"
                      style={{ background: step.color }}
                    />
                  </div>
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl shrink-0 mt-0.5"
                      style={{
                        background: `${step.color}1a`,
                        border: `1.5px solid ${step.color}35`,
                        color: step.color,
                      }}
                    >
                      <step.Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-white/55 leading-relaxed text-base md:text-lg pl-[3.5rem]">
                    {step.desc}
                  </p>
                </div>

                {/* Visual */}
                <StepVisual step={step} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
