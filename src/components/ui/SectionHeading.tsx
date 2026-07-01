export default function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="mb-10 sm:mb-14">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
        {"// "}
        {index} — {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {lede ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
