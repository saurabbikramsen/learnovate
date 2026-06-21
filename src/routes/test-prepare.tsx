import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { BookOpen, BarChart3, Laptop, Languages } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { InquiryForm } from "@/components/site/InquiryForm";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/test-prepare")({
  head: () => ({
    meta: [
      { title: "Test Preparation — IELTS, PTE, Duolingo, Japanese | Learnovate Pokhara" },
      { name: "description", content: "Prepare for IELTS, PTE, Duolingo English Test or Japanese Language at Learnovate Pokhara. Expert trainers, flexible batches, proven results." },
      { property: "og:title", content: "Test Preparation — Learnovate" },
      { property: "og:description", content: "IELTS, PTE, Duolingo and Japanese Language preparation at Learnovate Pokhara." },
    ],
  }),
  component: TestPreparePage,
});

const tabs = [
  { id: "ielts", label: "IELTS", icon: BookOpen },
  { id: "pte", label: "PTE", icon: BarChart3 },
  { id: "duolingo", label: "Duolingo", icon: Laptop },
  { id: "japanese", label: "Japanese Language", icon: Languages },
] as const;

type TabId = (typeof tabs)[number]["id"];

const testInfo: Record<TabId, { title: string; tagline: string; img: string; description: string; highlights: string[] }> = {
  ielts: {
    title: "IELTS — International English Language Testing System",
    tagline: "The world's most trusted English proficiency test",
    img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&auto=format&fit=crop&q=70",
    description:
      "IELTS (International English Language Testing System) is the world's most recognised English language test, accepted by over 11,000 organisations in 140+ countries — including universities, employers, immigration authorities and professional bodies. It tests four skills: Listening, Reading, Writing and Speaking, scored on a 1–9 band scale. Most UK and Australian universities require a minimum of 6.0–7.0 overall band.\n\nLearn IELTS under the guidance of a highly experienced and renowned educator with over 30 years of excellence in the education field. His deep understanding of exam patterns and student psychology ensures highly effective learning for every student.\n\nHis teaching approach is unique, practical, and result-oriented, focusing on simplifying complex concepts and building strong fundamentals in all four skills — Reading, Writing, Listening, and Speaking. Through proven strategies, personalised feedback, and regular practice tests, students gain confidence, accuracy, and speed.",
    highlights: [
      "Diagnostic test + personalised band target plan",
      "60+ hours of live instruction per module",
      "Weekly full-length mock tests with band-wise feedback",
      "Unlimited speaking practice with certified trainers",
      "Writing task review by IELTS-qualified coaches",
      "Access to recorded sessions and practice portal",
    ],
  },
  pte: {
    title: "PTE Academic — Pearson Test of English",
    tagline: "AI-scored. Fast results. Globally accepted.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=70",
    description:
      "PTE Academic (Pearson Test of English) is a computer-based English language test that uses AI to score your performance — delivering results in as little as 48 hours. It is accepted by thousands of universities worldwide and is a key requirement for Australian and UK student visas. The test covers Speaking & Writing, Reading and Listening in a single 2-hour session.\n\nPrepare for PTE under the guidance of a highly experienced and renowned educator with over 30 years of excellence in the education field. With deep expertise in language training and exam preparation, the instructor provides clear direction and proven strategies to help students achieve their desired scores.\n\nHis teaching method is unique, practical, and result-focused, designed to simplify the PTE exam format and build strong skills in speaking, writing, reading, and listening. Through smart techniques, real exam practice, and continuous feedback, students develop accuracy, speed, and confidence.\n\nThis expert-led program is designed not only to improve scores but also to ensure students are fully prepared for success in international study and career opportunities.",
    highlights: [
      "AI scoring technique training for every task type",
      "Fluency and pronunciation coaching for Speaking",
      "Summarise Written Text & Essay strategy sessions",
      "Full mock tests under timed, exam-like conditions",
      "Score analysis report after every mock",
      "Fast-track 3-week intensive batches available",
    ],
  },
  duolingo: {
    title: "Duolingo English Test (DET)",
    tagline: "Affordable. At-home. Accepted worldwide.",
    img: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1200&auto=format&fit=crop&q=70",
    description:
      "The Duolingo English Test is an online, at-home proficiency test that takes only 60 minutes and costs a fraction of traditional tests. Results are available within 48 hours and are now accepted by 5,000+ universities globally — including many in the US, UK, Canada and Australia. It scores from 10–160 and tests reading, writing, listening and speaking in an adaptive format.\n\nLearnovate offers targeted DET preparation with real practice tests, adaptive question strategies and personalised coaching sessions to help you reach your target score quickly.",
    highlights: [
      "Adaptive test strategy — understand how DET scoring works",
      "Practice with official and trainer-created mock tests",
      "Vocabulary building for Read and Complete tasks",
      "Speaking and writing response coaching",
      "Preparation achievable in 2–4 weeks",
      "Affordable coaching packages available",
    ],
  },
  japanese: {
    title: "Japanese Language Course",
    tagline: "From beginner to JLPT-ready with expert tutors",
    img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&auto=format&fit=crop&q=70",
    description:
      "Japan is one of the most popular destinations for Nepali students — offering top universities, part-time work rights and a high quality of life. A strong foundation in Japanese is essential for success in university and daily life. Our Japanese Language program covers all JLPT levels (N5 to N2), including Hiragana, Katakana, Kanji, grammar and conversational Japanese.\n\nLearnovate's certified Japanese language instructors build your proficiency from scratch, preparing you for both the JLPT certification exam and university life in Japan.",
    highlights: [
      "JLPT N5, N4, N3 and N2 level courses",
      "Hiragana, Katakana and Kanji writing practice",
      "Grammar, vocabulary and conversational Japanese",
      "JLPT mock tests and exam preparation",
      "Study Japan visa guidance alongside language prep",
      "Small batch sizes for personalised attention",
    ],
  },
};

const formFields: Record<TabId, { label: string; submitLabel: string; formType: string; extraFields: object[] }> = {
  ielts: {
    label: "Book your IELTS Seat",
    submitLabel: "Reserve My IELTS Seat",
    formType: "ielts-booking",
    extraFields: [
      { name: "currentLevel", label: "Current English Level", type: "select", placeholder: "Select level", options: ["Beginner", "Intermediate", "Upper-intermediate", "Advanced"], required: true },
      { name: "targetBand", label: "Target Band", type: "select", placeholder: "Select target band", options: ["6.0", "6.5", "7.0", "7.5+"], required: true },
      { name: "batchPreference", label: "Preferred Batch", type: "select", placeholder: "Select batch", options: ["Morning (7–9 AM)", "Day (11 AM–1 PM)", "Evening (5–7 PM)", "Weekend (Sat–Sun)", "Online"], required: true },
      { name: "examDate", label: "Planned IELTS Exam Date", type: "date" },
    ],
  },
  pte: {
    label: "Book your PTE Seat",
    submitLabel: "Reserve My PTE Seat",
    formType: "pte-booking",
    extraFields: [
      { name: "currentScore", label: "Current PTE Score (if any)", placeholder: "e.g. 50" },
      { name: "targetScore", label: "Target PTE Score", type: "select", placeholder: "Select target score", options: ["50+", "58+", "65+", "79+"], required: true },
      { name: "batchPreference", label: "Preferred Batch", type: "select", placeholder: "Select batch", options: ["Morning", "Evening", "Weekend", "Online", "Fast-track (3 weeks)"], required: true },
      { name: "examDate", label: "Planned PTE Exam Date", type: "date" },
    ],
  },
  duolingo: {
    label: "Book your Duolingo Prep Seat",
    submitLabel: "Reserve My DET Seat",
    formType: "duolingo-booking",
    extraFields: [
      { name: "targetScore", label: "Target DET Score", type: "select", placeholder: "Select target score", options: ["100+", "110+", "120+", "130+"], required: true },
      { name: "batchPreference", label: "Preferred Batch", type: "select", placeholder: "Select batch", options: ["Morning", "Evening", "Weekend", "Online"], required: true },
      { name: "examDate", label: "Planned Exam Date", type: "date" },
    ],
  },
  japanese: {
    label: "Enrol in Japanese Language",
    submitLabel: "Reserve My Japanese Seat",
    formType: "japanese-booking",
    extraFields: [
      { name: "jlptLevel", label: "Target JLPT Level", type: "select", placeholder: "Select JLPT level", options: ["N5 (Beginner)", "N4 (Elementary)", "N3 (Intermediate)", "N2 (Upper-intermediate)"], required: true },
      { name: "batchPreference", label: "Preferred Batch", type: "select", placeholder: "Select batch", options: ["Morning", "Evening", "Weekend", "Online"], required: true },
    ],
  },
};

function TestPreparePage() {
  const [active, setActive] = useState<TabId>("ielts");
  const location = useRouterState({ select: (s) => s.location });

  useEffect(() => {
    const hash = location.hash?.replace("#", "") as TabId | undefined;
    if (hash && tabs.some((t) => t.id === hash)) {
      setActive(hash);
    }
  }, [location.hash]);

  const info = testInfo[active];
  const form = formFields[active];

  const fields = [
    { name: "name", label: "Full Name", placeholder: "Ram Bahadur", required: true },
    { name: "phone", label: "Phone / WhatsApp", type: "tel" as const, placeholder: "+977 98XXXXXXXX", required: true },
    { name: "email", label: "Email", type: "email" as const, placeholder: "you@example.com", required: true },
    ...form.extraFields,
    { name: "destinationCountry", label: "Destination Country", type: "select" as const, placeholder: "Select country", options: ["Australia", "United Kingdom", "United States", "Canada", "New Zealand", "Japan", "South Korea", "Malta", "Undecided"] },
    { name: "notes", label: "Anything we should know?", type: "textarea" as const, placeholder: "Previous scores, scheduling constraints, goals..." },
  ] as Parameters<typeof InquiryForm>[0]["fields"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero banner */}
      <section className="pt-28 md:pt-32 pb-16 bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Test Preparation</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.05] mt-3">
            Prepare for Your<br />
            <span className="text-primary">Language Test</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Expert coaching for IELTS, PTE, Duolingo English Test and Japanese Language — in Pokhara and online.
          </p>
        </div>
      </section>

      {/* Tab navigation */}
      <div className="sticky top-16 z-30 bg-background border-b border-border shadow-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActive(tab.id)}
                  className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                    active === tab.id
                      ? "border-primary text-primary"
                      : "border-transparent text-foreground/60 hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: info */}
            <div className="animate-fade-in-up">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">{info.tagline}</p>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-5">
                {info.title}
              </h2>
              <div className="overflow-hidden rounded-2xl border border-border shadow-card mb-6">
                <img
                  src={info.img}
                  alt={info.title}
                  className="w-full h-52 md:h-64 object-cover"
                />
              </div>
              <div className="text-foreground/80 leading-relaxed whitespace-pre-line mb-6">
                {info.description}
              </div>
              <h3 className="font-bold text-foreground mb-3">What you get at Learnovate:</h3>
              <ul className="space-y-2">
                {info.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: booking form */}
            <div className="lg:sticky lg:top-32">
              <InquiryForm
                key={active}
                title={form.label}
                subtitle="Fill in your details — our team will confirm your seat within 24 hours."
                formType={form.formType}
                submitLabel={form.submitLabel}
                fields={fields}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
}
