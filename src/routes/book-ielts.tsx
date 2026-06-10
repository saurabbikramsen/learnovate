import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, Clock, MapPin, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { InquiryForm } from "@/components/site/InquiryForm";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/book-ielts")({
  head: () => ({
    meta: [
      { title: "Book an IELTS Seat — Learnovate, Pokhara" },
      { name: "description", content: "Reserve your IELTS preparation seat at Learnovate Pokhara. Morning, evening and weekend batches — limited seats per class." },
      { property: "og:title", content: "Book an IELTS Seat — Learnovate" },
      { property: "og:description", content: "Reserve your seat in our next IELTS batch in Pokhara." },
    ],
  }),
  component: BookIeltsPage,
});

function BookIeltsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 md:pt-32 pb-16 bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in-up">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">IELTS Preparation</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.05] mt-3">
              Reserve your <span className="text-primary">IELTS seat</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Limited seats per batch. Pick a preferred batch below and our team will confirm availability and onboarding details within 24 hours.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: CalendarCheck, t: "Flexible Intakes", d: "New batches starting every 2 weeks." },
                { icon: Clock, t: "Morning · Evening · Weekend", d: "Pick the slot that fits your schedule." },
                { icon: MapPin, t: "Mahendrapool-4, Pokhara", d: "On-site or online — both supported." },
                { icon: ShieldCheck, t: "ECAN Registered", d: "Trusted by 600+ Nepali students." },
              ].map((f) => (
                <div key={f.t} className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-border shadow-card">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary border border-border shrink-0">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">{f.t}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <InquiryForm
            title="IELTS Seat Booking"
            subtitle="Fill in your details — we'll confirm your seat within 24 hours."
            formType="ielts-booking"
            submitLabel="Reserve My Seat"
            fields={[
              { name: "name", label: "Full Name", placeholder: "Ram Bahadur", required: true },
              { name: "phone", label: "Phone / WhatsApp", type: "tel", placeholder: "+977 98XXXXXXXX", required: true },
              { name: "email", label: "Email", type: "email", placeholder: "you@example.com", required: true },
              { name: "currentLevel", label: "Current English Level", type: "select", placeholder: "Select level", options: ["Beginner", "Intermediate", "Upper-intermediate", "Advanced"], required: true },
              { name: "targetBand", label: "Target Band", type: "select", placeholder: "Select target", options: ["6.0", "6.5", "7.0", "7.5+"], required: true },
              { name: "batchPreference", label: "Preferred Batch", type: "select", placeholder: "Select batch", options: ["Morning (7–9 AM)", "Day (11 AM–1 PM)", "Evening (5–7 PM)", "Weekend (Sat–Sun)", "Online"], required: true },
              { name: "preferredStart", label: "Preferred Start Date", type: "date" },
              { name: "examDate", label: "Planned IELTS Exam Date", type: "date" },
              { name: "destinationCountry", label: "Destination Country", type: "select", placeholder: "Select country", options: ["Australia", "United Kingdom", "United States", "Canada", "New Zealand", "Japan", "South Korea", "Malta", "Undecided"] },
              { name: "notes", label: "Anything we should know?", type: "textarea", placeholder: "e.g. previous IELTS score, prior preparation, scheduling constraints..." },
            ]}
          />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
}