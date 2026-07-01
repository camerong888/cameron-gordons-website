import Link from "next/link";
import type { ReactNode } from "react";

/** Shared page chrome for all detail pages (projects, experience, NER). */
export default function DetailShell({
  backHref,
  backLabel,
  children,
}: {
  backHref: string;
  backLabel: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8">
      <Link
        href={backHref}
        className="font-mono text-xs text-muted transition-colors hover:text-signal"
      >
        ← {backLabel}
      </Link>
      <div className="mt-6">{children}</div>
    </div>
  );
}
