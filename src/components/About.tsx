import { SectionHeading } from "./SectionHeading";

export default function About({ about }: { about?: string }) {
  if (!about) return null;

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <SectionHeading>About</SectionHeading>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
          <img
            src="/me.png"
            alt="David Alsheuski"
            className="h-28 w-28 shrink-0 rounded-2xl object-cover"
          />
          <p className="text-2xl font-light leading-snug text-neutral-200 sm:text-3xl">
            {about}
          </p>
        </div>
      </div>
    </section>
  );
}
