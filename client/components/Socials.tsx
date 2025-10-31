import { Linkedin, Instagram, Github, Twitter } from "lucide-react";

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/drona-l",
  instagram: "https://www.instagram.com/spotter_naik/",
  github: "https://github.com/Dronanaik",
  twitter: "https://x.com/drona_l",
};

export default function Socials({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground">
        <Linkedin className="h-5 w-5" />
      </a>
      <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-foreground">
        <Instagram className="h-5 w-5" />
      </a>
      <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground">
        <Github className="h-5 w-5" />
      </a>
      <a href={SOCIALS.twitter} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-muted-foreground hover:text-foreground">
        <Twitter className="h-5 w-5" />
      </a>
    </div>
  );
}
