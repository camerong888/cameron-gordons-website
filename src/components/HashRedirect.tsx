"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { hashRedirects } from "@/data/redirects";

/**
 * Maps legacy HashRouter URLs (camerongordon.io/#/tesla) to their new
 * static routes. Hash fragments never reach the server, so this must
 * run on the client.
 */
export default function HashRedirect() {
  const router = useRouter();
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash.startsWith("#/")) return;
    const target = hashRedirects[hash.slice(1).replace(/\/$/, "")];
    if (target) router.replace(target);
  }, [router]);
  return null;
}
