import Link from "next/link";

export interface NavTarget {
  href: string;
  label: string;
  sublabel: string;
}

export default function PrevNextNav({
  prev,
  next,
}: {
  prev: NavTarget | null;
  next: NavTarget | null;
}) {
  return (
    <nav
      aria-label="More pages"
      className="grid gap-4 border-t border-line pt-8 sm:grid-cols-2"
    >
      {prev ? (
        <Link
          href={prev.href}
          className="group rounded-lg border border-line bg-surface p-5 transition-colors hover:border-copper/60"
        >
          <p className="font-mono text-xs text-muted">← Previous</p>
          <p className="mt-1 font-display font-semibold text-ink group-hover:text-copper">
            {prev.label}
          </p>
          <p className="mt-0.5 font-mono text-xs text-muted">{prev.sublabel}</p>
        </Link>
      ) : (
        <span aria-hidden />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group rounded-lg border border-line bg-surface p-5 text-right transition-colors hover:border-copper/60"
        >
          <p className="font-mono text-xs text-muted">Next →</p>
          <p className="mt-1 font-display font-semibold text-ink group-hover:text-copper">
            {next.label}
          </p>
          <p className="mt-0.5 font-mono text-xs text-muted">{next.sublabel}</p>
        </Link>
      ) : (
        <span aria-hidden />
      )}
    </nav>
  );
}
