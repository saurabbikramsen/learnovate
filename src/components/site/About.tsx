import { Award, Users, Globe2, ShieldCheck, MapPin, Compass, HeartHandshake, Target } from "lucide-react";

const features = [
  { icon: Compass, title: "Career Counselling", desc: "Discover the right country, course and career path based on your goals." },
  { icon: Award, title: "Ethical & Transparent", desc: "Honest advice, clear pricing, and no false promises — ever." },
  { icon: HeartHandshake, title: "Personalised Support", desc: "Every student gets a plan tailored to their academic profile and ambitions." },
  { icon: Target, title: "Long-Term Success", desc: "We measure success by your achievements abroad, not just admissions." },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-foreground">
              Your <span className="text-primary">Partner for Success</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              At Learnovate International Education Consultant Pvt. Ltd., we believe that every student's success begins with the right guidance. Established in 2020 in Pokhara, Nepal, Learnovate was founded by Bikalpa K.C. with a vision to provide ethical, transparent, and student-centered international education counselling.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              As your partner for success, we work closely with students and their families to help them navigate every stage of the study abroad journey. From career counselling and university selection to application processing, visa guidance, and English language test preparation, our dedicated team offers personalized support tailored to each student's goals and aspirations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Our commitment to integrity, professionalism, and student success has earned the trust of aspiring students seeking quality international education opportunities. We focus not only on securing admissions but also on helping students make informed decisions that lead to long-term academic and career success.
            </p>
            <p className="text-foreground/90 italic leading-relaxed mb-8">
              At Learnovate, we measure our success by the achievements of our students. Together, we turn ambitions into opportunities and dreams into reality.
            </p>
            <div className="mb-6 flex items-start gap-3 p-4 rounded-xl bg-accent border border-border">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div className="text-sm text-foreground">
                <div className="font-semibold">Mahendrapool-4, Pokhara, Nepal</div>
                <div className="text-muted-foreground">Opposite to Hulak Bhawan</div>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 lg:sticky lg:top-24">
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