"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/data/site";
import ThemeToggle from "./ThemeToggle";

/**
 * A translucent bar the page scrolls under: clear over the top of the page,
 * then blur and a hairline once content moves beneath it. On phones the
 * links move into a full-screen sheet.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the sheet is open: hold the page still, and let Escape close it.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-200 ${
          scrolled || open
            ? "border-line bg-nav backdrop-blur-xl backdrop-saturate-150"
            : "border-transparent"
        }`}
      >
        <div className="wrap flex h-13 items-center gap-3 md:gap-7">
          <Link
            href="/"
            onClick={close}
            className="hit-area mr-auto text-body font-semibold tracking-[-0.016em]"
          >
            Cameron Gordon
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hit-area text-meta opacity-80 transition-opacity hover:opacity-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/resume/"
            onClick={close}
            className="hit-area inline-flex h-8 items-center rounded-full bg-btn px-3.5 text-meta font-medium text-btn-ink transition-[background-color,transform] duration-150 ease-out hover:bg-btn-hover active:scale-[0.97]"
          >
            Resume
          </Link>
          <ThemeToggle className="-mr-2.5 hidden md:grid" />
          <button
            type="button"
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="-mr-2.5 grid size-11 place-items-center rounded-full md:hidden"
          >
            <span aria-hidden className="relative block h-3 w-[1.125rem]">
              <span
                className={`absolute inset-x-0 top-0 h-0.5 rounded-full bg-ink transition-transform duration-200 ease-out ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-ink transition-transform duration-200 ease-out ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Outside the header: its backdrop-filter would otherwise become the
          containing block for this fixed sheet. */}
      <nav
        id="menu"
        aria-label="Menu"
        inert={!open}
        className={`fixed inset-x-0 bottom-0 top-13 z-40 bg-bg transition-[opacity,visibility] duration-200 ease-out md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="wrap pt-3">
          {nav.map((item, i) => (
            <li
              key={item.href}
              className={`border-b border-line transition-[opacity,transform] duration-300 ease-out ${
                open ? "opacity-100" : "-translate-y-2 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${50 + i * 35}ms` : "0ms" }}
            >
              <Link
                href={item.href}
                onClick={close}
                className="flex min-h-15 items-center text-[1.75rem] font-semibold tracking-[-0.02em]"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="flex min-h-15 items-center justify-between">
            <span className="text-body text-ink-2">Appearance</span>
            <ThemeToggle className="-mr-2.5" />
          </li>
        </ul>
      </nav>
    </>
  );
}
