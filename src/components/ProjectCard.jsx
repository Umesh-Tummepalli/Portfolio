import React from "react";
import Button from "./Button";
import { ExternalLink, Github, Globe } from "lucide-react";

const ProjectShowcase = ({
  title,
  imageUrl,
  description,
  technologies = [],
  features = [],
  projectType = "Web Development",
  liveUrl,
  githubUrl,
  additionalLinks = [],
}) => {
  return (
    <article 
      className="w-full mx-auto lg:m-10 rounded-2xl shadow-xl overflow-hidden z-30 bg-white/10 backdrop-blur-md border border-white/20"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      {/* Browser Header */}
      <div 
        className="bg-black/70 px-4 py-3 flex items-center gap-2 border-b border-white/10"
        aria-hidden="true"
      >
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex-1 mx-4 overflow-hidden">
          <div className="bg-gray-700/60 rounded px-3 py-1 text-gray-200 text-sm font-mono truncate">
            {liveUrl || "localhost:3000"}
          </div>
        </div>
      </div>

      {/* Project Preview */}
      <div className="bg-transparent">
        <div className="rounded-lg overflow-hidden border border-white/10">
          <img
            src={`/projectImg/${imageUrl || 'placeholder.svg'}`}
            alt={`${title} project preview`}
            className="w-full h-64 object-cover m-auto"
            itemProp="image"
            loading="lazy"
          />
        </div>
      </div>

      {/* Project Information */}
      <div className="px-4 lg:px-8 py-4 space-y-6 text-white">
        {/* Header Section */}
        <header className="">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/80">
                <Globe className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-medium" itemProp="genre">{projectType}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold" itemProp="name">{title}</h1>
            </div>

            {(liveUrl || githubUrl || additionalLinks.length > 0) && (
              <div className="flex flex-wrap gap-2">
                {liveUrl && (
                  <Button classes="text-white bg-white/10 hover:bg-white/20 border border-white/20">
                    <a 
                      href={liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1"
                      aria-label={`View live demo of ${title}`}
                    >
                      Live Demo <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </Button>
                )}
                {githubUrl && (
                  <Button classes="text-white bg-white/10 hover:bg-white/20 border border-white/20">
                    <a 
                      href={githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1"
                      aria-label={`View source code of ${title} on GitHub`}
                    >
                      <Github className="w-4 h-4" aria-hidden="true" /> Code
                    </a>
                  </Button>
                )}
                {additionalLinks.map((link, index) => (
                  <Button key={index} classes="text-white bg-white/10 hover:bg-white/20 border border-white/20">
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1"
                      aria-label={`View ${link.label} for ${title}`}
                    >
                      {link.icon && <span className="w-4 h-4" aria-hidden="true">{link.icon}</span>}
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </header>

        {description && (
          <section itemProp="description">
            <h2 className="text-lg font-semibold text-white">About This Project</h2>
            <p className="text-white/80 leading-relaxed text-wrap">{description}</p>
          </section>
        )}

        {technologies.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold text-white">Technologies Used</h2>
            <div className="flex flex-wrap gap-2" itemProp="keywords">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="text-white bg-white/10 text-sm border border-white/20 px-3 py-1.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {features.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold text-white">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-white/80">
                  <div className="mt-1.5 w-2 h-2 bg-white rounded-full flex-shrink-0" aria-hidden="true"></div>
                  <span itemProp="featureList">{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
};

export default ProjectShowcase;