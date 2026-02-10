import { useEffect, useRef, useState } from "react";
import type { CV } from "@/content/types";
import { SectionHeading } from "./SectionHeading";
import { GiFlexibleLamp } from "react-icons/gi";

export default function Experience({
  experience,
}: {
  experience: CV["experience"];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightOn, setLightOn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setLightOn(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="px-6 py-20">
      <div className="relative mx-auto max-w-2xl">
        <div className="flex items-end justify-between">
          <SectionHeading>Experience</SectionHeading>
          <div className="relative mb-8">
            <GiFlexibleLamp className="-scale-x-100 text-neutral-700 opacity-40 size-10 sm:size-[72px]" />
            {/* Yellow bulb glow at lamp shade opening — half circle */}
            <div
              className={`absolute  ${isMobile ? "-left-0.5 top-2.5" : "left-1 top-5"} h-2 w-4 rotate-45 rounded-b-full bg-amber-300/60 blur-[3px] transition-opacity duration-300 ${lightOn ? "opacity-100" : "opacity-0"}`}
            />
            {/* Light blobs — warm yellow, spreading down-left */}
            <div
              className={`absolute -top-4 -left-44 h-[300px] w-[250px] rounded-full bg-amber-400/5 blur-3xl transition-opacity duration-400 ${lightOn ? "opacity-100" : "opacity-0"}`}
            />
            <div
              className={`absolute top-4 -left-56 h-[220px] w-[200px] rounded-full bg-yellow-300/[0.03] blur-3xl transition-opacity duration-400 delay-75 ${lightOn ? "opacity-100" : "opacity-0"}`}
            />
            <div
              className={`absolute -top-8 -left-32 h-[180px] w-[160px] rounded-full bg-amber-300/[0.04] blur-2xl transition-opacity duration-400 delay-150 ${lightOn ? "opacity-100" : "opacity-0"}`}
            />
          </div>
        </div>
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
