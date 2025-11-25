// ProjectCard.tsx
import React from "react";
import type { Project } from "../types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="bg-[#0d0d0d] border-4 border-[#2d2d2d] p-8 md:p-10 transition-all hover:-translate-x-1 hover:-translate-y-1 relative group">
      {/* Gradient glow on hover */}
      <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-br from-[#00ff88] to-[#4d9fff] opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>

      <span className="font-mono text-xs md:text-sm text-[#00ff88] uppercase tracking-wider mb-4 md:mb-5 block">
        {project.role || "Project"}
      </span>

      <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight mb-3 md:mb-4 text-white">
        {project.title}
      </h3>

      <p className="text-[#aaa] mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-xs px-3 py-1 bg-[#1a1a1a] border border-[#2d2d2d] text-[#00ff88] uppercase tracking-wider"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 md:px-6 py-2.5 md:py-3 bg-transparent border-2 border-white text-white font-mono text-xs md:text-sm font-semibold uppercase tracking-wider transition-all hover:bg-white hover:text-[#0d0d0d] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#00ff88]"
          >
            Live Demo
          </a>
        )}

        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 md:px-6 py-2.5 md:py-3 bg-transparent border-2 border-[#666] text-[#aaa] font-mono text-xs md:text-sm font-semibold uppercase tracking-wider transition-all hover:border-white hover:text-white"
          >
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}
