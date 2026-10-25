import PcbHero from "@/components/hero/PcbHero";
import Highlights from "@/components/home/Highlights";
import ExperienceList from "@/components/home/ExperienceList";
import LeadershipCard from "@/components/home/LeadershipCard";
import ProjectCard, { FeaturedProject } from "@/components/projects/ProjectCard";
import Capabilities from "@/components/skills/Capabilities";
import CopyEmail from "@/components/contact/CopyEmail";
import ContactForm from "@/components/contact/ContactForm";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Picture from "@/components/ui/Picture";
import Reveal from "@/components/ui/Reveal";
import MoreLink from "@/components/ui/MoreLink";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function HomePage() {
  const [featured, ...moreProjects] = projects;

  return (
    <>
      <PcbHero />

      <Section alt labelledBy="highlights-title">
        <SectionHeading id="highlights-title" title="Highlights" />
        <Highlights />
      </Section>

      <Section id="experience" labelledBy="experience-title">
        <SectionHeading
          id="experience-title"
          title="Experience"
          lede="Seven years across space, defense, automotive, and medical hardware — from co-op projects shipping in production Teslas to mission-critical radar and spaceflight systems."
        />
        <ExperienceList />
      </Section>

      <Section id="projects" alt labelledBy="projects-title">
        <SectionHeading
          id="projects-title"
          title="Selected work"
          lede="Personal embedded devices and race-car systems — every board designed, laid out, brought up, and validated end to end."
        />
        <Reveal>
          <FeaturedProject project={featured} />
        </Reveal>
        <div className="mt-4.5 grid gap-4.5 sm:grid-cols-2">
          {moreProjects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 70} className="grid">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="leadership" labelledBy="leadership-title">
        <SectionHeading id="leadership-title" title="Leadership" />
        <Reveal>
          <LeadershipCard />
        </Reveal>
      </Section>

      <Section id="skills" alt labelledBy="skills-title">
        <SectionHeading
          id="skills-title"
          title="Capabilities"
          lede="Depth in high-speed digital and embedded hardware, with the firmware and validation skills to carry a board from schematic to qualified product."
        />
        <Reveal>
          <Capabilities />
        </Reveal>
      </Section>

      <Section id="about" labelledBy="about-title">
        <SectionHeading id="about-title" title="About" />
        <Reveal className="grid items-start gap-8 md:grid-cols-[15.5rem_1fr] md:gap-14">
          <Picture
            image={{ src: "headshot", alt: "Cameron Gordon" }}
            sizes="(min-width: 768px) 248px, 300px"
            className="w-full max-w-75 rounded-[1.375rem]"
          />
          <div className="grid max-w-[62ch] gap-4 text-ink-2">
            <p>
              <strong className="font-semibold text-ink">
                I’m a hardware engineer at Draper
              </strong>{" "}
              in Cambridge, MA, designing environmentally hardened, high-speed
              digital circuit boards for space and military systems — the kind
              of hardware that has to work the first time, every time, in
              environments where repair isn’t an option.
            </p>
            <p>
              I hold an M.S. in Electrical &amp; Computer Engineering (4.0 GPA)
              and a B.S. in Electrical Engineering (summa cum laude) from
              Northeastern University, where co-ops at Tesla, Redwire Space,
              Fresenius Medical Care, and Liberty Defense gave me 21 months of
              industry experience before graduating. At Raytheon I led
              receiver/exciter integration on a $2.2B radar program; today I
              integrate FPGAs and high-speed memory into boards built to
              survive orbit.
            </p>
            <p>
              Off the clock you’ll find me building satellite-connected
              gadgets, in the mountains stress-testing them, or mentoring the
              next generation of formula EV engineers.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section id="contact" alt labelledBy="contact-title">
        <div className="grid justify-items-center gap-4 text-center">
          <h2 id="contact-title" className="text-headline text-balance">
            Let’s build something
          </h2>
          <p className="max-w-[36em] text-lede text-pretty text-ink-2">
            Open to conversations about hardware engineering, interesting
            problems, and opportunities in aerospace and defense.
          </p>
          <CopyEmail email={site.email} />
          <div className="mt-2 flex flex-wrap justify-center gap-x-7 gap-y-2">
            <MoreLink href={site.linkedin} external>
              LinkedIn
            </MoreLink>
            <MoreLink href={site.github} external>
              GitHub
            </MoreLink>
            <MoreLink href="/resume/">Résumé</MoreLink>
          </div>
          {site.formspreeId ? <ContactForm /> : null}
        </div>
      </Section>
    </>
  );
}
