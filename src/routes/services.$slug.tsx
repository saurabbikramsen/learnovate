import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, FileText, Plane, Sprout, Languages, GraduationCap, CreditCard, HelpCircle } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { services, getServiceBySlug } from "@/data/services";
import type { Service } from "@/data/services";
import { InquiryForm } from "@/components/site/InquiryForm";
import { Toaster } from "@/components/ui/sonner";

const iconMap: Record<Service["icon"], typeof FileText> = { FileText, Plane, Sprout, Languages, GraduationCap, CreditCard };

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.title} — Learnovate` : "Services — Learnovate";
    const description = s?.short ?? "Learnovate education services in Pokhara.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(s?.img ? [{ property: "og:image", content: s.img }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 text-center">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Service not found</h1>
        <Link to="/" className="text-primary font-semibold hover:underline">Back to home</Link>
      </div>
    </div>
  ),
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData() as { service: Service };
  const Icon = iconMap[service.icon];
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 md:pt-32 pb-16 bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-3 rounded-full bg-card border border-border px-4 py-2 mb-6 shadow-card">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-accent text-primary"><Icon className="h-4 w-4" /></span>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">Service</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.05]">
                {service.title}
              </h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">{service.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-bold hover:-translate-y-0.5 hover:shadow-elegant transition-all">
                  Get Free Counselling <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a href="https://wa.me/9779856082953" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card text-foreground px-6 py-3 font-semibold hover:-translate-y-0.5 hover:shadow-card transition-all">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-border shadow-card">
              <img src={service.img} alt={service.title} className="w-full h-[360px] lg:h-[440px] object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">What's Included</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Everything you get with this service</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.whatYouGet.map((w: string) => (
              <div key={w} className="flex items-start gap-3 p-5 rounded-2xl bg-card border border-border shadow-card hover-lift">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground/85">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Step by step</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {service.process.map((p: { step: string; desc: string }, i: number) => (
              <div key={p.step} className="p-6 rounded-2xl bg-card border border-border shadow-card hover-lift">
                <div className="text-xs font-bold text-primary mb-2">STEP {String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-bold text-foreground mb-2">{p.step}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Frequently Asked</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Questions about {service.title.split(" ")[0]}</h2>
          </div>
          <div className="space-y-4">
            {service.faqs.map((f: { q: string; a: string }) => (
              <div key={f.q} className="p-6 rounded-2xl bg-card border border-border shadow-card hover-lift">
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{f.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry / Apply form */}
      <section id="apply" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Apply for {service.title}</h2>
            <p className="text-muted-foreground mt-3">Tell us about your goals — a Learnovate counsellor will reach out within 24 hours.</p>
          </div>
          <InquiryForm
            title={`${service.title} — Inquiry`}
            subtitle="No fee for the first consultation."
            formType={`service:${service.slug}`}
            submitLabel="Send Inquiry"
            fields={[
              { name: "name", label: "Full Name", placeholder: "Ram Bahadur", required: true },
              { name: "phone", label: "Phone / WhatsApp", type: "tel", placeholder: "+977 98XXXXXXXX", required: true },
              { name: "email", label: "Email", type: "email", placeholder: "you@example.com", required: true },
              { name: "education", label: "Highest Qualification", type: "select", placeholder: "Select qualification", options: ["+2 / A-Levels", "Bachelor's", "Master's", "Other"], required: true },
              { name: "destinationCountry", label: "Destination Country", type: "select", placeholder: "Select country", options: ["Australia", "United Kingdom", "United States", "Canada", "New Zealand", "Japan", "South Korea", "Malta", "Undecided"] },
              { name: "preferredIntake", label: "Preferred Intake", type: "select", placeholder: "Select intake", options: ["Next 3 months", "3–6 months", "6–12 months", "12+ months"] },
              { name: "service", label: "Service", defaultValue: service.title, required: true },
              { name: "notes", label: "Tell us about your goals", type: "textarea", placeholder: "Your academic background, target programs, budget, anything we should know..." },
            ]}
          />
        </div>
      </section>

      {/* Other services */}
      <section className="py-20 bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Explore More</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Other services</h2>
            </div>
            <Link to="/services" className="text-sm font-semibold text-primary hover:underline">View all</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {others.map((s) => {
              const OIcon = iconMap[s.icon];
              return (
                <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group overflow-hidden rounded-2xl bg-card border border-border shadow-card hover-lift block">
                  <div className="relative h-40 overflow-hidden">
                    <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-card text-primary border border-border shadow-card">
                      <OIcon className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{s.short}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
}