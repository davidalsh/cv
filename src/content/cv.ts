import type { CV } from "./types";

export const cv: CV = {
  basics: {
    name: "David Alsheuski",
    title: "Software Engineer",
    location: "Wrocław, Poland",
    email: "software.dev.davidalsh@gmail.com",
    links: [
      { label: "GitHub", url: "https://github.com/davidalsh" },
    ],
    summary:
      "Experienced Software Engineer with years in application/service engineering, involved in system design, creating microservices, REST APIs and employing DevOps practices, with a strong love for problem-solving and challenging tasks.",
  },
  skills: [
    {
      group: "Languages",
      items: ["Python", "TypeScript", "JavaScript"],
    },
    {
      group: "Backend",
      items: ["Django", "Django REST Framework", "FastAPI", "SQLAlchemy"],
    },
    {
      group: "Frontend",
      items: ["React.js", "Next.js", "Vue.js", "HTML", "CSS", "TailwindCSS"],
    },
    {
      group: "AI / ML",
      items: ["LLM", "RAG", "OpenAI", "Agents SDK"],
    },
    {
      group: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      group: "Cloud & DevOps",
      items: [
        "AWS",
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
        "Unit Testing",
        "Data Structures & Algorithms",
        "Supabase",
        "Firebase",
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
        "Unit Testing",
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
