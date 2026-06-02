import bikalpaPhoto from "@/assets/bikalpa-kc.jpg";

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
    slug: "sneha-paudel",
    name: "Sneha Paudel",
    role: "Senior Education Counsellor — UK & Europe",
    email: "sneha@learnovate.com.np",
    phone: "+977 9856100201",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=70",
    bio: "Sneha specialises in UK and European applications, with deep knowledge of the CAS process, Personal Statement writing and post-Brexit visa rules. She has personally placed students at Ulster, UWE Bristol, Roehampton and more.",
    expertise: ["UK Admissions", "Personal Statement Review", "CAS & Visa", "Schengen Routes"],
    education: "MA — International Relations",
    languages: ["English", "Nepali"],
  },
  {
    slug: "prakash-gurung",
    name: "Prakash Gurung",
    role: "Australia & New Zealand Specialist",
    email: "prakash@learnovate.com.np",
    phone: "+977 9846123344",
    photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&auto=format&fit=crop&q=70",
    bio: "Prakash leads the Australia and New Zealand desk. From CQ University to Charles Darwin, he handles Genuine Student statements, COE issuance and Subclass 500 visa applications with a near-perfect approval rate.",
    expertise: ["Subclass 500 Visa", "GS Statement", "PR Pathways", "Course Mapping"],
    education: "MSc — Education Management",
    languages: ["English", "Nepali", "Gurung"],
  },
  {
    slug: "ashma-shrestha",
    name: "Ashma Shrestha",
    role: "IELTS & PTE Lead Trainer",
    email: "ashma@learnovate.com.np",
    phone: "+977 9817234500",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=70",
    bio: "Ashma is a certified language trainer with a 9.0 band in IELTS. Her students consistently hit 7.0+ thanks to her drill-based writing and speaking methodology and weekly mock examinations.",
    expertise: ["IELTS Academic", "PTE Academic", "Duolingo Test", "Writing & Speaking"],
    education: "MA — English Literature · IELTS Band 9.0",
    languages: ["English", "Nepali"],
  },
  {
    slug: "rojan-adhikari",
    name: "Rojan Adhikari",
    role: "Documentation & SOP Specialist",
    email: "rojan@learnovate.com.np",
    phone: "+977 9818765432",
    photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&auto=format&fit=crop&q=70",
    bio: "Rojan has drafted 600+ successful SOPs across Australia, the UK, the US and Canada. He blends each student's story with what visa officers actually look for — clarity, evidence and intent.",
    expertise: ["SOP Writing", "LOR Drafting", "GTE/GS Statement", "Financial Documentation"],
    education: "MA — English & Creative Writing",
    languages: ["English", "Nepali"],
  },
  {
    slug: "manisha-thapa",
    name: "Manisha Thapa",
    role: "Student Relations & Front Office",
    email: "manisha@learnovate.com.np",
    phone: "+977 9806001122",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=70",
    bio: "Manisha is usually the first friendly voice you hear at Learnovate. She manages appointments, walk-in counselling and keeps every student's application file moving on schedule.",
    expertise: ["Counselling Intake", "Appointment Scheduling", "File Tracking", "Student Support"],
    education: "BBA — Marketing",
    languages: ["English", "Nepali", "Hindi"],
  },
];
