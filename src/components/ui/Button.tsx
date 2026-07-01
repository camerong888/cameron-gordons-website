import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 font-mono text-sm font-medium transition-colors";
const variants = {
  primary: `${base} bg-copper text-[#0a0f14] hover:bg-copper/85`,
  outline: `${base} border border-line text-ink hover:border-signal hover:text-signal`,
} as const;

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  external?: boolean;
  download?: boolean;
}) {
  if (external || download) {
    return (
      <a
        href={href}
        className={variants[variant]}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: true } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={variants[variant]}>
      {children}
    </Link>
  );
}
