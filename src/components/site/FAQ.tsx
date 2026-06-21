import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Where is Learnovate located?",
    a: "Our office is at Mahendrapool-4, Pokhara, Nepal — opposite to Hulak Bhawan. Walk in any working day (Sunday–Friday, 9 AM–6 PM) or call 061-586088 / +977 9856082953 to book a free counselling session.",
  },
  {
    q: "Is the initial counselling session really free?",
    a: "Absolutely — your first counselling session is completely free of charge. We believe in earning your trust before anything else. Come in, share your goals, and we'll map out the best path for you.",
  },
  {
    q: "Which countries do you help students apply to?",
    a: "We actively place students in the UK, Australia, USA, Canada, New Zealand, Japan, South Korea, Malta and more. Our counsellors specialise in destination-specific requirements so you get accurate, up-to-date advice.",
  },
  {
    q: "Is Learnovate a registered consultancy?",
    a: "Yes. Learnovate Int'l Education Consultant Pvt. Ltd. is a registered member of the Educational Consultancies Association of Nepal (ECAN) and holds a valid Company Registration and PAN/VAT from the Government of Nepal.",
  },
  {
    q: "Which language tests do you offer coaching for?",
    a: "We run regular coaching batches for IELTS, PTE Academic and Duolingo English Test. Classes are available in the morning, evening and weekend — both on-site in Pokhara and online. Enquire about our next intake at the office or via WhatsApp.",
  },
  {
    q: "What is the minimum IELTS score required for a UK student visa?",
    a: "Most UK universities require an overall IELTS band of 6.0–6.5 (with no sub-skill below 5.5). Some postgraduate programmes ask for 6.5–7.0. We'll review your target university's exact entry requirements during your counselling session.",
  },
  {
    q: "How long does the UK student visa process take?",
    a: "Once you have your CAS letter, the UK standard student visa typically takes 3–8 weeks. We recommend applying at least 3 months before your course start date to allow time for TB testing, biometrics and any queries.",
  },
  {
    q: "Can I work while studying abroad?",
    a: "Yes — most destinations allow part-time work during term. UK students can work 20 hours/week during term and full-time during official breaks. Australia allows 48 hours/fortnight during study. Japan permits up to 28 hours/week. Rules vary by country and visa type.",
  },
  {
    q: "Do you help with scholarship applications?",
    a: "Yes. Our counsellors actively identify merit-based and need-based scholarships — including Chevening (UK), Australia Awards, university-specific waivers and partial scholarships. We assist with the full scholarship application, personal statement and references.",
  },
  {
    q: "What documents are typically required for a university application?",
    a: "Standard documents include: academic transcripts and certificates, English proficiency test score (IELTS/PTE), a Statement of Purpose (SOP), Letters of Recommendation (LOR), a valid passport, bank statements for proof of funds, and a CV/resume. Some countries require additional documents such as a Tuberculosis test certificate (UK) or a police clearance certificate.",
  },
  {
    q: "How long does the entire study-abroad process take?",
    a: "A typical timeline from first counselling to departure is 4–8 months. This includes choosing a university (2–4 weeks), preparing documents (4–6 weeks), receiving an offer letter (2–6 weeks), applying for a visa (3–8 weeks) and pre-departure preparation. Starting early gives you access to more intake options and scholarship windows.",
  },
  {
    q: "What is Learnovate's visa success rate?",
    a: "We maintain a very high visa approval rate across all destinations. Our meticulous document preparation, genuine student statements and deep knowledge of embassy requirements minimise the risk of rejection. We also provide a free re-application strategy session if a visa is refused.",
  },
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
          <p className="text-muted-foreground text-lg">Everything you need to know before your first appointment.</p>
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
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary data-[state=open]:text-primary py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA strip */}
        <div className="mt-12 rounded-2xl bg-primary p-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-bold text-white text-lg">Still have questions?</p>
            <p className="text-white/70 text-sm mt-1">Book a free counselling session — we'll answer everything in person or on a call.</p>
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
