import type { CV } from "@/content/types";
import { SectionHeading } from "./SectionHeading";
import SkillIcon from "./SkillIcon";

export default function Skills({ skills }: { skills: CV["skills"] }) {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <SectionHeading>Skills</SectionHeading>
        <div className="space-y-8">
          {skills.map((group) => (
            <div key={group.group}>
              <h3 className="mb-3 text-lg font-semibold text-neutral-100">
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 px-4 py-1.5 text-sm text-neutral-400 transition-all duration-300 hover:border-accent-500 hover:text-accent-300 hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] hover:scale-105 cursor-default [&:hover_svg]:text-accent-400"
                  >
                    <SkillIcon name={item} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
