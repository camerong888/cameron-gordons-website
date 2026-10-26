import Link from "next/link";
import type { ReactNode } from "react";

export interface Crumb {
  label: string;
  /** Omit on the current page */
  href?: string;
}

/**
 * Shared chrome for every detail page (projects, experience, NER, resume):
 * a breadcrumb bar under the header, then the page in the content column.
 */
export default function DetailShell({
  crumbs,
  children,
}: {
  crumbs: Crumb[];
  children: ReactNode;
}) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="border-b border-line pt-13">
        <ol className="wrap flex h-11 items-center gap-2 text-meta text-ink-2">
          {crumbs.map((crumb, i) => (
            <li key={crumb.label} className="flex min-w-0 items-center gap-2">
              {i > 0 ? <span aria-hidden>›</span> : null}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hit-area whitespace-nowrap text-accent hover:underline"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span aria-current="page" className="truncate">
                  {crumb.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <div className="wrap pb-16 md:pb-24">{children}</div>
    </>
  );
}
