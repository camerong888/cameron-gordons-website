import type { Metric } from "@/data/types";

export default function MetricCallouts({ metrics }: { metrics: Metric[] }) {
  if (!metrics.length) return null;
  return (
    <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {metrics.map((m) => (
        <div
          key={m.label}
          className="rounded-lg border border-line bg-surface p-4 text-center sm:p-5"
        >
          <dd className="font-mono text-2xl font-bold text-copper sm:text-3xl">
            {m.value}
          </dd>
          <dt className="mt-1 text-xs text-muted">{m.label}</dt>
        </div>
      ))}
    </dl>
  );
}
