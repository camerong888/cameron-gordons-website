import Link from "next/link";
import PcbHero from "@/components/hero/PcbHero";
import CareerTimeline from "@/components/timeline/CareerTimeline";
import ProjectCard from "@/components/projects/ProjectCard";
import SkillsMatrix from "@/components/skills/SkillsMatrix";
import ContactForm from "@/components/contact/ContactForm";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Picture from "@/components/ui/Picture";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { timelineEvents } from "@/data/timeline";
import { projects } from "@/data/projects";
import { ner } from "@/data/extracurriculars";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <PcbHero />

      <Section id="experience">
        <SectionHeading
          index="01"
          eyebrow="Experience"
          title="Career timeline"
          lede="Seven years across space, defense, automotive, and medical hardware — from co-op projects shipping in production Teslas to mission-critical radar and spaceflight systems."
        />
        <CareerTimeline events={timelineEvents} />
      </Section>

      <Section id="projects">
        <SectionHeading
          index="02"
          eyebrow="Projects"
          title="Selected work"
          lede="Personal embedded devices and race-car systems — every board designed, laid out, brought up, and validated end to end."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section id="skills">
        <SectionHeading
          index="03"
          eyebrow="Skills"
          title="Tools of the trade"
          lede="Depth in high-speed digital and embedded hardware, with the firmware and validation skills to carry a board from schematic to qualified product."
        />
        <SkillsMatrix />
      </Section>

      <Section id="leadership">
        <SectionHeading
          index="04"
          eyebrow="Leadership"
          title="Beyond the bench"
        />
        <Reveal>
          <Link
            href="/extracurriculars/ner/"
            className="group grid overflow-hidden rounded-lg border border-line bg-surface transition-colors hover:border-copper/60 md:grid-cols-2"
          >
            <div className="aspect-video overflow-hidden border-b border-line bg-surface-2 md:aspect-auto md:border-b-0 md:border-r">
              <Picture
                image={{
                  src: "ner/car",
                  alt: "Northeastern Electric Racing formula-style electric vehicle",
                }}
                sizes="(max-width: 768px) 100vw, 560px"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <div className="p-6 sm:p-8">
              <p className="font-mono text-xs text-signal">
                {ner.start} – {ner.end}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                {ner.role} · {ner.company}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {ner.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {ner.skills.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
              <p className="mt-5 font-mono text-xs text-signal opacity-80 group-hover:opacity-100">
                Read more →
              </p>
            </div>
          </Link>
        </Reveal>
      </Section>

      <Section id="about">
        <SectionHeading index="05" eyebrow="About" title="Behind the boards" />
        <div className="grid items-start gap-10 md:grid-cols-[280px_1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-lg border border-line">
              <Picture
                image={{ src: "headshot", alt: "Cameron Gordon" }}
                sizes="280px"
                className="w-full"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                I&apos;m a hardware engineer at{" "}
                <span className="text-ink">Draper</span> in Cambridge, MA,
                designing environmentally hardened, high-speed digital circuit
                boards for space and military systems — the kind of hardware
                that has to work the first time, every time, in environments
                where repair isn&apos;t an option.
              </p>
              <p>
                I hold an M.S. in Electrical &amp; Computer Engineering (4.0
                GPA) and a B.S. in Electrical Engineering (summa cum laude)
                from Northeastern University, where co-ops at Tesla, Redwire
                Space, Fresenius Medical Care, and Liberty Defense gave me 21
                months of industry experience before graduating. At Raytheon I
                led receiver/exciter integration on a $2.2B radar program;
                today I integrate FPGAs and high-speed memory into boards
                built to survive orbit.
              </p>
              <p>
                Off the clock you&apos;ll find me building satellite-connected
                gadgets, in the mountains stress-testing them, or mentoring
                the next generation of formula EV engineers.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="/resume/" variant="outline">
                  View resume
                </Button>
                <Button href={site.github} variant="outline" external>
                  GitHub
                </Button>
                <Button href={site.linkedin} variant="outline" external>
                  LinkedIn
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="contact">
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title="Let's build something"
          lede="Open to conversations about hardware engineering, interesting problems, and opportunities in aerospace and defense."
        />
        <div className="grid gap-8 md:grid-cols-[1fr_280px]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-3">
              {[
                { label: "Email", value: site.email, href: `mailto:${site.email}` },
                { label: "LinkedIn", value: "in/gordonca", href: site.linkedin },
                { label: "GitHub", value: "camerong888", href: site.github },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center justify-between rounded-lg border border-line bg-surface px-5 py-4 transition-colors hover:border-signal"
                >
                  <span className="font-mono text-xs text-muted">
                    {item.label}
                  </span>
                  <span className="font-mono text-[13px] text-ink">
                    {item.value}
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
