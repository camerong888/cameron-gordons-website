import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import DetailShell from "@/components/case-study/DetailShell";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Cameron Gordon's resume — hardware engineer specializing in high-speed digital design for space and defense.",
};

export default function ResumePage() {
  return (
    <DetailShell backHref="/" backLabel="Home">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
        {"// Resume"}
      </p>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Cameron Gordon — Hardware Engineer
        </h1>
        <div className="flex gap-3">
          <Button href={site.resumePath} download>
            Download PDF
          </Button>
          <Button href={site.resumePath} variant="outline" external>
            Open in new tab
          </Button>
        </div>
      </div>

      {/* Desktop/tablet: inline viewer. */}
      <div className="mt-8 hidden overflow-hidden rounded-lg border border-line md:block">
        <iframe
          src={site.resumePath}
          title="Cameron Gordon's resume PDF"
          className="h-[85vh] w-full"
        />
      </div>

      {/* Mobile: iOS Safari can't scroll embedded PDFs — offer actions instead. */}
      <div className="mt-8 rounded-lg border border-line bg-surface p-6 text-center md:hidden">
        <p className="font-mono text-4xl" aria-hidden>
          📄
        </p>
        <h2 className="mt-3 font-display text-lg font-semibold text-ink">
          CameronGordon_Resume.pdf
        </h2>
        <p className="mt-2 text-sm text-muted">
          One page · Experience, education, and technical skills
        </p>
        <div className="mt-5 flex flex-col gap-3">
          <Button href={site.resumePath} download>
            Download PDF
          </Button>
          <Button href={site.resumePath} variant="outline" external>
            Open in browser
          </Button>
        </div>
      </div>
    </DetailShell>
  );
}
