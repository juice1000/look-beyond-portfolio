import projects from "../data/projects.json";
import projectsDeu from "../data/projects.de.json";

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string | string[];
  website?: string;
  githubUrl?: string;
  technologies: string[];
}

export const getProjects = (language: "en" | "de"): Project[] => {
  return language === "de" ? projectsDeu.projects : projects.projects;
};
