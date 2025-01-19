import React, { useState } from "react";
import projectsData from "../data/projects.json";
import ProjectCard from "./ProjectCard";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: string[];
}

interface ProjectShowcaseProps {
  projects?: Project[];
}

const defaultProjects: Project[] = projectsData.projects;

const ProjectShowcase = ({
  projects = defaultProjects,
}: ProjectShowcaseProps) => {
  const categories = ["top", "web", "mobile", "ai"];
  const [activeCategory, setActiveCategory] = useState("top");

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory,
  );

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of innovative solutions across web, mobile,
            and AI technologies.
          </p>
        </div>
        <Tabs defaultValue="top" className="w-full mb-8">
          <TabsList className="flex justify-center">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setActiveCategory(category)}
                className="capitalize"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  category={project.category}
                  technologies={project.technologies}
                  demoUrl={project.demoUrl}
                  githubUrl={project.githubUrl}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
