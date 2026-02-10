import type { CV } from "@/content/types";
import { SectionHeading } from "./SectionHeading";

export default function Experience({
  experience,
}: {
  experience: CV["experience"];
}) {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <SectionHeading>Experience</SectionHeading>
        <div className="space-y-12">
          {experience.map((job, i) => (
            <div key={i}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="font-medium text-neutral-100">{job.role}</h3>
                  <p className="text-sm text-neutral-500">
                    {job.company}
                    {job.location && `, ${job.location}`}
                  </p>
                </div>
                <span className="text-sm text-neutral-600">
                  {job.start} — {job.end ?? "Present"}
                </span>
              </div>

              {job.bullets.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {job.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="text-sm leading-relaxed text-neutral-400"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {job.stack && job.stack.length > 0 && (
                <p className="mt-3 text-xs text-neutral-600">
                  {job.stack.join(" · ")}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
