import { cn } from "@/lib/utils";

export interface HobbyCardProps {
  title: string;
  emoji: string;
  description?: string;
  className?: string;
}

export function HobbyCard({ title, emoji, description, className }: HobbyCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-card/60 p-5 backdrop-blur transition-colors hover:bg-card",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl" aria-hidden>
          {emoji}
        </span>
        <div>
          <h4 className="font-semibold leading-tight">{title}</h4>
          {description && (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HobbyCard;
