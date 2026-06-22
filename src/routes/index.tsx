import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  ArrowUpRight,
  GraduationCap,
  Briefcase,
  Award,
  Code2,
  Sparkles,
  User,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kamalee R — Software & Web Developer Portfolio" },
      { name: "description", content: "Portfolio of Kamalee R — CSE student & software/web developer. Projects, experience, skills and contact." },
      { property: "og:title", content: "Kamalee R — Portfolio" },
      { property: "og:description", content: "CSE student & software / web developer. Projects, experience, and skills." },
    ],
  }),
  component: Portfolio,
});

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

const skills = {
  Languages: ["Java", "JavaScript", "Python", "C", "HTML", "CSS", "PHP"],
  "Frameworks & Tools": ["React", "Node.js", "GitHub", "VS Code", "Figma", "Canva", "WAMP"],
  Databases: ["MySQL", "SQL", "MongoDB"],
};

const experience = [
  {
    company: "KGE Technologies",
    period: "Jun – Jul 2025",
    role: "Web Developer Intern",
    points: [
      "Developed a functional replica of an existing website using modern frontend technologies.",
      "Contributed to daily development tasks and real-time team workflows.",
    ],
  },
  {
    company: "IGCAR Kalpakkam",
    period: "Dec 2024",
    role: "Full Stack Developer Intern",
    points: [
      "Built a role-based quiz platform using HTML, CSS, JavaScript, PHP, and MySQL.",
      "Implemented secure authentication and dynamic question handling.",
      "Optimized database queries and refined UI for a smoother user experience.",
    ],
  },
  {
    company: "CodSoft",
    period: "Aug – Sep 2024",
    role: "Python Developer Intern",
    points: [
      "Completed hands-on Python projects covering automation and problem solving.",
      "Strengthened core programming and debugging skills through real-world tasks.",
    ],
  },
];

const projects = [
  {
    num: "01",
    title: "AI Diet Planner",
    desc: "A personalized diet recommendation system that adapts to user goals and dietary preferences.",
    tags: ["Python", "AI", "UI"],
  },
  {
    num: "02",
    title: "Women Safety App",
    desc: "Emergency response application with SOS tracking and instant SMS alerts to trusted contacts during distress situations.",
    tags: ["Web", "IoT", "GPS"],
  },
  {
    num: "03",
    title: "Role-Based Quiz Platform",
    desc: "Secure quiz platform with role-based access, dynamic question handling and optimized MySQL queries.",
    tags: ["PHP", "MySQL", "JavaScript"],
  },
];

const certs = [
  "Meta Front-End Developer Certification",
  "AWS Cloud Support Associate",
  "MongoDB Certification",
  "NPTEL: Data Structures using Java",
  "NPTEL: Python for Data Science",
  "NPTEL: Design Thinking",
  "Cisco: Networking & Web Technology",
  "IEEE Project Expo — Winner",
];

const education = [
  { school: "St Joseph's Institute of Technology", degree: "BE Computer Science Engineering", period: "2023 – 2027", score: "GPA 8.5 / 10" },
  { school: "Atomic Energy Central School, Anupuram", degree: "Higher Secondary (12th)", period: "2023", score: "83.2%" },
  { school: "Atomic Energy Central School 1, Kalpakkam", degree: "Secondary (10th)", period: "2021", score: "88.6%" },
];

const stats = [
  { value: "3+", label: "Internships" },
  { value: "8+", label: "Certificates" },
  { value: "8.5", label: "GPA" },
  { value: "1x", label: "IEEE Winner" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Portfolio · 2025
          </a>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="font-sans hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-accent sm:inline-flex"
          >
            Get in touch
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-32 md:pt-44">
          <div className="max-w-4xl">
            <p className="font-display text-5xl font-medium leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
              Kamalee R
            </p>
            <h1 className="mt-4 font-display text-4xl font-normal leading-[1.15] tracking-tight md:text-6xl lg:text-7xl">
              <span className="italic text-gold">Building</span> for the web,
              <br />
              one idea at a time.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Computer Science Engineering student with experience in software and web development using Java, JavaScript, React, Node.js, MySQL, and MongoDB. Strong foundation in data structures, problem-solving, and database management.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-gold)]"
              >
                View Projects <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/kamalee-23"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:bg-accent"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-background p-6 text-center md:p-8">
                <p className="font-display text-3xl font-semibold text-gold md:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" num="01" eyebrow="About" icon={<User className="h-4 w-4" />}>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-normal leading-tight md:text-4xl lg:text-5xl">
              A quick intro.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a Computer Science Engineering student at St Joseph's Institute of Technology, drawn to clean code, thoughtful interfaces and problems worth solving. I enjoy taking ideas from a blank file to a working product — frontend, backend or somewhere in between.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                Strong foundation in data structures, algorithms and database management.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                Hands-on experience with full-stack web development and real-world internships.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                Always learning — currently exploring React, Node.js and modern JavaScript ecosystems.
              </li>
            </ul>
            <div className="grid gap-3 pt-4 text-sm text-muted-foreground md:grid-cols-2">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Chennai, India</span>
              <a href="mailto:rrkamalee@gmail.com" className="inline-flex items-center gap-2 hover:text-foreground"><Mail className="h-4 w-4 text-gold" /> rrkamalee@gmail.com</a>
              <a href="tel:+919498027409" className="inline-flex items-center gap-2 hover:text-foreground"><Phone className="h-4 w-4 text-gold" /> +91 94980 27409</a>
              <a href="https://www.linkedin.com/in/kamaleer231005/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground"><Linkedin className="h-4 w-4 text-gold" /> linkedin.com/in/kamaleer231005</a>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" num="02" eyebrow="Experience" icon={<Briefcase className="h-4 w-4" />}>
        <div className="grid gap-6">
          {experience.map((e, i) => (
            <div
              key={e.company}
              className="group grid gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:bg-accent/50 md:grid-cols-[1fr_2fr] md:items-start md:gap-8"
            >
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{e.period}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground md:text-xl">
                  {e.role} — <span className="text-gold">{e.company}</span>
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground md:text-base">
                  {e.points.map((p, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" num="03" eyebrow="Projects" icon={<Code2 className="h-4 w-4" />}>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href="https://github.com/kamalee-23"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-gold/30 hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-gold">/{p.num}</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-gold" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" num="04" eyebrow="Skills & Tools" icon={<Sparkles className="h-4 w-4" />}>
        <div className="grid gap-4 md:grid-cols-3">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground">{cat}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="rounded-md border border-border bg-background px-2.5 py-1 text-sm text-foreground transition-colors hover:border-gold/30 hover:text-gold">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" num="05" eyebrow="Education" icon={<GraduationCap className="h-4 w-4" />}>
        <div className="space-y-4">
          {education.map((ed) => (
            <div key={ed.school} className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-5 md:flex-row md:items-center md:justify-between md:gap-6">
              <div>
                <h4 className="font-display text-lg font-semibold md:text-xl">{ed.degree}</h4>
                <p className="text-sm text-muted-foreground">{ed.school}</p>
              </div>
              <div className="flex items-center gap-4 md:text-right">
                <span className="text-xs uppercase tracking-wider text-muted-foreground md:hidden">{ed.period}</span>
                <span className="font-mono text-sm text-gold">{ed.score}</span>
                <span className="hidden text-xs uppercase tracking-wider text-muted-foreground md:inline">{ed.period}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certs */}
        <div className="mt-12">
          <div className="mb-6 flex items-center gap-3">
            <Award className="h-5 w-5 text-gold" />
            <h3 className="font-display text-2xl font-normal">Certificates & Achievements</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {certs.map((c) => (
              <div key={c} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="text-sm text-muted-foreground">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact CTA */}
      <section id="contact" className="mx-auto max-w-6xl px-6 pb-6 pt-20">
        <div
          className="relative overflow-hidden rounded-3xl border border-border p-8 text-center md:p-16"
          style={{ background: "var(--gradient-card)" }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Let's connect</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-normal leading-tight md:text-5xl lg:text-6xl">
            Have a project, or just want to <span className="italic text-gold">say hi?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground md:text-base">
            I'm always open to internships, collaborations and conversations about building great software.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:rrkamalee@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-gold)]"
            >
              <Mail className="h-4 w-4" /> rrkamalee@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/kamaleer231005/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium transition-colors hover:bg-accent"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/kamalee-23"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium transition-colors hover:bg-accent"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Kamalee R. Crafted with care.</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/kamalee-23" target="_blank" rel="noreferrer" className="hover:text-foreground"><Github className="h-4 w-4" /></a>
            <a href="https://www.linkedin.com/in/kamaleer231005/" target="_blank" rel="noreferrer" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
            <a href="mailto:rrkamalee@gmail.com" className="hover:text-foreground"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  num,
  eyebrow,
  icon,
  children,
}: {
  id: string;
  num: string;
  eyebrow: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <div className="mb-10 flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-gold">.{num}</span>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
            {icon}{eyebrow}
          </span>
        </div>
      </div>
      {children}
    </section>
  );
}
