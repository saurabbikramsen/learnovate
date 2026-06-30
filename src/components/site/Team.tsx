import { Mail, Phone } from "lucide-react";
import { team } from "@/data/team";

const roleColors: Record<string, string> = {
  "Founder & CEO":                   "from-primary to-blue-400",
  "Academic Head":                   "from-blue-600 to-blue-400",
  "Documentation & Finance Officer": "from-amber-500 to-amber-400",
  "Finance Advisor":                 "from-emerald-600 to-emerald-400",
  "Marketing Officer":               "from-rose-500 to-rose-400",
  "Customer Relations Executive":    "from-violet-600 to-violet-400",
  "IT Officer":                      "from-cyan-600 to-cyan-400",
};

function roleGradient(role: string) {
  const key = Object.keys(roleColors).find((k) => role.startsWith(k));
  return key ? roleColors[key] : "from-primary to-blue-400";
}

export function Team() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-bold uppercase tracking-widest mb-4">
            Our People
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-foreground">Meet the Learnovate Team</h2>
          <p className="text-muted-foreground text-lg">Counsellors, trainers and visa specialists who'll walk your journey with you.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m) => {
            const grad = roleGradient(m.role);
            return (
              <div
                key={m.slug}
                className="group overflow-hidden rounded-2xl bg-card border border-border shadow-card hover-lift relative"
              >
                {/* Colored top accent */}
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${grad}`} />

                {/* Photo */}
                <div className="relative h-64 overflow-hidden bg-soft">
                  <img
                    src={m.photo}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Role badge on photo */}
                  <div className={`absolute bottom-3 left-3 bg-gradient-to-r ${grad} text-white text-[10px] font-bold uppercase tracking-widest rounded-full px-3 py-1 shadow-elegant`}>
                    {m.role.split("—")[0].trim()}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg text-foreground">{m.name}</h3>
                  <p className="text-sm text-primary font-semibold mt-0.5">{m.role}</p>

                  {/* Expertise tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {m.expertise.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[10px] font-semibold text-primary bg-primary/10 border border-primary/15 rounded-full px-2.5 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-primary/60 shrink-0" /> {m.phone}</div>
                    <div className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-primary/60 shrink-0" /> {m.email}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
