import type { ReactNode } from "react";

export default function Badge({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "copper" | "signal";
}) {
  const tones = {
    default: "border-line bg-surface-2 text-muted",
    copper: "border-copper/30 bg-copper-soft text-copper",
    signal: "border-signal/30 bg-signal-soft text-signal",
  } as const;
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[11px] leading-5 ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
