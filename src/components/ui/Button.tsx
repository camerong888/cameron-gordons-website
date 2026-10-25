import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex h-11 items-center justify-center rounded-full px-6 text-body font-medium transition-[background-color,transform] duration-150 ease-out active:scale-[0.97]";
const variants = {
  primary: `${base} bg-btn text-btn-ink hover:bg-btn-hover`,
  secondary: `${base} border border-line text-ink hover:bg-hover`,
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
