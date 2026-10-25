import Link from "next/link";

export interface NavTarget {
  href: string;
  label: string;
  sublabel: string;
}

const item =
  "-m-3 grid content-start gap-0.5 rounded-2xl p-3 transition-colors hover:bg-hover";

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
      className="mt-4 grid grid-cols-2 gap-8 border-t border-line pt-8"
    >
      {prev ? (
        <Link href={prev.href} className={item}>
          <span className="text-meta text-accent">‹ Previous</span>
          <span className="text-title">{prev.label}</span>
          <span className="text-meta text-ink-2">{prev.sublabel}</span>
        </Link>
      ) : (
        <span aria-hidden />
      )}
      {next ? (
        <Link href={next.href} className={`${item} text-right`}>
          <span className="text-meta text-accent">Next ›</span>
          <span className="text-title">{next.label}</span>
          <span className="text-meta text-ink-2">{next.sublabel}</span>
        </Link>
      ) : (
        <span aria-hidden />
      )}
    </nav>
  );
}
