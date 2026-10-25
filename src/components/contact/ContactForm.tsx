"use client";

import { useState } from "react";
import { site } from "@/data/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border border-line bg-tile px-4 py-3 text-body text-ink placeholder:text-ink-2";

/**
 * Posts to Formspree. The contact section renders it only once
 * site.formspreeId is set; until then the email link stands alone.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

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
    <form onSubmit={onSubmit} className="mt-10 grid w-full max-w-xl gap-4 text-left">
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-meta text-ink-2">Name</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="grid gap-1.5">
          <span className="text-meta text-ink-2">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </label>
      </div>
      <label className="grid gap-1.5">
        <span className="text-meta text-ink-2">Message</span>
        <textarea name="message" rows={5} required className={field} />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-11 items-center rounded-full bg-btn px-6 font-medium text-btn-ink transition-[background-color,transform] duration-150 ease-out hover:bg-btn-hover active:scale-[0.97] disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p aria-live="polite" className="text-meta [overflow-wrap:anywhere]">
          {status === "sent" && "Message sent. Thank you."}
          {status === "error" && (
            <>Something went wrong. Email me at {site.email}.</>
          )}
        </p>
      </div>
    </form>
  );
}
