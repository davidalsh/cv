import type { CV } from "@/content/types";
import { SectionHeading } from "./SectionHeading";

export default function Extras({ extras }: { extras?: CV["extras"] }) {
  if (!extras) return null;
  const { languages } = extras;
  if (!languages?.length) return null;

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <SectionHeading>Languages</SectionHeading>
        <p className="text-sm text-neutral-400">{languages.join(" · ")}</p>
      </div>
    </section>
  );
}
