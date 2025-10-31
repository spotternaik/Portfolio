import { Link } from "react-router-dom";
import AvatarCircle from "@/components/AvatarCircle";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ABOUT, HOBBIES, NAME, PROJECTS, ROLE, PROFILE_IMAGE } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";
import HobbyCard from "@/components/HobbyCard";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 py-16 md:py-24">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
        <div className="mt-6 md:mt-8">{children}</div>
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        {/* Home */}
        <section id="home" className="relative grid place-items-center py-24 md:py-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_-20%,rgba(129,140,248,0.15),transparent_60%)]" />
          <div className="container relative grid place-items-center text-center">
            <AvatarCircle name={NAME} className="mx-auto" />
            <h1 className="mt-8 text-3xl md:text-5xl font-extrabold tracking-tight">
              {NAME}
            </h1>
            <p className="mt-3 text-sm md:text-base text-muted-foreground">{ROLE}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link to="#projects">
                <Button className="gap-2">
                  View Projects <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="#about">
                <Button variant="outline">About Me</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Me */}
        <Section id="about" title="About Me">
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {ABOUT}
          </p>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} project={p} />)
            )}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Note: Provide GitHub URLs to attach them to the project cards.
          </p>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience">
          <div className="space-y-6">
            <ExperienceItem
              role="Tech Consulting Intern"
              company="KPMG"
              period="Jan 2025 – Jul 2025"
              details="Completed Java full‑stack training and contributed to client projects. Learned Java, Angular, SQL, TypeScript, Git, and GitHub."
            />
            <ExperienceItem
              role="Analyst"
              company="KPMG"
              period="Aug 2025 – Present"
              details="Currently working on an Agentic AI solution using the Google ADK Framework."
            />
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education">
          <div className="grid gap-6 md:grid-cols-2">
            <EducationCard
              school="University Of Visvesvaraya College Of Engineering"
              degree="B.Tech in Artificial Intelligence and Machine Learning"
              meta="CGPA 8.75"
              period="Jan 2021 – Aug 2025"
              location="Bengaluru, India"
            />
            <EducationCard
              school="Akshara PU College"
              degree="PUC - PCMB"
              meta="Percentage 95.1%"
              period="Jun 2019 – Jul 2021"
              location="Shikaripur, Karnataka"
            />
          </div>
        </Section>

        {/* Hobbies */}
        <Section id="hobbies" title="Hobbies">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HOBBIES.map((h) => (
              <HobbyCard key={h.title} title={h.title} emoji={h.emoji} description={h.description} />
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Hobbies", href: "#hobbies" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="#home" className="font-semibold tracking-tight">
          {NAME}
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {items.map((it) => (
            <Link
              key={it.href}
              to={it.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent",
              )}
            >
              {it.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Link to="#projects">
            <Button size="sm">Projects</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

function ExperienceItem({
  role,
  company,
  period,
  details,
}: {
  role: string;
  company: string;
  period: string;
  details: string;
}) {
  return (
    <div className="relative rounded-xl border p-5 md:p-6">
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-base md:text-lg font-semibold">
            {role} · {company}
          </h3>
          <p className="text-sm text-muted-foreground">{period}</p>
        </div>
      </div>
      <p className="mt-3 text-sm md:text-base text-muted-foreground">{details}</p>
    </div>
  );
}

function EducationCard({
  school,
  degree,
  meta,
  period,
  location,
}: {
  school: string;
  degree: string;
  meta?: string;
  period: string;
  location: string;
}) {
  return (
    <div className="rounded-xl border p-5 md:p-6">
      <h3 className="text-base md:text-lg font-semibold">{school}</h3>
      <p className="mt-1 text-sm md:text-base">{degree}</p>
      {meta && (
        <p className="text-sm text-muted-foreground">{meta}</p>
      )}
      <div className="mt-3 text-sm text-muted-foreground">
        <span>{period}</span>
        <span className="mx-2">���</span>
        <span>{location}</span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {NAME}. All rights reserved.
      </div>
    </footer>
  );
}
