import type { ReactNode } from "react";

/** A full-width band of the page. `alt` gives it the second ground color. */
export default function Section({
  id,
  alt = false,
  labelledBy,
  children,
  className = "",
}: {
  id?: string;
  alt?: boolean;
  labelledBy?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`section-y ${alt ? "bg-bg-alt" : ""} ${className}`}
    >
      <div className="wrap">{children}</div>
    </section>
  );
}
