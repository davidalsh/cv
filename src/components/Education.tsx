import type { CV } from "@/content/types";
import { SectionHeading } from "./SectionHeading";

export default function Education({
  education,
}: {
  education: CV["education"];
}) {
  if (education.length === 0) return null;

  return (
    <section id="education" className="px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <SectionHeading>Education</SectionHeading>
        <div className="space-y-6">
          {education.map((edu, i) => (
            <div key={i}>
              <h3 className="font-medium text-neutral-100">{edu.school}</h3>
              {edu.field && (
                <p className="text-sm text-neutral-400">{edu.field}</p>
              )}
              {edu.degree && (
                <p className="text-sm text-neutral-500">{edu.degree}</p>
              )}
              {edu.end && (
                <p className="text-sm text-neutral-600">{edu.end}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
