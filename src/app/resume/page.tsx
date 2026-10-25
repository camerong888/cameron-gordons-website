import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import MoreLink from "@/components/ui/MoreLink";
import DetailShell from "@/components/case-study/DetailShell";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Cameron Gordon's resume — hardware engineer specializing in high-speed digital design for space and defense.",
};

export default function ResumePage() {
  return (
    <DetailShell crumbs={[{ label: "Home", href: "/" }, { label: "Résumé" }]}>
      <header className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6 pb-8 pt-10 md:pb-12 md:pt-20">
        <div className="grid gap-3">
          <h1 className="text-display">Résumé</h1>
          <p className="text-lede text-ink-2">
            One page · Experience, education, and technical skills
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
          <Button href={site.resumePath} download>
            Download PDF
          </Button>
          <MoreLink href={site.resumePath} external>
            Open in new tab
          </MoreLink>
        </div>
      </header>

      {/* Desktop and tablet: the PDF inline. */}
      <div className="hidden overflow-hidden rounded-[1.375rem] border border-line md:block">
        <iframe
          src={site.resumePath}
          title="Cameron Gordon's resume PDF"
          className="h-[85vh] w-full"
        />
      </div>

      {/* Phones: iOS Safari can't scroll an embedded PDF, so the file opens
          in the browser's own viewer instead. */}
      <a
        href={site.resumePath}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 rounded-[1.375rem] bg-bg-alt p-5 transition-transform duration-150 ease-out active:scale-[0.985] md:hidden"
      >
        <svg
          width="40"
          height="48"
          viewBox="0 0 40 48"
          fill="none"
          aria-hidden
          className="shrink-0 text-ink-2"
        >
          <path
            d="M6 1.5h19.5L38.5 14.5V44a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 44V4A2.5 2.5 0 0 1 6 1.5Z"
            fill="var(--tile)"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M25.5 1.5V12a2.5 2.5 0 0 0 2.5 2.5h10.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M10 24h20M10 30h20M10 36h13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <span className="grid min-w-0 gap-0.5">
          <span className="truncate font-semibold">
            CameronGordon_Resume.pdf
          </span>
          <span className="text-meta text-ink-2">
            Opens in your browser’s PDF viewer
          </span>
        </span>
        <span aria-hidden className="ml-auto text-xl text-ink-2">
          ›
        </span>
      </a>
    </DetailShell>
  );
}
