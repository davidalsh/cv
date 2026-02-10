export type CV = {
  basics: {
    name: string;
    title: string;
    location?: string;
    email?: string;
    phone?: string;
    links: { label: string; url: string }[];
    summary?: string;
  };
  skills: { group: string; items: string[] }[];
  experience: {
    company: string;
    role: string;
    location?: string;
    start: string;
    end?: string;
    bullets: string[];
    stack?: string[];
  }[];
  projects?: {
    name: string;
    description: string;
    bullets?: string[];
    stack?: string[];
    links?: { label: string; url: string }[];
  }[];
  education: {
    school: string;
    degree?: string;
    field?: string;
    start?: string;
    end?: string;
    notes?: string[];
  }[];
  extras?: {
    certifications?: string[];
    awards?: string[];
    languages?: string[];
  };
};
