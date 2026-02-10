import type { CV } from "@/content/types";
import XLogo from "./XLogo";
import CopyEmail from "./CopyEmail";

export default function Contact({ basics }: { basics: CV["basics"] }) {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-500">
          Contact
        </h2>
        <p className="mt-8 text-sm text-neutral-400">
          Interested in working together? Reach out.
        </p>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {basics.email && (
            <CopyEmail
              email={basics.email}
              className="text-neutral-300 transition-colors hover:text-accent-400"
            />
          )}
          {basics.phone && (
            <a
              href={`tel:${basics.phone.replace(/\s/g, "")}`}
              className="text-neutral-300 transition-colors hover:text-accent-400"
            >
              {basics.phone}
            </a>
          )}
          {basics.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-neutral-300 transition-colors hover:text-accent-400"
            >
              {link.label === "X" ? (
                <XLogo className="h-3.5 w-3.5" />
              ) : (
                link.label
              )}
            </a>
          ))}
        </div>

        <div className="mt-20 border-t border-neutral-900 pt-6 text-xs text-neutral-700">
          &copy; {new Date().getFullYear()} {basics.name}
        </div>
      </div>
    </section>
  );
}
