import type { CV } from "@/content/types";
import HeroBackground from "./HeroBackground";
import XLogo from "./XLogo";
import CopyEmail from "./CopyEmail";

export default function Hero({ basics }: { basics: CV["basics"] }) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6"
    >
      <HeroBackground />

      <div className="relative max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-50 sm:text-5xl">
          {basics.name}
        </h1>
        <p className="mt-3 text-lg text-accent-400">{basics.title}</p>
        <p className="mt-6 text-base leading-relaxed text-neutral-400">
          {basics.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-neutral-500">
          {basics.location && <span>{basics.location}</span>}
          {basics.email && (
            <CopyEmail
              email={basics.email}
              className="transition-colors hover:text-neutral-300"
            />
          )}
          {basics.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-neutral-300"
            >
              {link.label === "X" ? (
                <XLogo className="h-3.5 w-3.5" />
              ) : (
                link.label
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
