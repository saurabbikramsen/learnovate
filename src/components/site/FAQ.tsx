import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Where is Learnovate located?", a: "Our office is in Pokhara, Nepal. Walk in any working day or call us at 061-586088 / 9856082953 to book a free counseling session." },
  { q: "Which language tests do you prepare students for?", a: "We run regular IELTS, PTE and Duolingo English Test preparation classes — often with seasonal bumper discount offers. Our faculty are experienced and highly qualified." },
  { q: "Do you offer entrance preparation for Forestry, Agriculture and Veterinary?", a: "Yes — these are some of our flagship courses. We have a dedicated track for Forestry, Agriculture and Veterinary entrance exams with focused materials and mock tests." },
  { q: "Which universities and countries do you place students in?", a: "We have direct guidance for international universities such as CQ University, plus active placements in Australia, UK, USA, Canada, New Zealand, Japan, South Korea and more." },
  { q: "Is Learnovate a registered consultancy?", a: "Yes. Learnovate Int'l Education Consultant is a registered member of the Educational Consultancies Association of Nepal (ECAN)." },
  { q: "Is the initial counseling really free?", a: "Absolutely. Your first counseling session is completely free — we believe in earning your trust before anything else." },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">Got questions? We've got answers.</p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card shadow-card px-5 data-[state=open]:shadow-elegant transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}