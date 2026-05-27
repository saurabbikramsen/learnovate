import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-semibold text-foreground mb-2 block">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary-glow"
      />
    </div>
  );
}

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks! We'll reach out within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5 text-foreground">Visit Us in Pokhara</h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Drop us a message or walk into our Pokhara office — our counselors are ready to map out your next step.
            </p>
            <div className="space-y-5">
              {[
                { icon: MapPin, label: "Office", value: "Pokhara, Nepal" },
                { icon: Phone, label: "Phone", value: "061-586088  ·  +977 9856082953" },
                { icon: Mail, label: "Email", value: "info@learnovate.com.np" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 group">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary shrink-0 border border-border transition-transform duration-300 group-hover:-translate-y-0.5">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{c.label}</div>
                    <div className="text-muted-foreground">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form
            onSubmit={onSubmit}
            className="p-8 rounded-2xl bg-card border border-border shadow-elegant space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" placeholder="Ram Bahadur" required />
              <Field label="Phone" name="phone" placeholder="+977 98XXXXXXXX" required />
            </div>
            <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Destination Country</label>
              <select
                name="country"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary-glow"
                defaultValue=""
              >
                <option value="" disabled>Select a country</option>
                {["Australia", "UK", "USA", "Canada", "Germany", "New Zealand", "Japan", "Korea", "Other"].map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your goals..."
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary-glow resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-card hover:bg-primary/90 hover:-translate-y-0.5 transition-all disabled:opacity-60"
            >
              {loading ? "Sending..." : <>Send Message <Send className="h-4 w-4" /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}