import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies?: string[];
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project and its key features. This showcases our expertise in building modern applications.",
  imageUrl = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
  category = "Web Development",
  demoUrl = "https://example.com",
  githubUrl = "https://github.com",
  technologies = ["React", "TypeScript", "Tailwind"],
}: ProjectCardProps) => {
  return (
    <Card className="w-[380px] h-[320px] bg-white dark:bg-gray-800 overflow-hidden group relative transition-all duration-300 hover:shadow-lg">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      {/* Overlay that appears on hover */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="p-6 flex flex-col h-full justify-between text-white">
          <div>
            <Badge className="mb-3" variant="secondary">
              {category}
            </Badge>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm text-gray-200">{description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-xs justify-end items-end"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            {demoUrl && (
              <Button
                variant="secondary"
                size="sm"
                className="flex items-center gap-2"
              >
                <ExternalLink size={16} />
                Demo
              </Button>
            )}
            {githubUrl && (
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Github size={16} />
                Code
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
