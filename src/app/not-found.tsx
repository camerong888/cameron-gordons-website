import MoreLink from "@/components/ui/MoreLink";

export default function NotFound() {
  return (
    <div className="wrap grid min-h-[75svh] content-center justify-items-center gap-4 pt-13 text-center">
      <p className="text-meta font-semibold text-ink-2">404</p>
      <h1 className="text-headline text-balance">This page doesn’t exist.</h1>
      <p className="text-lede text-pretty text-ink-2">
        It may have moved, or the link may be wrong.
      </p>
      <MoreLink href="/" className="mt-2">
        Go to the home page
      </MoreLink>
    </div>
  );
}
