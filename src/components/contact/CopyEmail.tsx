"use client";

import { useState } from "react";

/** The address as a large mailto link, with a button that copies it. */
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const [user, domain] = email.split("@");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked: the address stays on screen to select by hand.
    }
  }

  return (
    <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
      {/* Breaks after the @ on the narrowest phones instead of overflowing. */}
      <a
        href={`mailto:${email}`}
        className="hit-area inline-block text-[clamp(1.375rem,1rem+1.5vw,2.125rem)] font-semibold tracking-[-0.022em] text-accent underline-offset-[0.15em] [overflow-wrap:anywhere] hover:underline"
      >
        {user}@<wbr />
        {domain}
      </a>
      <button
        type="button"
        onClick={copy}
        className="hit-area h-8 rounded-full border border-line px-3.5 text-meta font-medium transition-[background-color,transform] duration-150 ease-out hover:bg-hover active:scale-[0.97]"
      >
        {copied ? "Copied" : "Copy"}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? "Email address copied" : ""}
      </span>
    </div>
  );
}
