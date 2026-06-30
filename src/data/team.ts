import bikalpaPhoto   from "@/assets/bikalpa-kc(founder- CEO).jpg";
import taraBahadurKC  from "@/assets/Teams/Tara Bahadur Kc(Acedemic head, IELTS and PTE Instructor).jpeg";
import taraMagar      from "@/assets/Teams/Tara Magar(Documentation and finance Officer).jpeg";
import saurabBikramSen from "@/assets/Teams/Saurab Bikram Sen(Technical Officer).jpg";
import deepakKunwar   from "@/assets/Teams/Deepak Kunwar (Finance Advisor).jpeg";
import pradeeptiKC    from "@/assets/Teams/Pradeepti KC(Marketing Officer).jpeg";
import dipikaRoka     from "@/assets/Teams/Dipika Roka (Customer Relations Executive).jpeg";

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  photo: string;
  bio: string;
  expertise: string[];
  education: string;
  languages: string[];
};

export const team: TeamMember[] = [
  {
    slug: "bikalpa-kc",
    name: "Bikalpa K.C.",
    role: "Founder & CEO",
    email: "bikalpa@learnovate.com.np",
    phone: "+977 9856082953",
    photo: bikalpaPhoto,
    bio: "Bikalpa founded Learnovate in 2020 with a clear vision — to bring ethical, transparent and professional study-abroad counselling to students in Pokhara. He personally mentors students aiming for top universities in the UK, Australia and Canada, and leads the company's partnerships with global institutions.",
    expertise: ["Strategic Counselling", "University Partnerships", "Scholarship Planning", "Visa Strategy"],
    education: "MBA — Strategic Management",
    languages: ["English", "Nepali", "Hindi"],
  },
  {
    slug: "tara-bahadur-kc",
    name: "Tara Bahadur K.C.",
    role: "Academic Head — IELTS & PTE Instructor",
    email: "tara.bahadur@learnovate.com.np",
    phone: "+977 9817234500",
    photo: taraBahadurKC,
    bio: "Tara Bahadur leads the academic division at Learnovate with particular expertise in IELTS and PTE preparation. A certified instructor with years of experience, he has guided hundreds of students to the scores they need for their target universities through his focused, drill-based methodology.",
    expertise: ["IELTS Academic", "PTE Academic", "Academic Counselling", "Test Strategy"],
    education: "MA — English Language",
    languages: ["English", "Nepali", "Hindi"],
  },
  {
    slug: "tara-magar",
    name: "Tara Magar",
    role: "Documentation & Finance Officer",
    email: "tara.magar@learnovate.com.np",
    phone: "+977 9806001122",
    photo: taraMagar,
    bio: "Tara handles the meticulous documentation and financial filing that makes or breaks a visa application — from financial affidavits and sponsorship letters to comprehensive file preparation. She ensures every student's file is complete, accurate and submission-ready well before the deadline.",
    expertise: ["Document Preparation", "Financial Affidavits", "Visa Filing", "File Management"],
    education: "BBA — Finance",
    languages: ["English", "Nepali"],
  },
  {
    slug: "deepak-kunwar",
    name: "Deepak Kunwar",
    role: "Finance Advisor",
    email: "deepak@learnovate.com.np",
    phone: "+977 9856100201",
    photo: deepakKunwar,
    bio: "Deepak oversees all financial planning and advisory services at Learnovate, helping students and families understand the true cost of studying abroad — from tuition fees and scholarships to living expenses and part-time work allowances. His guidance ensures every financial decision is well-informed.",
    expertise: ["Financial Planning", "Scholarship Research", "Cost Analysis", "Bank Deposit Guidance"],
    education: "BBA — Banking & Finance",
    languages: ["English", "Nepali"],
  },
  {
    slug: "pradeepti-kc",
    name: "Pradeepti K.C.",
    role: "Marketing Officer",
    email: "pradeepti@learnovate.com.np",
    phone: "+977 9818765432",
    photo: pradeeptiKC,
    bio: "Pradeepti leads Learnovate's outreach and brand presence across digital and offline channels. From social media campaigns to educational seminars and school visits, she ensures students across Nepal know the opportunities available to them through Learnovate.",
    expertise: ["Digital Marketing", "Social Media", "Event Coordination", "Brand Strategy"],
    education: "BBA — Marketing",
    languages: ["English", "Nepali"],
  },
  {
    slug: "saurab-bikram-sen",
    name: "Saurab Bikram Sen",
    role: "IT Officer",
    email: "saurab@learnovate.com.np",
    phone: "+977 9818765432",
    photo: saurabBikramSen,
    bio: "Saurab manages Learnovate's digital infrastructure — from the website and student portal to internal systems that keep operations running smoothly. He brings a software engineering background to build tools that make the counselling process faster and more transparent for students.",
    expertise: ["Web Development", "Digital Systems", "Student Portal", "Tech Operations"],
    education: "BSc — Computer Science & Engineering",
    languages: ["English", "Nepali"],
  },
  {
    slug: "dipika-roka",
    name: "Dipika Roka",
    role: "Customer Relations Executive",
    email: "dipika@learnovate.com.np",
    phone: "+977 9846123344",
    photo: dipikaRoka,
    bio: "Dipika is the bridge between Learnovate and every student we serve. She manages initial inquiries, tracks application progress and makes sure no student is ever left waiting for answers. Her warmth and attention to detail make the process far less stressful.",
    expertise: ["Student Intake", "Application Tracking", "Query Resolution", "Client Relations"],
    education: "BBS — Management",
    languages: ["English", "Nepali"],
  },
];
