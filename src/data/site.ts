export const site = {
  name: "Cameron Gordon",
  role: "Hardware Engineer",
  url: "https://cameron.gordongames.com",
  title: "Cameron Gordon | Hardware Engineer",
  description:
    "Hardware engineer designing environmentally hardened, high-speed digital electronics for space and defense — FPGA integration, high-speed memory, and mission-critical PCB design.",
  email: "camerong888@gmail.com",
  location: "Boston, MA",
  linkedin: "https://www.linkedin.com/in/gordonca",
  github: "https://github.com/camerong888",
  resumePath: "/CameronGordon_Resume.pdf",
  /**
   * Cloudflare Web Analytics site token (cookie-less beacon). It ships in the
   * page source, so it is not a secret; Cloudflare only accepts beacons from
   * the hostname the site was created for. Leave empty to load no analytics.
   * Replaced Google Analytics (G-RNG371LV3P) in Sept 2026: on a subdomain its
   * cookie would have scoped to all of gordongames.com.
   */
  cfBeaconToken: "",
  /**
   * Formspree form ID (e.g. "mabcdefg"). Leave empty to fall back to a
   * mailto: link until the form is created at https://formspree.io.
   */
  formspreeId: "",
};

export const nav = [
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
  { label: "Resume", href: "/resume/" },
];
