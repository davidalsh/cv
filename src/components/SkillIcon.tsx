import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiDjango,
  SiFastapi,
  SiSqlalchemy,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiOpenai,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiAmazonwebservices,
  SiGooglecloud,
  SiDigitalocean,
  SiDocker,
  SiTerraform,
  SiApacheairflow,
  SiSupabase,
  SiFirebase,
} from "react-icons/si";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  Python: SiPython,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Django: SiDjango,
  FastAPI: SiFastapi,
  SQLAlchemy: SiSqlalchemy,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Vue.js": SiVuedotjs,
  HTML: SiHtml5,
  CSS: SiCss3,
  TailwindCSS: SiTailwindcss,
  OpenAI: SiOpenai,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  AWS: SiAmazonwebservices,
  GCP: SiGooglecloud,
  DigitalOcean: SiDigitalocean,
  Docker: SiDocker,
  Terraform: SiTerraform,
  "Apache Airflow": SiApacheairflow,
  Supabase: SiSupabase,
  Firebase: SiFirebase,
};

export default function SkillIcon({ name }: { name: string }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon size={14} className="shrink-0 text-neutral-500" />;
}
