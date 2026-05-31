export type Country = {
  slug: string;
  name: string;
  code: string;
  unis: string;
  tagline: string;
  intro: string;
  highlights: { title: string; desc: string }[];
  popularCourses: string[];
  intake: string;
  heroImg: string;
  capital?: string;
  language?: string;
  currency?: string;
  tuitionRange?: string;
  livingCost?: string;
  workHours?: string;
  postStudyWork?: string;
  topUniversities?: string[];
  requirements?: string[];
  opportunities?: { title: string; desc: string }[];
  courseDetails?: { name: string; level: string; duration: string; avgFee: string; careers: string }[];
};

export const countries: Country[] = [
  {
    slug: "australia",
    name: "Australia",
    code: "au",
    unis: "CQ University & more",
    tagline: "World-class universities, generous post-study work rights.",
    intro:
      "Australia is one of the most popular destinations for Nepali students, offering globally ranked universities, multicultural cities, and excellent post-study work visas of up to 4 years.",
    highlights: [
      { title: "Post-Study Work Visa", desc: "2–4 years subclass 485 visa after graduation." },
      { title: "Scholarships", desc: "Up to 25% scholarships at CQ University and partner institutions." },
      { title: "Quality of Life", desc: "Safe cities, strong healthcare, and a vibrant Nepali community." },
    ],
    popularCourses: ["IT & Cyber Security", "Nursing & Healthcare", "Business & Accounting", "Engineering"],
    intake: "Feb · Jul · Nov",
    heroImg: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1600&auto=format&fit=crop&q=70",
    capital: "Canberra",
    language: "English",
    currency: "AUD (A$)",
    tuitionRange: "A$ 20,000 – 45,000 / year",
    livingCost: "A$ 21,000 / year (Genuine Student requirement)",
    workHours: "48 hours / fortnight during study, unlimited on breaks",
    postStudyWork: "Subclass 485 — 2 to 4 years depending on qualification",
    topUniversities: ["CQ University", "Federation University", "Victoria University", "Charles Darwin University", "University of Tasmania"],
    requirements: ["IELTS 6.0+ (no band less than 5.5) or PTE 50+", "Academic transcripts & character certificate", "Statement of Purpose (SOP)", "Financial evidence covering tuition + living", "Genuine Student (GS) statement"],
    opportunities: [
      { title: "Skilled Migration Pathway", desc: "Many courses are on the Medium and Long-Term Skilled Occupation List, leading to permanent residency." },
      { title: "Part-time Earnings", desc: "Hourly wages of A$ 24–35 across hospitality, retail, aged-care and warehousing." },
      { title: "Industry Internships", desc: "Most postgraduate courses include professional placements or capstone projects with Australian employers." },
    ],
    courseDetails: [
      { name: "Master of Information Technology", level: "Postgraduate", duration: "2 years", avgFee: "A$ 32,000 / yr", careers: "Cyber Security Analyst, Cloud Engineer, Data Engineer" },
      { name: "Bachelor of Nursing", level: "Undergraduate", duration: "3 years", avgFee: "A$ 33,000 / yr", careers: "Registered Nurse, Aged Care, Clinical Educator" },
      { name: "Master of Professional Accounting", level: "Postgraduate", duration: "2 years", avgFee: "A$ 30,000 / yr", careers: "Accountant, Auditor, Financial Analyst" },
    ],
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    code: "gb",
    unis: "Top Universities",
    tagline: "Shorter degrees, prestigious universities, global recognition.",
    intro:
      "Study in the UK and earn a degree from some of the oldest and most respected universities in the world — often in just one year for a Masters.",
    highlights: [
      { title: "1-Year Masters", desc: "Most postgraduate degrees finish in 12 months." },
      { title: "Graduate Route Visa", desc: "2-year post-study work visa for all graduates." },
      { title: "Scholarships", desc: "Chevening, GREAT and university-specific awards available." },
    ],
    popularCourses: ["Business & MBA", "Data Science", "Public Health", "Law"],
    intake: "Jan · Sep",
    heroImg: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&auto=format&fit=crop&q=70",
    capital: "London",
    language: "English",
    currency: "GBP (£)",
    tuitionRange: "£ 14,000 – 28,000 / year",
    livingCost: "£ 12,000 / year (London £ 15,000)",
    workHours: "20 hours / week during term, full-time on breaks",
    postStudyWork: "Graduate Route — 2 years (3 years for PhD)",
    topUniversities: ["University of Greenwich", "Coventry University", "BPP University", "University of Hertfordshire", "Ulster University"],
    requirements: ["IELTS UKVI 6.0–6.5+ overall", "Academic transcripts", "Personal Statement", "CAS letter from UK university", "Tuberculosis (TB) test certificate", "Proof of funds for tuition + living"],
    opportunities: [
      { title: "Global Talent Pool", desc: "Direct hiring routes with London's finance, tech and healthcare sectors." },
      { title: "Skilled Worker Visa", desc: "Switch from Graduate Route to long-term work sponsorship and settlement." },
      { title: "Research Funding", desc: "PhD scholarships and assistantships across Russell Group universities." },
    ],
    courseDetails: [
      { name: "MSc Data Science", level: "Postgraduate", duration: "1 year", avgFee: "£ 18,000", careers: "Data Scientist, ML Engineer, Analytics Lead" },
      { name: "MBA", level: "Postgraduate", duration: "1 year", avgFee: "£ 22,000", careers: "Consultant, Product Manager, Operations Director" },
      { name: "MSc Public Health", level: "Postgraduate", duration: "1 year", avgFee: "£ 17,000", careers: "Public Health Officer, NGO, NHS Roles" },
    ],
  },
  {
    slug: "united-states",
    name: "United States",
    code: "us",
    unis: "Partner Colleges",
    tagline: "Home to the world's top-ranked universities.",
    intro:
      "The US offers unmatched academic flexibility, research opportunities and access to leading employers across tech, healthcare and finance.",
    highlights: [
      { title: "OPT & STEM OPT", desc: "Up to 3 years of post-study work for STEM graduates." },
      { title: "Research Funding", desc: "Generous assistantships and tuition waivers for MS/PhD." },
      { title: "Global Recognition", desc: "Degrees respected by employers worldwide." },
    ],
    popularCourses: ["Computer Science", "Data Analytics", "MBA", "Engineering"],
    intake: "Spring · Fall",
    heroImg: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1600&auto=format&fit=crop&q=70",
    capital: "Washington, D.C.",
    language: "English",
    currency: "USD ($)",
    tuitionRange: "$ 20,000 – 55,000 / year",
    livingCost: "$ 12,000 – 18,000 / year",
    workHours: "20 hours / week on-campus during study, CPT/OPT off-campus",
    postStudyWork: "OPT — 1 year (STEM OPT extension up to 3 years)",
    topUniversities: ["University of Texas at Dallas", "George Mason University", "Pace University", "Saint Louis University", "University of Cincinnati"],
    requirements: ["IELTS 6.5+ / TOEFL 80+ / PTE 60+", "GRE/GMAT (for many MS/MBA programs)", "SOP & 2–3 LORs", "Academic transcripts (course-by-course evaluation if needed)", "I-20 and SEVIS fee receipt", "Bank statement covering first year"],
    opportunities: [
      { title: "STEM Career Pipeline", desc: "3 years of OPT work authorisation feeds directly into H-1B sponsorship at major tech firms." },
      { title: "Research Assistantships", desc: "Tuition waivers + stipends of $ 18,000–25,000 / yr at top public universities." },
      { title: "Entrepreneurship", desc: "Access to incubators, accelerators and OPT-eligible startup founder pathways." },
    ],
    courseDetails: [
      { name: "MS Computer Science", level: "Postgraduate", duration: "2 years", avgFee: "$ 35,000 / yr", careers: "Software Engineer, ML Engineer, SDE at FAANG" },
      { name: "MS Data Analytics", level: "Postgraduate", duration: "1.5–2 years", avgFee: "$ 32,000 / yr", careers: "Data Analyst, BI Developer, Quant Analyst" },
      { name: "MBA", level: "Postgraduate", duration: "2 years", avgFee: "$ 45,000 / yr", careers: "Strategy Consultant, Product Manager, VP Operations" },
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    code: "ca",
    unis: "Public Colleges",
    tagline: "Affordable tuition, friendly immigration pathways.",
    intro:
      "Canada is well known for its welcoming immigration policy, quality public colleges, and a clear pathway from study permit to permanent residency.",
    highlights: [
      { title: "PGWP", desc: "Up to 3-year Post-Graduation Work Permit." },
      { title: "PR Pathways", desc: "Express Entry and PNP routes after graduation." },
      { title: "Affordable", desc: "Lower tuition than US/UK at top public colleges." },
    ],
    popularCourses: ["Healthcare", "Hospitality", "Cloud Computing", "Supply Chain"],
    intake: "Jan · May · Sep",
    heroImg: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1600&auto=format&fit=crop&q=70",
    capital: "Ottawa",
    language: "English & French",
    currency: "CAD (C$)",
    tuitionRange: "C$ 15,000 – 35,000 / year",
    livingCost: "C$ 20,635 / year (IRCC requirement)",
    workHours: "24 hours / week during study, full-time on breaks",
    postStudyWork: "PGWP — up to 3 years",
    topUniversities: ["Conestoga College", "Seneca College", "Fanshawe College", "Humber College", "Cape Breton University"],
    requirements: ["IELTS 6.0+ overall (SDS route: 6.0 in each band)", "GIC of C$ 20,635 for SDS", "First-year tuition paid upfront", "SOP and academic documents", "Medical exam & police clearance"],
    opportunities: [
      { title: "Permanent Residency", desc: "Express Entry CRS, PNP and Atlantic Immigration Program after PGWP." },
      { title: "Co-op Programs", desc: "Paid co-op semesters embedded in most college diplomas and PG certificates." },
      { title: "Spousal Open Work Permit", desc: "Eligible students can bring spouse on an open work permit." },
    ],
    courseDetails: [
      { name: "PG Diploma in Cloud Computing", level: "PG Diploma", duration: "1 year", avgFee: "C$ 16,500", careers: "DevOps Engineer, Cloud Administrator, SRE" },
      { name: "Diploma in Hospitality Management", level: "Diploma", duration: "2 years", avgFee: "C$ 15,000 / yr", careers: "Hotel Manager, F&B Supervisor, Event Manager" },
      { name: "PG Cert in Supply Chain", level: "PG Cert", duration: "1 year", avgFee: "C$ 17,000", careers: "Logistics Coordinator, Procurement Analyst" },
    ],
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    code: "nz",
    unis: "PTE Accepted",
    tagline: "Stunning landscapes and globally ranked universities.",
    intro:
      "All eight New Zealand universities rank in the world's top 3%. Affordable tuition, a relaxed lifestyle and strong post-study work rights.",
    highlights: [
      { title: "Post-Study Work", desc: "Up to 3 years of open work visa after study." },
      { title: "Safe & Peaceful", desc: "Consistently ranked among the safest study destinations." },
      { title: "PTE Accepted", desc: "Strong recognition for PTE and IELTS scores." },
    ],
    popularCourses: ["IT", "Construction Management", "Agriculture", "Tourism"],
    intake: "Feb · Jul",
    heroImg: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&auto=format&fit=crop&q=70",
    capital: "Wellington",
    language: "English",
    currency: "NZD (NZ$)",
    tuitionRange: "NZ$ 22,000 – 36,000 / year",
    livingCost: "NZ$ 20,000 / year",
    workHours: "20 hours / week during study, full-time on breaks",
    postStudyWork: "Post-Study Work Visa — 1 to 3 years",
    topUniversities: ["Lincoln University", "Massey University", "AUT", "University of Waikato", "Otago Polytechnic"],
    requirements: ["IELTS 6.0+ / PTE 50+", "Academic transcripts", "Statement of Purpose", "Genuine intent statement", "Funds: NZ$ 20,000 + tuition"],
    opportunities: [
      { title: "Green List Occupations", desc: "Construction, healthcare and IT roles fast-track residency under the Green List." },
      { title: "Agri-Tech Hub", desc: "Internships across dairy, viticulture and agri-tech innovation centres." },
      { title: "Partner Work Rights", desc: "Spouse of a postgraduate student gets an open work visa." },
    ],
    courseDetails: [
      { name: "Master of Applied IT", level: "Postgraduate", duration: "1.5 years", avgFee: "NZ$ 30,000", careers: "Full-stack Developer, IT Consultant" },
      { name: "Master of Construction Mgmt", level: "Postgraduate", duration: "1.5 years", avgFee: "NZ$ 32,000", careers: "Project Engineer, Quantity Surveyor" },
      { name: "PG Diploma in Agribusiness", level: "PG Diploma", duration: "1 year", avgFee: "NZ$ 28,000", careers: "Agri Consultant, Farm Manager" },
    ],
  },
  {
    slug: "japan",
    name: "Japan",
    code: "jp",
    unis: "Language Schools",
    tagline: "Cutting-edge research, rich culture, low tuition.",
    intro:
      "From language schools in Tokyo to top engineering universities, Japan offers an unmatched blend of tradition and innovation at very affordable costs.",
    highlights: [
      { title: "Affordable Tuition", desc: "Public universities cost significantly less than the West." },
      { title: "Part-Time Work", desc: "Up to 28 hours per week during study." },
      { title: "MEXT Scholarships", desc: "Fully-funded Japanese government scholarships." },
    ],
    popularCourses: ["Japanese Language", "Engineering", "Robotics", "Animation & Design"],
    intake: "Apr · Oct",
    heroImg: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1600&auto=format&fit=crop&q=70",
    capital: "Tokyo",
    language: "Japanese (English programs available)",
    currency: "JPY (¥)",
    tuitionRange: "¥ 650,000 – 1,500,000 / year",
    livingCost: "¥ 90,000 / month",
    workHours: "28 hours / week during study, 40 hours on breaks",
    postStudyWork: "Designated Activities Visa — up to 1 year for job hunting",
    topUniversities: ["ARC Academy", "Akamonkai Japanese Language School", "Toyo University", "Kyoto Institute of Technology", "Waseda University"],
    requirements: ["JLPT N5 minimum (N4 preferred) for language school", "12 years of education", "Letter of guarantee / sponsor documents", "Certificate of Eligibility (COE)", "Financial proof of ¥ 1.5 million minimum"],
    opportunities: [
      { title: "Specified Skilled Worker", desc: "Pathway into long-term employment across 12 industries after graduation." },
      { title: "Tech & Robotics Internships", desc: "Hands-on internships with Honda, Sony, Toyota and emerging startups." },
      { title: "MEXT Full Scholarship", desc: "Covers tuition, monthly stipend and air-fare for top performers." },
    ],
    courseDetails: [
      { name: "Japanese Language Course", level: "Diploma", duration: "1–2 years", avgFee: "¥ 750,000 / yr", careers: "Interpreter, Bilingual roles, Pathway to university" },
      { name: "Bachelor of Engineering", level: "Undergraduate", duration: "4 years", avgFee: "¥ 820,000 / yr", careers: "Mechanical Engineer, Robotics Engineer" },
      { name: "Master of Animation & Design", level: "Postgraduate", duration: "2 years", avgFee: "¥ 1,200,000 / yr", careers: "Animator, Game Designer, Art Director" },
    ],
  },
  {
    slug: "south-korea",
    name: "South Korea",
    code: "kr",
    unis: "Scholarships",
    tagline: "Tech-driven economy with generous scholarships.",
    intro:
      "South Korea is a hub for technology, K-culture and world-class universities. Scholarships of 30–100% are common for international students.",
    highlights: [
      { title: "GKS Scholarship", desc: "Global Korea Scholarship covers tuition + stipend." },
      { title: "Tech Industry", desc: "Internships with Samsung, LG, Hyundai and startups." },
      { title: "Vibrant Culture", desc: "Modern cities, safe campuses, rich student life." },
    ],
    popularCourses: ["Korean Language", "Engineering", "Business", "Media & Design"],
    intake: "Mar · Sep",
    heroImg: "https://images.unsplash.com/photo-1538485399081-7c8970d28933?w=1600&auto=format&fit=crop&q=70",
    capital: "Seoul",
    language: "Korean (English programs available)",
    currency: "KRW (₩)",
    tuitionRange: "₩ 4,000,000 – 9,000,000 / semester",
    livingCost: "₩ 800,000 / month",
    workHours: "20 hours / week during semester, unlimited on breaks",
    postStudyWork: "D-10 Job Seeker Visa — 6 months, extendable",
    topUniversities: ["Konkuk University", "Kyung Hee University", "Hanyang University", "Sejong University", "Chonnam National University"],
    requirements: ["TOPIK Level 3+ or IELTS 5.5+ for English programs", "High school / Bachelor transcripts", "Study Plan & SOP", "Financial proof of US$ 20,000", "Apostilled documents"],
    opportunities: [
      { title: "GKS Scholarship", desc: "Full tuition + monthly stipend + air-fare for selected international students." },
      { title: "Chaebol Internships", desc: "Internship pipelines with Samsung, LG, Hyundai and Naver." },
      { title: "E-7 Skilled Visa", desc: "Switch to long-term skilled employment after graduation." },
    ],
    courseDetails: [
      { name: "Korean Language Program", level: "Diploma", duration: "1 year", avgFee: "₩ 6,000,000", careers: "Interpreter, Pathway to degree program" },
      { name: "Bachelor of Engineering", level: "Undergraduate", duration: "4 years", avgFee: "₩ 7,500,000 / sem", careers: "Engineer at Samsung, LG, Hyundai" },
      { name: "MBA (Global)", level: "Postgraduate", duration: "2 years", avgFee: "₩ 9,000,000 / sem", careers: "Strategy Consultant, Business Analyst" },
    ],
  },
  {
    slug: "malta",
    name: "Malta",
    code: "mt",
    unis: "Affordable EU",
    tagline: "Affordable EU degrees on a Mediterranean island.",
    intro:
      "Malta combines English-taught EU degrees with sunny Mediterranean living and one of the most affordable tuition structures in Europe.",
    highlights: [
      { title: "English-Taught", desc: "All programs delivered in English." },
      { title: "EU Degree", desc: "Recognized across the European Union." },
      { title: "Work Rights", desc: "20 hours/week part-time during study." },
    ],
    popularCourses: ["Business", "Healthcare", "Hospitality", "iGaming & IT"],
    intake: "Feb · Oct",
    heroImg: "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?w=1600&auto=format&fit=crop&q=70",
    capital: "Valletta",
    language: "English & Maltese",
    currency: "EUR (€)",
    tuitionRange: "€ 8,000 – 14,000 / year",
    livingCost: "€ 9,000 – 12,000 / year",
    workHours: "20 hours / week after first 13 weeks of study",
    postStudyWork: "Job-seeker residence permit up to 9 months",
    topUniversities: ["American University of Malta", "Global College Malta", "Saint Martin's Institute", "Institute of Tourism Studies", "MCAST"],
    requirements: ["IELTS 5.5–6.0+", "High school / Bachelor transcripts", "Personal statement", "Health insurance for entire stay", "Proof of accommodation in Malta"],
    opportunities: [
      { title: "iGaming Capital", desc: "Malta is the global hub for online gaming, fintech and blockchain startups." },
      { title: "EU Schengen Access", desc: "Travel and intern freely across 27 EU member states." },
      { title: "Affordable Pathway", desc: "Lowest-cost route to a fully-recognised EU degree in English." },
    ],
    courseDetails: [
      { name: "BA in Business Management", level: "Undergraduate", duration: "3 years", avgFee: "€ 9,500 / yr", careers: "Business Analyst, Operations Manager" },
      { name: "MSc in iGaming", level: "Postgraduate", duration: "1 year", avgFee: "€ 12,500", careers: "Product Manager, Compliance Officer in iGaming" },
      { name: "Diploma in Hospitality", level: "Diploma", duration: "2 years", avgFee: "€ 8,500 / yr", careers: "Hotel Manager, F&B Lead, Cruise Hospitality" },
    ],
  },
];

export const getCountryBySlug = (slug: string) =>
  countries.find((c) => c.slug === slug);