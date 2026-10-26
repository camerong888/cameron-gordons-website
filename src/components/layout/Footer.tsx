import Link from "next/link";
import { site } from "@/data/site";

const link = "hit-area transition-colors hover:text-ink";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col gap-3 py-6 text-caption text-ink-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Cameron Gordon</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
          <a href={`mailto:${site.email}`} className={link}>
            Email
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            GitHub
          </a>
          <Link href="/resume/" className={link}>
            Resume
          </Link>
        </nav>
      </div>
    </footer>
  );
}
