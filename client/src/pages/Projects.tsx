import React from "react";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projectsData.json"; 
import type { Project } from "../types";

export default function Projects() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-36 px-6 md:px-12 lg:px-16 bg-[#0d0d0d] overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#00ff88]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4d9fff]/10 rounded-full blur-3xl animate-pulse-slow"></div>

        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold uppercase tracking-tight mb-4 relative inline-block after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1.5 after:bg-[#00ff88] text-white leading-snug">
            Projects
          </h1>
          <p className="text-[#aaa] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A showcase of selected work, including backend systems, APIs, and full-stack applications.
          </p>
        </div>

        {/* Animated Scroll Arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a href="#projects-list" className="flex flex-col items-center gap-2 animate-bounce">
            <span className="block w-3 h-3 border-b-2 border-r-2 border-[#00ff88] rotate-45 mb-1"></span>
            <span className="block w-3 h-3 border-b-2 border-r-2 border-[#00ff88] rotate-45"></span>
          </a>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects-list" className="py-24 md:py-36 px-6 md:px-12 lg:px-16 bg-[#1a1a1a]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projectsData.slice(0, 3).map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
