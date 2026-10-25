import Link from "next/link";
import { ner } from "@/data/extracurriculars";
import Picture from "@/components/ui/Picture";

export default function LeadershipCard() {
  return (
    <Link
      href="/extracurriculars/ner/"
      className="group grid overflow-hidden rounded-[1.625rem] bg-bg-alt transition-transform duration-150 ease-out active:scale-[0.99] md:grid-cols-[1fr_1.1fr]"
    >
      {ner.heroImage ? (
        <div className="relative aspect-[3/2] overflow-hidden md:order-2 md:aspect-auto md:min-h-80">
          <Picture
            image={ner.heroImage}
            sizes="(min-width: 768px) 560px, 100vw"
            className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
      ) : null}
      <div className="grid content-center gap-3 p-7 md:p-14">
        <p className="text-meta text-ink-2">
          {ner.start} – {ner.end} · {ner.location}
        </p>
        <h3 className="text-title">{ner.company}</h3>
        <p>{ner.role}</p>
        <p className="text-ink-2">{ner.summary}</p>
        <span className="mt-1 text-accent">More about the team ›</span>
      </div>
    </Link>
  );
}
