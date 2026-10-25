export default function SectionHeading({
  id,
  title,
  lede,
}: {
  /** Pairs with the section's aria-labelledby */
  id: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="mb-9 grid max-w-3xl gap-3.5 md:mb-14">
      <h2 id={id} className="text-headline text-balance">
        {title}
      </h2>
      {lede ? <p className="text-lede text-pretty text-ink-2">{lede}</p> : null}
    </div>
  );
}
