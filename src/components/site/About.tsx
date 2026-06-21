import { Award, Globe2, ShieldCheck, MapPin, Compass, HeartHandshake, Target, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const features = [
  {
    icon: Compass,
    title: "Career Counselling",
    desc: "Your future starts with the right choice. Our dedicated counsellors work closely with you to understand your strengths, interests, and career aspirations, helping you choose the best country, university, and course for your goals. With expert guidance and personalised support, we empower you to make confident decisions, unlock new opportunities, and take the first step toward a successful international education journey.",
    color: "from-blue-600 to-blue-400",
  },
  {
    icon: Award,
    title: "Ethical & Transparent",
    desc: "We believe in honesty, integrity, and trust in every step of the student journey. Our guidance is always genuine and unbiased, with clear pricing and complete transparency throughout the process. We never make false promises — only provide realistic advice and full support to help students make informed decisions and achieve their study abroad goals with confidence.",
    color: "from-amber-500 to-amber-400",
  },
  {
    icon: HeartHandshake,
    title: "Personalised Support",
    desc: "We take the time to understand each student's individual background, goals, and preferences to provide tailored guidance at every stage. Our approach ensures you receive focused attention, clear direction, and continuous assistance throughout your study abroad journey.",
    color: "from-emerald-600 to-emerald-400",
  },
  {
    icon: Target,
    title: "Long-Term Success",
    desc: "Our commitment goes beyond securing admissions — we focus on your success abroad. From preparation to settlement, we help you adapt, grow, and achieve lasting academic and career success. Your achievements are our true measure of success.",
    color: "from-violet-600 to-violet-400",
  },
];

const stats = [
  { n: "600+", l: "Students Placed",    icon: Globe2    },
  { n: "10+",  l: "Destinations",       icon: MapPin    },
  { n: "50+",  l: "Partner Universities",icon: Award    },
  { n: "ECAN", l: "Registered Member",  icon: ShieldCheck },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-bold uppercase tracking-widest mb-4">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-foreground">
              Your <span className="text-primary">Partner for Success</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              At Learnovate International Education Consultant Pvt. Ltd., we believe that every student's success begins with the right guidance. Established in 2020 in Pokhara, Nepal, Learnovate was founded by Bikalpa K.C. with a vision to provide ethical, transparent, and student-centered international education counselling.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              As your partner for success, we work closely with students and their families to help them navigate every stage of the study abroad journey — from career counselling and university selection to application processing, visa guidance, and language test preparation.
            </p>
            <p className="text-foreground/90 italic leading-relaxed mb-8 border-l-4 border-primary pl-4 py-1 bg-primary/5 rounded-r-lg">
              "At Learnovate, we measure our success by the achievements of our students. Together, we turn ambitions into opportunities and dreams into reality."
            </p>

            {/* Location badge */}
            <div className="mb-8 flex items-start gap-3 p-4 rounded-xl bg-primary text-white shadow-elegant">
              <MapPin className="h-5 w-5 text-mint shrink-0 mt-0.5" />
              <div className="text-sm">
                <div className="font-bold">Mahendrapool-4, Pokhara, Nepal</div>
                <div className="text-white/70 text-xs mt-0.5">Opposite to Hulak Bhawan · Walk-ins welcome</div>
              </div>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.l} className="p-4 rounded-xl bg-soft border border-border text-center hover-lift">
                  <s.icon className="h-5 w-5 text-primary mx-auto mb-1" />
                  <div className="font-display text-2xl font-extrabold text-primary">{s.n}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>

            <Link to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-bold hover:-translate-y-0.5 hover:shadow-elegant transition-all">
              Book Free Counselling <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right — feature cards */}
          <div className="grid sm:grid-cols-2 gap-5 lg:sticky lg:top-24">
            {features.map((f) => (
              <div key={f.title} className="group p-6 rounded-2xl bg-card border border-border shadow-card hover-lift overflow-hidden relative">
                {/* Colored top accent */}
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${f.color}`} />
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} text-white mb-4 shadow-card transition-transform duration-300 group-hover:scale-110`}>
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
