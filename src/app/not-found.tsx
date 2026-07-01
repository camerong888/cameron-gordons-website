import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-5">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
          {"// Error 404"}
        </p>
        <h1 className="mt-4 font-display text-5xl font-bold text-ink">
          Open circuit
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          This trace doesn&apos;t route anywhere — the page you&apos;re looking
          for has moved or never existed.
        </p>
        <div className="mt-8">
          <Button href="/">Back to home</Button>
        </div>
      </div>
    </div>
  );
}
