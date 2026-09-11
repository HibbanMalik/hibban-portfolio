import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  Braces,
  Mail,
  MapPin,
  Radar,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const projects = [
  {
    index: "01",
    title: "CORTEX",
    subtitle: "AI-powered knowledge workspace",
    description:
      "A focused workspace that turns scattered information into clear, useful answers through retrieval, reasoning, and thoughtful interaction design.",
    tags: ["Next.js", "TypeScript", "AI / RAG"],
    href: "#",
    github: "#",
    icon: Bot,
    visual: "cortex",
  },
  {
    index: "02",
    title: "GeoWatch",
    subtitle: "Real-time geospatial intelligence",
    description:
      "An interactive monitoring experience for exploring location-based signals, live events, and patterns across a responsive world view.",
    tags: ["React", "Mapbox", "Data APIs"],
    href: "#",
    github: "#",
    icon: Radar,
    visual: "geo",
  },
  {
    index: "03",
    title: "Multi-Agent AI System",
    subtitle: "Autonomous collaborative agents",
    description:
      "A modular agent architecture where specialized AI workers plan, collaborate, and execute complex tasks with transparent orchestration.",
    tags: ["Python", "LLMs", "Agentic AI"],
    href: "#",
    github: "#",
    icon: Sparkles,
    visual: "agents",
  },
] as const;
const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    group: "Backend & Data",
    items: ["Node.js", "PostgreSQL", "REST APIs", "Supabase"],
  },
  { group: "AI & Tools", items: ["LLMs", "RAG", "AI Agents", "Git & GitHub"] },
] as const;

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden">
      <header className="nav-shell">
        <nav
          className="page-width flex h-[74px] items-center justify-between"
          aria-label="Main navigation"
        >
          <a href="#top" className="logo" aria-label="Hibban, home">
            H<span>.</span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#projects">
              Projects
            </a>
            <a className="nav-link" href="#skills">
              Skills
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </div>
          <a
            className="resume-button"
            href="/Hibban-Ullah-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Hibban Ullah's résumé"
          >
            Résumé <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>
      <section className="hero-section">
        <div className="hero-glow" aria-hidden="true" />
        <div className="page-width relative grid items-center gap-14 py-24 md:min-h-[calc(100vh-74px)] md:grid-cols-[1.15fr_.85fr] md:py-16">
          <div className="max-w-3xl">
            <p className="eyebrow">
              <span>01</span> SOFTWARE ENGINEER
            </p>
            <h1 className="hero-title">
              Hi, I’m Hibban.
              <br />I build <span className="accent-text">software</span>,<br />
              AI systems &amp; web experiences.
            </h1>
            <p className="hero-copy">
              Computer Science student turning ambitious ideas into fast,
              thoughtful digital products — from polished interfaces to
              intelligent systems.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="primary-button" href="#projects">
                View my work <ArrowDownRight size={17} />
              </a>
              <a
                className="secondary-button"
                href="https://github.com/HibbanMalik"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={17} /> GitHub <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
          <div className="terminal-wrap">
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            <div className="terminal-card">
              <div className="terminal-head">
                <div className="flex gap-2" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <span>hibban@portfolio ~</span>
                <Braces size={15} />
              </div>
              <div className="terminal-body">
                <p>
                  <b>❯</b> whoami
                </p>
                <p className="terminal-value">Hibban Ullah</p>
                <p className="mt-6">
                  <b>❯</b> cat focus.txt
                </p>
                <p className="terminal-value">
                  Full-stack development
                  <br />
                  Artificial intelligence
                  <br />
                  Useful, human software
                </p>
                <p className="mt-6">
                  <b>❯</b> status
                </p>
                <p className="status">
                  <span /> Currently building...
                </p>
                <p className="mt-6">
                  <b>❯</b> <span className="cursor" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <a href="#about" className="scroll-cue" aria-label="Scroll to About">
          <span>SCROLL</span>
          <ArrowDownRight size={16} />
        </a>
      </section>
      <section id="about" className="section page-width">
        <div className="section-label">
          <span>02</span>
          <p>ABOUT</p>
        </div>
        <div className="about-grid">
          <h2>
            Curious by nature.
            <br />
            <span>Builder by choice.</span>
          </h2>
          <div className="about-copy">
            <p>
              I’m a Computer Science student who enjoys working where
              engineering, design, and emerging technology meet.
            </p>
            <p>
              I care about the details that make software feel simple: clear
              systems, expressive interfaces, and products that solve a real
              problem. Right now, I’m especially interested in AI agents and
              full-stack web development.
            </p>
            <div className="location">
              <MapPin size={16} />
              <span>Based in San Francisco, California</span>
              <i />
              Open to opportunities
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="section page-width">
        <div className="section-label">
          <span>03</span>
          <p>FEATURED PROJECTS</p>
        </div>
        <div className="section-heading-row">
          <h2>
            Selected work<span>.</span>
          </h2>
          <p>
            A few projects that reflect how I think, build, and solve problems.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="project-card" key={project.title}>
                <div className={`project-visual ${project.visual}`}>
                  <span className="project-number">{project.index}</span>
                  <div className="visual-grid" aria-hidden="true" />
                  <Icon className="project-icon" strokeWidth={1.35} />
                </div>
                <div className="project-content">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3>{project.title}</h3>
                      <p className="project-subtitle">{project.subtitle}</p>
                    </div>
                    <a
                      href={project.href}
                      className="icon-link"
                      aria-label={`${project.title} live demo placeholder`}
                    >
                      <ArrowUpRight size={19} />
                    </a>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a href={project.github} className="project-source">
                    <FaGithub size={15} /> View source <ArrowUpRight size={13} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section id="skills" className="section page-width">
        <div className="section-label">
          <span>04</span>
          <p>SKILLS &amp; TOOLS</p>
        </div>
        <div className="skills-layout">
          <div>
            <h2>
              What I work with<span>.</span>
            </h2>
            <p className="skills-intro">
              A practical toolkit for designing, developing, and shipping modern
              software.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-group" key={skill.group}>
                <p>
                  <span>0{index + 1}</span>
                  {skill.group}
                </p>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="contact-section">
        <div className="contact-glow" aria-hidden="true" />
        <div className="page-width relative text-center">
          <p className="eyebrow justify-center">
            <span>05</span> LET&apos;S CONNECT
          </p>
          <h2>
            Have an idea worth
            <br />
            <span>building?</span>
          </h2>
          <p>
            I’m always open to interesting projects, thoughtful conversations,
            and new opportunities.
          </p>
          <a
            className="primary-button mx-auto mt-8 w-fit"
            href="mailto:Hibbanmalik6@gmail.com"
          >
            <Mail size={17} /> Say hello <ArrowUpRight size={16} />
          </a>
          <div className="socials">
            <a
              href="https://github.com/HibbanMalik"
              target="_blank"
              rel="noreferrer"
              aria-label="Hibban Malik on GitHub"
            >
              <FaGithub size={19} />
            </a>
            <a
              href="https://x.com/Hibban_malik"
              target="_blank"
              rel="noreferrer"
              aria-label="Hibban Malik on X"
            >
              <FaXTwitter size={18} />
            </a>
            <a
              href="mailto:Hibbanmalik6@gmail.com"
              aria-label="Email Hibban Malik"
            >
              <MdEmail size={21} />
            </a>
          </div>
        </div>
      </section>
      <footer className="page-width footer">
        <p>© 2026 Hibban Ullah</p>
        <p>Designed &amp; built with care.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
