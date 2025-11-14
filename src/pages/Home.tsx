import React from "react";
import { Link } from "react-router-dom"; // <- Import Link
import Hero from "../components/Hero";
import Services from "../components/Services";
import useProjects from "../hooks/useProjects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const { projects } = useProjects();
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      <Hero />
      <Services />

      {/* Featured Work Section */}
      <section className="bg-[#1a1a1a] py-20 md:py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-5 relative inline-block after:absolute after:bottom-[-10px] after:left-0 after:w-16 after:h-1.5 after:bg-[#00ff88] text-white">
            Featured Work
          </h2>
          <p className="text-lg md:text-xl text-[#666] mb-12 md:mb-16 max-w-2xl leading-relaxed">
            Recent projects showcasing technical expertise and creative problem-solving
          </p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            {featuredProjects.length > 0
              ? featuredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              : Array.from({ length: 3 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0d0d0d] border-4 border-[#2d2d2d] p-8 md:p-10 transition-all hover:-translate-x-1 hover:-translate-y-1 relative group"
                  >
                    <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-br from-[#00ff88] to-[#4d9fff] opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                    <span className="font-mono text-xs md:text-sm text-[#00ff88] uppercase tracking-wider mb-4 md:mb-5 block">
                      Web Application
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight mb-3 md:mb-4">
                      E-Commerce Platform
                    </h3>
                    <p className="text-[#666] mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                      Full-stack marketplace built with Go, PostgreSQL, and HTMX. Real-time inventory management and payment processing.
                    </p>
                    <Link
                      to="/projects"
                      className="inline-block px-6 md:px-8 py-3 bg-transparent border-2 border-white text-white font-mono text-xs md:text-sm font-semibold uppercase tracking-wider transition-all hover:bg-white hover:text-[#0d0d0d] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#00ff88]"
                    >
                      View Project
                    </Link>
                  </div>
                ))}
          </div>

          {/* View All Projects Link */}
          <div className="mt-12 md:mt-16 text-center">
            <Link
              to="/projects"
              className="inline-block px-8 md:px-10 py-4 md:py-5 font-mono text-sm md:text-base font-bold uppercase tracking-wider border-4 transition-all bg-transparent text-white border-white hover:bg-white hover:text-[#0d0d0d] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_#00ff88]"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0d0d0d] py-20 md:py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6 md:mb-8 text-white">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg md:text-xl text-[#666] mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 md:px-12 py-5 md:py-6 font-mono text-base md:text-lg font-bold uppercase tracking-wider border-4 transition-all bg-[#00ff88] text-[#0d0d0d] border-[#00ff88] hover:bg-white hover:border-white hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_white]"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}
