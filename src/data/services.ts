export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  img: string;
  icon: "Languages" | "Sprout" | "GraduationCap" | "CreditCard" | "FileText" | "Plane";
  whatYouGet: string[];
  process: { step: string; desc: string }[];
  faqs: { q: string; a: string }[];
  cta?: string;
};

export const services: Service[] = [
  {
    slug: "ielts-pte-duolingo",
    title: "IELTS · PTE · Duolingo Preparation",
    short: "Structured language test preparation with experienced trainers and seasonal discount offers.",
    intro:
      "Learnovate's language test programs are built around your target band. Whether you need a 6.5 for a visa or 7.5+ for a Masters, our trainers customise drills, mock tests and one-on-one feedback so you hit the score on time.",
    img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1600&auto=format&fit=crop&q=70",
    icon: "Languages",
    whatYouGet: [
      "Diagnostic test + personalised target plan",
      "60+ hours of live classes per module",
      "Weekly full-length mock tests with band-wise feedback",
      "Unlimited speaking practice with certified trainers",
      "Writing task review by IELTS examiners",
      "Access to recorded sessions and practice portal",
    ],
    process: [
      { step: "Diagnostic", desc: "Take a free mock to identify your current band and weak areas." },
      { step: "Personalised Plan", desc: "We pick the right batch (morning/evening/online) and target date." },
      { step: "Train & Drill", desc: "6–10 weeks of focused practice with weekly progress reports." },
      { step: "Mock & Refine", desc: "Three full mock tests in test-day conditions before booking the real exam." },
      { step: "Book & Crack", desc: "Slot booking guidance and final-week confidence sessions." },
    ],
    faqs: [
      { q: "How long does it take to reach IELTS 7.0?", a: "Most students reach band 7 in 6–10 weeks of consistent practice if they're starting from 5.5+." },
      { q: "Do you offer online classes?", a: "Yes — we run morning, evening and dedicated weekend online batches." },
      { q: "What is the fee?", a: "Fees vary by batch length and seasonal offers. Drop by our office or WhatsApp us for the current pricing." },
    ],
  },
  {
    slug: "entrance-preparation",
    title: "Forestry · Agriculture · Veterinary Entrance",
    short: "Specialized coaching for Forestry, Agriculture and Veterinary entrance exams.",
    intro:
      "Our entrance coaching is the most consistent in Pokhara — many of our students top the merit list. We cover the full syllabus (Botany, Zoology, Chemistry, Physics, English, GK) with curated notes, daily quizzes and weekly mocks.",
    img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1600&auto=format&fit=crop&q=70",
    icon: "Sprout",
    whatYouGet: [
      "Complete syllabus coverage with subject specialists",
      "Daily MCQ quizzes with rank tracking",
      "30+ chapter-wise tests and 10+ full mock exams",
      "Printed Learnovate handouts and previous-year question banks",
      "Doubt-clearing sessions every Saturday",
      "Counselling for college selection after results",
    ],
    process: [
      { step: "Enrollment", desc: "Join a 3 / 6 month batch based on your exam date." },
      { step: "Foundation", desc: "Strengthen +2 concepts in Botany, Zoology, Chemistry & Physics." },
      { step: "Application", desc: "Chapter-wise MCQ drills, daily revision quizzes." },
      { step: "Mock Phase", desc: "10+ full-length tests with merit-list ranking." },
      { step: "Final Sprint", desc: "Past-paper marathon and confidence sessions." },
    ],
    faqs: [
      { q: "Which exams do you prepare for?", a: "AFU (Forestry, Agriculture, Veterinary), IAAS, NPI, and other +2 science entrance exams." },
      { q: "Do you provide study material?", a: "Yes — all printed notes, MCQ books and past-question sets are included." },
      { q: "What's the average success rate?", a: "Learnovate students have consistently topped AFU merit lists over the past 3 years." },
    ],
  },
  {
    slug: "university-placements",
    title: "International University Placements",
    short: "Direct guidance for international universities including CQ University and partners.",
    intro:
      "We partner directly with universities in Australia, the UK, Canada, the US, New Zealand, Japan, South Korea and Malta. Our counselors shortlist programs based on your profile, budget, work-rights goals and PR plans — then handle the application end to end.",
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&auto=format&fit=crop&q=70",
    icon: "GraduationCap",
    whatYouGet: [
      "Profile evaluation and country fit analysis",
      "Shortlist of 3–5 best-fit universities & programs",
      "End-to-end application filing with offer-letter tracking",
      "Application-fee waivers from partner universities",
      "Tuition deposit and CAS/I-20/COE handling",
      "Direct access to university representatives in Pokhara",
    ],
    process: [
      { step: "Counselling", desc: "Free 30-min session to understand goals, budget and timeline." },
      { step: "Shortlisting", desc: "We propose 3–5 universities that match your profile." },
      { step: "Documentation", desc: "SOP, LORs, transcripts, financial docs — fully managed." },
      { step: "Application", desc: "Files submitted, deadlines tracked, offer letters delivered." },
      { step: "Confirmation", desc: "Tuition deposit, CAS/I-20/COE and pre-visa briefing." },
    ],
    faqs: [
      { q: "How early should I start?", a: "Ideally 6–9 months before your intended intake to maximise scholarship chances." },
      { q: "Do I have to take IELTS first?", a: "Not always — many of our partner universities accept PTE, Duolingo or MOI letters." },
      { q: "Is there a placement fee?", a: "Our basic counselling and application support is free for most partner universities." },
    ],
  },
  {
    slug: "scholarship-support",
    title: "Scholarship Support",
    short: "Application support for merit & need-based scholarships at partner universities.",
    intro:
      "Most students leave money on the table because they don't know which scholarships they qualify for. We map your academic profile, test scores and financial situation against every available award — internal, government and external — to maximise your funding.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&auto=format&fit=crop&q=70",
    icon: "CreditCard",
    whatYouGet: [
      "Scholarship eligibility audit across all partner universities",
      "Up to 25% direct scholarships at CQ University and others",
      "Guidance for Chevening, GREAT, MEXT and GKS awards",
      "Scholarship-specific essay & motivation letter coaching",
      "Renewal-condition planning so you keep the award",
    ],
    process: [
      { step: "Eligibility Audit", desc: "We score your academics, test scores and finances against every option." },
      { step: "Targeting", desc: "Pick 2–3 universities offering the best scholarship for your profile." },
      { step: "Essay & Application", desc: "Tailored motivation letters and supporting documents." },
      { step: "Tracking", desc: "Follow up on decisions and negotiate where possible." },
    ],
    faqs: [
      { q: "Are scholarships only for toppers?", a: "No — many awards are need-based or country-specific. Even a 70% GPA can unlock 20–25%." },
      { q: "Can I combine multiple scholarships?", a: "Sometimes yes — internal university awards often stack with external ones like Chevening." },
    ],
  },
  {
    slug: "documentation-sop",
    title: "Documentation & SOP Writing",
    short: "Professional help with SOPs, recommendation letters, and complete application files.",
    intro:
      "A weak SOP is the #1 reason for visa refusal and admission denial. Our writing team has crafted 600+ successful files — every line of your story is backed by evidence, aligned with the program, and structured the way visa officers expect.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&auto=format&fit=crop&q=70",
    icon: "FileText",
    whatYouGet: [
      "Personalised SOP drafted from a 60-minute interview",
      "Two rounds of revision included",
      "Letters of Recommendation drafted on your school's behalf",
      "Resume / CV formatted for university admissions",
      "Statement of Financial Support and sponsor affidavits",
      "Country-specific Genuine Student / Genuine Temporary Entrant statement",
    ],
    process: [
      { step: "Interview", desc: "We dig into your story, motivation and goals." },
      { step: "Draft", desc: "First SOP draft delivered in 3 working days." },
      { step: "Refine", desc: "Two free rounds of revision based on your feedback." },
      { step: "Approve", desc: "Final formatting, plagiarism check, and submission-ready PDF." },
    ],
    faqs: [
      { q: "How long should my SOP be?", a: "Typically 800–1200 words. Some universities have stricter word limits — we follow theirs." },
      { q: "Will my SOP be original?", a: "100% original. We never recycle templates and every draft is plagiarism-checked." },
    ],
  },
  {
    slug: "visa-assistance",
    title: "Visa Assistance",
    short: "End-to-end visa documentation, mock interviews, and pre-departure briefing.",
    intro:
      "Visa filing is where applications most often fall apart. Our visa team has filed 1000+ student visas across AU, UK, US, CA, NZ and EU — we know exactly what each embassy is looking for and how to package your file to clear scrutiny.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&auto=format&fit=crop&q=70",
    icon: "Plane",
    whatYouGet: [
      "Country-specific document checklist & financial planning",
      "Form filling (DS-160, GTE, SDS, CAS, COE etc.)",
      "Sponsorship & funds documentation review",
      "Mock visa interview with embassy-style questions",
      "Visa-fee payment & biometric appointment booking",
      "Pre-departure briefing on arrival, accommodation and SIM",
    ],
    process: [
      { step: "File Build", desc: "Build a watertight financial and academic file." },
      { step: "Form Filing", desc: "Visa forms filled accurately, no last-minute errors." },
      { step: "Mock Interview", desc: "Practice with our trained interviewers." },
      { step: "Submission", desc: "Biometrics, fee payment, and tracking." },
      { step: "Pre-departure", desc: "Briefing on travel, accommodation, banking and culture." },
    ],
    faqs: [
      { q: "What's your visa success rate?", a: "Our success rate sits above 95% for genuine and well-documented applicants." },
      { q: "Can you help if my visa was previously rejected?", a: "Yes — we review the refusal letter and rebuild the file addressing every concern." },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);