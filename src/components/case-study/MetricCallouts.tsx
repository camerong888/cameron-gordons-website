import type { Metric } from "@/data/types";

/** Results as big numbers, each with its label underneath. */
export default function MetricCallouts({ metrics }: { metrics: Metric[] }) {
  if (!metrics.length) return null;
  return (
    <dl className="grid gap-8 py-10 min-[30rem]:grid-cols-2 md:grid-cols-3 md:py-14">
      {metrics.map((m) => (
        <div key={m.label} className="flex flex-col-reverse gap-1">
          <dt className="text-ink-2">{m.label}</dt>
          <dd className="text-[clamp(2.5rem,2rem+1.6vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.035em] tabular-nums">
            {m.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
