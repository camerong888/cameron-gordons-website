import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Cameron Gordon. Designed & built with
          Next.js.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${site.email}`}
            className="font-mono text-xs text-muted transition-colors hover:text-signal"
          >
            Email
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted transition-colors hover:text-signal"
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted transition-colors hover:text-signal"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
