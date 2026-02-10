import type { CV } from "./types";

const birth = new Date(2005, 6, 31); // July 31, 2005
const today = new Date();
const age = today.getFullYear() - birth.getFullYear() - (today < new Date(today.getFullYear(), birth.getMonth(), birth.getDate()) ? 1 : 0);

export const cv: CV = {
  basics: {
    name: "David Alsheuski",
    title: "Software Engineer",
    location: "Wrocław, Poland",
    email: "software.dev.davidalsh@gmail.com",
    links: [
      { label: "GitHub", url: "https://github.com/davidalsh" },
      { label: "X", url: "https://xdays.io/u/davidalsh" },
    ],
    summary:
      "Experienced Software Engineer with years in application/service engineering, involved in system design, creating microservices, business logic, APIs, employing DevOps practices and more. With a strong love for problem-solving.",
    about:
      `I'm ${age} and I've been building software for years. I enjoy designing systems, untangling complexity, and shipping clean solutions. Every day I try to beat who I was yesterday.`,
  },
  skills: [
    {
      group: "Languages",
      items: ["Python", "TypeScript", "JavaScript"],
    },
    {
      group: "Backend",
      items: ["Django", "Django REST Framework", "FastAPI", "SQLAlchemy", "Supabase", "Firebase", "PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      group: "Frontend",
      items: ["React.js", "Next.js", "Vue.js", "HTML", "CSS", "TailwindCSS"],
    },
    {
      group: "AI / ML",
      items: ["LLM", "RAG", "OpenAI", "Agents SDK", "LangChain", "LangGraph"],
    },
    {
      group: "AI Tools",
      items: ["Claude Code", "Codex CLI"],
    },
    {
      group: "Cloud & DevOps",
      items: [
        "GCP",
        "DigitalOcean",
        "Docker",
        "Terraform",
        "CI/CD",
        "Apache Airflow",
      ],
    },
    {
      group: "Other",
      items: [
        "System Design",
        "Clean Architecture",
        "Testing",
        "Data Structures & Algorithms",
      ],
    },
  ],
  experience: [
    {
      company: "Tooploox",
      role: "Software Engineer",
      location: "Poland",
      start: "Jul 2025",
      bullets: [],
      stack: [
        "Python",
        "TypeScript",
        "REST API",
        "FastAPI",
        "AI",
        "Next.js",
        "System Design",
      ],
    },
    {
      company: "Share.P",
      role: "Backend Engineer",
      location: "Poland",
      start: "Jan 2025",
      end: "Jun 2025",
      bullets: [],
      stack: [
        "Python",
        "REST API",
        "Django",
        "FastAPI",
        "CI/CD",
        "Testing",
      ],
    },
    {
      company: "BPX",
      role: "Fullstack Developer",
      location: "Poland",
      start: "Aug 2024",
      end: "Jan 2025",
      bullets: [],
      stack: [
        "Python",
        "REST API",
        "FastAPI",
        "React.js",
        "Apache Airflow",
        "SQLAlchemy",
        "BDD Testing",
      ],
    },
    {
      company: "Ingenios",
      role: "Python Developer",
      location: "Poland",
      start: "Oct 2021",
      end: "Dec 2023",
      bullets: [],
      stack: [
        "Python",
        "REST API",
        "Django",
        "FastAPI",
        "ElasticSearch",
        "DevOps",
        "Stripe",
        "Apache Airflow",
      ],
    },
  ],
  education: [],
  extras: {
    languages: [
      "English (Fluent)",
      "Polish (Fluent)",
      "Belarusian (Native)",
      "Russian (Native)",
    ],
  },
};
