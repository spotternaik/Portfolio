import type { Project } from "@/components/ProjectCard";

export const NAME = "Drona";
export const ROLE = "Analyst · Full‑stack & AI";
export const PROFILE_IMAGE = "https://cdn.builder.io/api/v1/image/assets%2Fc0646a626a564c289ab5eb482f0172bb%2F61b610dbd1514bf4ae2a239480c4d223?format=webp&width=800";

export const ABOUT =
  "I am Drona, an Analyst passionate about Full‑stack development, Artificial Intelligence, Machine Learning, and Agentic AI.";

export const PROJECTS: Project[] = [
  {
    title: "Playwright Agent",
    description: "End‑to‑end browser automation agents built with Playwright and ADK for testing and automation.",
    tech: ["Playwright", "TypeScript", "ADK"],
    github: "https://github.com/Dronanaik/google-adk/tree/main/PlaywrightAgent",
    iconKey: "play",
  },
  {
    title: "Streamlit Code‑Gen Agent",
    description: "A Streamlit app that provides code generation agents backed by Google ADK.",
    tech: ["Streamlit", "Python", "ADK"],
    github: "https://github.com/Dronanaik/google-adk/tree/main/Streamlit-Code-Gen-agent",
    iconKey: "monitor",
  },
  {
    title: "Crawl4AI Agent",
    description: "Web crawling agent to collect and prepare data for downstream AI tasks.",
    tech: ["Python", "Scrapy/Requests", "ADK"],
    github: "https://github.com/Dronanaik/google-adk/tree/main/crawl4AI-agent",
    iconKey: "search",
  },
  {
    title: "Financial MCP Agent",
    description: "Agent designed for financial data workflows and connectors (MCP integrations).",
    tech: ["Python", "Finance", "MCP"],
    github: "https://github.com/Dronanaik/google-adk/tree/main/financial-mcp-agent",
    iconKey: "dollar",
  },
  {
    title: "Job Search Agent",
    description: "Agent to automate job discovery and candidate‑job matching workflows.",
    tech: ["Python", "Scraping", "NLP"],
    github: "https://github.com/Dronanaik/google-adk/tree/main/job_search_agent",
    iconKey: "briefcase",
  },
  {
    title: "MCP Agent (ADK)",
    description: "A collection of agents and adapters built on top of Google ADK for MCP scenarios.",
    tech: ["TypeScript", "ADK", "MCP"],
    github: "https://github.com/Dronanaik/google-adk/tree/main/mcp-agent-adk",
    iconKey: "bot",
  },
  {
    title: "Streamlit App",
    description: "Standalone Streamlit utilities and demos showcasing ML and data apps.",
    tech: ["Streamlit", "Python"],
    github: "https://github.com/Dronanaik/streamlit-app",
    iconKey: "monitor",
  },
  {
    title: "Angular Projects",
    description: "Angular demo apps and templates used during full‑stack training.",
    tech: ["Angular", "TypeScript", "HTML/CSS"],
    github: "https://github.com/Dronanaik/angular",
    iconKey: "layers",
  },
  {
    title: "ML Programs",
    description: "Machine learning experiments, notebooks, and training scripts.",
    tech: ["Python", "scikit‑learn", "TensorFlow/PyTorch"],
    github: "https://github.com/Dronanaik/ml-programs",
    iconKey: "brain",
  },
  {
    title: "Digital Image Processing",
    description: "Image processing algorithms and projects implemented for coursework and demos.",
    tech: ["Python", "OpenCV", "NumPy"],
    github: "https://github.com/Dronanaik/digital-image-processing-programs",
    iconKey: "image",
  },
  {
    title: "AI Programs",
    description: "Various AI utilities, scripts, and toy projects exploring models and agents.",
    tech: ["Python", "AI"],
    github: "https://github.com/Dronanaik/ai_programs",
    iconKey: "cpu",
  },
];

export const HOBBIES = [
  { title: "Cricket", emoji: "🏏", description: "Team sport and strategy." },
  { title: "Coding", emoji: "💻", description: "Building useful software." },
  { title: "Reading Books", emoji: "📚", description: "Non‑fiction and tech." },
];
