import Link from "next/link";
import type { ReactNode } from "react";

/**
 * A text link in the accent color, Apple-style: a chevron when it stays on
 * this site, an arrow when it opens somewhere else.
 */
export default function MoreLink({
  href,
  children,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  const cls = `group hit-area inline-flex items-baseline gap-1 text-accent ${className}`;
  const content = (
    <>
      <span className="underline-offset-[0.18em] group-hover:underline">
        {children}
      </span>
      <span aria-hidden>{external ? "↗" : "›"}</span>
    </>
  );
  if (!href.startsWith("/")) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
