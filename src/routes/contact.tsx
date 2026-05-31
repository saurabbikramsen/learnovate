import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Facebook, Instagram } from "lucide-react";
import { toast } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";

// TODO: Replace with your Google Sheets / Apps Script web app endpoint.
const FORM_ENDPOINT = "https://script.google.com/macros/s/REPLACE_WITH_YOUR_DEPLOYMENT_ID/exec";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Learnovate — Pokhara, Nepal" },
      { name: "description", content: "Visit Learnovate Int'l Education Consultant in Pokhara. Phone, email, map and free counselling form for IELTS, PTE, entrance and study abroad." },
      { property: "og:title", content: "Contact Learnovate — Pokhara" },
      { property: "og:description", content: "Get in touch with Learnovate Int'l Education Consultant for free study abroad counselling." },
    ],
  }),
  component: ContactPage,
});

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

function ContactPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = {};
    data.forEach((v, k) => (payload[k] = String(v)));
    try {
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      toast.success("Thanks! We'll reach out within 24 hours.");
      form.reset();
    } catch {
      toast.error("Couldn't send right now. Please WhatsApp us instead.");
    } finally {
      setLoading(false);
    }
  };

  const contacts = [
    { icon: MapPin, label: "Office", value: "Chipledhunga, Pokhara — Kaski, Nepal" },
    { icon: Phone, label: "Phone", value: "061-586088  ·  +977 9856082953" },
    { icon: Mail, label: "Email", value: "info@learnovate.com.np" },
    { icon: Clock, label: "Office Hours", value: "Sun – Fri · 9:00 AM – 6:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-28 md:pt-32 pb-12 bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Contact Us</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.05] mt-3">
            Let's plan your next step
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Walk into our Pokhara office, give us a call, or send a message — our counselors usually respond within a few hours.
          </p>
        </div>
      </section>

      {/* Info + Form */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-5">
              {contacts.map((c) => (
                <div key={c.label} className="flex items-start gap-4 group p-5 rounded-2xl bg-card border border-border shadow-card hover-lift">
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
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://wa.me/9779856082953" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-mint text-mint-foreground px-5 py-2.5 font-bold hover:scale-[1.03] transition-transform">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a href="https://facebook.com/learnovate.pokhara" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card text-foreground px-5 py-2.5 font-semibold hover:-translate-y-0.5 hover:shadow-card transition-all">
                <Facebook className="h-4 w-4" /> Facebook
              </a>
              <a href="https://instagram.com/learnovate" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card text-foreground px-5 py-2.5 font-semibold hover:-translate-y-0.5 hover:shadow-card transition-all">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="p-8 rounded-2xl bg-card border border-border shadow-elegant space-y-5">
            <h2 className="text-2xl font-bold text-foreground">Free Counselling Request</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" placeholder="Ram Bahadur" required />
              <Field label="Phone" name="phone" placeholder="+977 98XXXXXXXX" required />
            </div>
            <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Destination Country</label>
              <select name="country" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary-glow" defaultValue="">
                <option value="" disabled>Select a country</option>
                {["Australia","UK","USA","Canada","New Zealand","Japan","South Korea","Malta","Not sure yet"].map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Service Interested In</label>
              <select name="service" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary-glow" defaultValue="">
                <option value="" disabled>Select a service</option>
                {["IELTS/PTE/Duolingo","Entrance Preparation","University Placement","Scholarship Support","SOP & Documentation","Visa Assistance"].map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Message</label>
              <textarea name="message" rows={4} placeholder="Tell us about your goals..." className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary-glow resize-none" />
            </div>
            <button type="submit" disabled={loading} className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-card hover:bg-primary/90 hover:-translate-y-0.5 transition-all disabled:opacity-60">
              {loading ? "Sending..." : <>Send Message <Send className="h-4 w-4" /></>}
            </button>
            <p className="text-xs text-muted-foreground text-center">By submitting, you agree to be contacted by Learnovate's counsellors.</p>
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Find Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Visit our Pokhara office</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-card">
            <iframe
              title="Learnovate Pokhara location"
              src="https://www.google.com/maps?q=Chipledhunga,Pokhara,Nepal&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full border-0"
            />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Can't find us? <Link to="/contact" className="text-primary font-semibold hover:underline">Call +977 9856082953</Link> and we'll guide you in.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
}