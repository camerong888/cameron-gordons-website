"use client";

import { useState } from "react";
import { site } from "@/data/site";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-md border border-line bg-surface-2 px-4 py-3 text-base text-ink placeholder:text-muted/70 focus:border-signal focus:outline-none";

/**
 * Posts to Formspree when site.formspreeId is set; otherwise falls back
 * to a mailto: link so the site works before the form is provisioned.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  if (!site.formspreeId) {
    return (
      <div className="rounded-lg border border-line bg-surface p-6 sm:p-8">
        <p className="text-sm leading-relaxed text-muted">
          The fastest way to reach me is email — I read everything.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-4 inline-flex items-center gap-2 rounded-md bg-copper px-5 py-2.5 font-mono text-sm font-medium text-[#0a0f14] transition-colors hover:bg-copper/85"
        >
          {site.email}
        </a>
      </div>
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_gotcha")) return; // honeypot
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-lg border border-line bg-surface p-6 sm:p-8"
    >
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block font-mono text-xs text-muted">
            Name
          </span>
          <input name="name" required className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block font-mono text-xs text-muted">
            Email
          </span>
          <input name="email" type="email" required className={inputClass} />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block font-mono text-xs text-muted">
          Message
        </span>
        <textarea name="message" rows={5} required className={inputClass} />
      </label>
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-md bg-copper px-6 py-2.5 font-mono text-sm font-medium text-[#0a0f14] transition-colors hover:bg-copper/85 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p aria-live="polite" className="font-mono text-xs">
          {status === "sent" && (
            <span className="text-signal">Message sent — thank you.</span>
          )}
          {status === "error" && (
            <span className="text-copper">
              Something went wrong — email me at {site.email}.
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
