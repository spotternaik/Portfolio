import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Laptop, Bot, Layers, Brain, Code2, Github } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  tech?: string[];
  github?: string; // external URL (optional until provided)
  iconKey?: "bot" | "layers" | "brain" | "laptop" | "code";
};

function ProjectIcon({ icon }: { icon?: Project["iconKey"] }) {
  const cls = "h-9 w-9 text-primary";
  switch (icon) {
    case "bot":
      return <Bot className={cls} />;
    case "layers":
      return <Layers className={cls} />;
    case "brain":
      return <Brain className={cls} />;
    case "laptop":
      return <Laptop className={cls} />;
    default:
      return <Code2 className={cls} />;
  }
}

export function ProjectCard({ project, className }: { project: Project; className?: string }) {
  const { title, description, tech = [], github, iconKey } = project;
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-2xl border bg-card/60 backdrop-blur",
        "shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_60px_rgba(0,0,0,0.12)]",
        "transition-all duration-300",
        className,
      )}
    >
      <div className="flex items-start gap-4 p-6">
        <div className="grid size-12 place-items-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
          <ProjectIcon icon={iconKey} />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          {tech.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tech.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="mt-auto flex items-center justify-end gap-3 px-6 pb-6">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="gap-1">
              <GitHubLogoIcon /> GitHub
            </Button>
          </a>
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />
    </div>
  );
}

export default ProjectCard;
