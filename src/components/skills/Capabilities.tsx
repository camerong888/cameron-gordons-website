import { skillDomains } from "@/data/skills";

/** What I work with, grouped by discipline. No self-ratings: the
    experience pages carry the depth. */
export default function Capabilities() {
  return (
    <div className="grid gap-x-6 gap-y-10 min-[30rem]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {/* Each group spans a heading row and a list row of the parent grid,
          so a heading that wraps keeps every rule in its row level. */}
      {skillDomains.map((domain) => (
        <div key={domain.key} className="row-span-2 grid grid-rows-subgrid gap-y-3">
          <h3 className="self-end border-b border-line pb-2.5 font-semibold">
            {domain.title}
          </h3>
          <ul className="grid gap-2 text-small text-ink-2">
            {domain.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
