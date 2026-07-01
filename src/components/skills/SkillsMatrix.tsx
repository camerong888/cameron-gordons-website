import { skillDomains } from "@/data/skills";
import Reveal from "@/components/ui/Reveal";

function PadDots({ level }: { level: 1 | 2 | 3 }) {
  return (
    <span
      className="ml-auto flex gap-1"
      aria-label={`Proficiency ${level} of 3`}
      role="img"
    >
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          aria-hidden
          className={`h-1.5 w-1.5 rounded-full ${
            i <= level ? "bg-copper" : "bg-line"
          }`}
        />
      ))}
    </span>
  );
}

export default function SkillsMatrix() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skillDomains.map((domain, i) => (
        <Reveal key={domain.key} delay={i * 0.06}>
          <div className="h-full rounded-lg border border-line bg-surface p-5 sm:p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
              {domain.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {domain.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-3 text-sm text-ink"
                >
                  <span
                    aria-hidden
                    className="h-px w-3 shrink-0 bg-copper/60"
                  />
                  {skill.name}
                  <PadDots level={skill.level} />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
