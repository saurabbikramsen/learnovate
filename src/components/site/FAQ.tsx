import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  { q: "Where is Learnovate located?", a: "Our office is at Mahendrapool-4, Pokhara, Nepal — opposite to Hulak Bhawan. Walk in any working day or call us at 061-586088 / 9856082953 to book a free counseling session." },
  { q: "Which language tests do you prepare students for?", a: "We run regular IELTS, PTE and Duolingo English Test preparation classes — often with seasonal bumper discount offers. Our faculty are experienced and highly qualified." },
  { q: "Which universities and countries do you place students in?", a: "We have direct guidance for international universities such as CQ University, plus active placements in Australia, UK, USA, Canada, New Zealand, Japan, South Korea and more." },
  { q: "Is Learnovate a registered consultancy?", a: "Yes. Learnovate Int'l Education Consultant is a registered member of the Educational Consultancies Association of Nepal (ECAN)." },
  { q: "Is the initial counseling really free?", a: "Absolutely. Your first counseling session is completely free — we believe in earning your trust before anything else." },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-soft">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-bold uppercase tracking-widest mb-4">
            <HelpCircle className="h-4 w-4" /> FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-foreground">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">Got questions? We've got answers.</p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card shadow-card px-5 overflow-hidden
                         data-[state=open]:border-primary/40 data-[state=open]:shadow-elegant
                         data-[state=open]:border-l-4 data-[state=open]:border-l-primary
                         transition-all"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary data-[state=open]:text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA strip */}
        <div className="mt-12 rounded-2xl bg-primary p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-bold text-white text-lg">Still have questions?</p>
            <p className="text-white/70 text-sm mt-1">Book a free counselling session — we'll answer everything in person.</p>
          </div>
          <a href="https://wa.me/9779856082953" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-mint text-mint-foreground px-6 py-2.5 font-bold whitespace-nowrap hover:scale-[1.03] transition-all shrink-0">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
