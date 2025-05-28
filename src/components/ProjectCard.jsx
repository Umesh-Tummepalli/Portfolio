import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe } from "lucide-react";

const ProjectShowcase = ({
  // Required props
  title,
  imageUrl,
  description,
  technologies = [],
  features = [],
  
  // Optional props
  projectType = "Web Development", // Just provide text like "Full Stack" or "Frontend"
  liveUrl,
  githubUrl,
  additionalLinks = [],
}) => {
  return (
    <div className="max-w-4xl w-full mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
      {/* Browser Header */}
      <div className="bg-black px-4 py-3 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-gray-800 rounded px-3 py-1 text-gray-300 text-sm font-mono">
            {liveUrl || "localhost:3000"}
          </div>
        </div>
      </div>

      {/* Project Preview */}
      <div className="bg-gray-50 p-4 md:p-6">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={`${title} preview`}
            className="w-full h-48 md:h-64 lg:h-80 object-cover"
          />
        </div>
      </div>

      {/* Project Information */}
      <div className="p-6 md:p-8 space-y-6">
        {/* Header Section */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium text-gray-600">{projectType}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-black">{title}</h1>
            </div>

            {/* Action Buttons */}
            {(liveUrl || githubUrl || additionalLinks.length > 0) && (
              <div className="flex flex-wrap gap-2">
                {liveUrl && (
                  <Button variant="default" size="sm" asChild>
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
                {additionalLinks.map((link, index) => (
                  <Button key={index} variant={link.variant || "outline"} size="sm" asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.icon && <span className="w-4 h-4 mr-2">{link.icon}</span>}
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        {description && (
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-black">About This Project</h2>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>
        )}

        {/* Technologies Used */}
        {technologies.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-black">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-black border-gray-300 hover:bg-gray-50"
                >
                  {tech}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Features Section */}
        {features.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-black">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectShowcase;