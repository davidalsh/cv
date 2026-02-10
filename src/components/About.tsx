import { SectionHeading } from "./SectionHeading";

export default function About({ summary }: { summary?: string }) {
  if (!summary) return null;

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <SectionHeading>About</SectionHeading>
        <p className="text-2xl font-light leading-snug text-neutral-200 sm:text-3xl">
          {summary}
        </p>
      </div>
    </section>
  );
}
