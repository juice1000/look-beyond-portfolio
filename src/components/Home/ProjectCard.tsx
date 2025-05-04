import React from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Project } from "../../lib/getProjects";

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  imageUrl,
  category,
  technologies,
  website,
  githubUrl,
}) => {
  return (
    <Card className="w-full h-[260px] bg-white dark:bg-gray-800 overflow-hidden group relative transition-all duration-300 hover:shadow-lg">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      {/* Overlay that appears on hover */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="p-6 flex flex-col h-full justify-between text-white">
          <div>
            <h3 className="text-xl font-bold mb-2 mt-4">{title}</h3>
            <p className="text-sm text-gray-200">{description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-white text-black text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            {website && (
              <Button
                variant="secondary"
                size="sm"
                className="flex items-center gap-2"
                onClick={() => window.open(website, "_blank")}
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
                onClick={() => window.open(githubUrl, "_blank")}
              >
                <GitHubLogoIcon />
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
