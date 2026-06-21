import { Award, FileCheck2, ShieldCheck, BadgeCheck } from "lucide-react";

const certs = [
  {
    icon: Award,
    title: "ECAN Registered",
    body: "Active member of the Educational Consultancies Association of Nepal (ECAN).",
    tag: "ECAN Member",
  },
  {
    icon: FileCheck2,
    title: "Company Registration",
    body: "Registered private limited under the Office of Company Registrar, Government of Nepal.",
    tag: "OCR · Nepal",
  },
  {
    icon: BadgeCheck,
    title: "PAN / VAT Registered",
    body: "Tax-compliant business with valid PAN/VAT registration under the Inland Revenue Department.",
    tag: "IRD · Nepal",
  },
  {
    icon: ShieldCheck,
    title: "University Authorised Partner",
    body: "Officially authorised representative for CQ University and multiple UK, AU, CA, NZ institutions.",
    tag: "50+ Partners",
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Credentials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">Registered & Trusted</h2>
          <p className="text-muted-foreground text-lg">
            Learnovate operates with full legal registration and active membership across Nepal's education regulatory bodies.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((c) => (
            <div
              key={c.title}
              className="group p-6 rounded-2xl bg-card border border-border shadow-card hover-lift flex flex-col"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white mb-4 transition-transform group-hover:scale-110 shadow-card shrink-0">
                <c.icon className="h-6 w-6" />
              </div>
              <span className="w-fit text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full px-2.5 py-0.5 mb-3">
                {c.tag}
              </span>
              <h3 className="font-bold text-lg text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}