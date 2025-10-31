import type { Project } from "@/components/ProjectCard";

export const NAME = "Drona";
export const ROLE = "Analyst · Full‑stack & AI";
export const PROFILE_IMAGE = "https://cdn.builder.io/api/v1/image/assets%2Fc0646a626a564c289ab5eb482f0172bb%2F61b610dbd1514bf4ae2a239480c4d223?format=webp&width=800";

export const ABOUT =
  "I am Drona, an Analyst passionate about Full‑stack development, Artificial Intelligence, Machine Learning, and Agentic AI.";

export const PROJECTS: Project[] = [
  {
    title: "Agentic AI Solution (Google ADK)",
    description:
      "Designing agentic AI workflows and tools using Google ADK to orchestrate multi‑step tasks and automate knowledge work.",
    tech: ["TypeScript", "Python", "Vector DB", "RAG"],
    iconKey: "bot",
  },
  {
    title: "Full‑stack Task Manager",
    description:
      "Java Spring Boot REST API with Angular frontend, authentication, and PostgreSQL—end‑to‑end CI/CD.",
    tech: ["Java", "Angular", "PostgreSQL", "CI/CD"],
    iconKey: "layers",
  },
  {
    title: "ML Pipeline Starter",
    description:
      "Data ingestion, feature engineering, model training, and evaluation with reproducible pipelines.",
    tech: ["Python", "scikit‑learn", "Pandas"],
    iconKey: "brain",
  },
];

export const HOBBIES = [
  { title: "Cricket", emoji: "🏏", description: "Team sport and strategy." },
  { title: "Coding", emoji: "💻", description: "Building useful software." },
  { title: "Reading Books", emoji: "📚", description: "Non‑fiction and tech." },
];
