import type { ReactNode } from "react";

/** The top of a detail page: context line, title, subtitle, summary. */
export default function PageHeader({
  meta,
  title,
  subtitle,
  lede,
}: {
  meta?: ReactNode;
  title: string;
  subtitle?: string;
  lede?: string;
}) {
  return (
    <header className="grid max-w-[53.75rem] gap-3 pb-8 pt-10 md:pb-12 md:pt-20">
      {meta ? <p className="text-small text-ink-2">{meta}</p> : null}
      <h1 className="text-display text-balance">{title}</h1>
      {subtitle ? (
        <p className="text-[clamp(1.3125rem,1.1rem+0.8vw,1.75rem)] font-semibold leading-[1.2] tracking-[-0.018em] text-balance text-ink-2">
          {subtitle}
        </p>
      ) : null}
      {lede ? (
        <p className="mt-1.5 text-lede text-pretty text-ink-2">{lede}</p>
      ) : null}
    </header>
  );
}
