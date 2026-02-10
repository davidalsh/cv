export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 text-xs font-medium uppercase tracking-widest text-neutral-500">
      {children}
    </h2>
  );
}
