import { cn } from "@/lib/utils";

interface AvatarCircleProps {
  name: string;
  size?: number; // in px
  src?: string; // optional real image path placed under public/
  className?: string;
}

export function AvatarCircle({ name, size = 192, src, className }: AvatarCircleProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const dimension = `${size}px`;

  if (src) {
    return (
      <div
        className={cn(
          "relative rounded-full ring-2 ring-primary/30 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] overflow-hidden",
          className,
        )}
        style={{ width: dimension, height: dimension }}
      >
        <img src={src} alt={name} className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative grid place-items-center rounded-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500 text-white select-none",
        "shadow-[0_20px_80px_-20px_rgba(59,130,246,0.45)]",
        "ring-2 ring-primary/40",
        className,
      )}
      style={{ width: dimension, height: dimension }}
    >
      <div className="absolute inset-0 rounded-full bg-white/5" />
      <span className="text-5xl font-extrabold tracking-wider" aria-hidden>
        {initials}
      </span>
      <span className="sr-only">{name}</span>
    </div>
  );
}

export default AvatarCircle;
