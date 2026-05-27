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
  },
];

export const getCountryBySlug = (slug: string) =>
  countries.find((c) => c.slug === slug);