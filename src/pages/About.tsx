import React from "react";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-36 px-6 md:px-12 lg:px-16 bg-[#0d0d0d] overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#00ff88]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4d9fff]/10 rounded-full blur-3xl animate-pulse-slow"></div>

        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold uppercase tracking-tight mb-4 relative inline-block after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1.5 after:bg-[#00ff88] text-white leading-snug">
            About Me
          </h1>
          <p className="text-[#aaa] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Developer & problem solver specializing in Go backend development, APIs, microservices, and cloud-native solutions.
          </p>
        </div>

        {/* Animated Scroll Arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a href="#about-next" className="flex flex-col items-center gap-2 animate-bounce">
            <span className="block w-3 h-3 border-b-2 border-r-2 border-[#00ff88] rotate-45 mb-1"></span>
            <span className="block w-3 h-3 border-b-2 border-r-2 border-[#00ff88] rotate-45"></span>
          </a>
        </div>
      </section>

      {/* Bio + Skills Section */}
      <section id="about-next" className="py-24 md:py-36 px-6 md:px-12 lg:px-16 bg-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">

          {/* Bio */}
          <div className="lg:col-span-7 bg-[#2d2d2d] p-8 md:p-12 rounded-xl border-l-8 border-[#00ff88] flex flex-col justify-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold uppercase tracking-tight mb-4 text-white leading-snug">
              My Journey
            </h2>
            <p className="text-base md:text-lg text-[#aaa] leading-relaxed mb-4">
              Backend-focused developer specializing in Go, building scalable APIs and cloud-native systems.
            </p>
            <p className="text-base md:text-lg text-[#aaa] leading-relaxed mb-4">
              Contributed to open-source projects and helped teams architect robust backend systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <span className="flex items-center gap-2 text-[#aaa] text-base md:text-lg">📍 Nairobi, Kenya</span>
              <span className="flex items-center gap-2 text-[#aaa] text-base md:text-lg">💼 Freelance Available</span>
              <span className="flex items-center gap-2 text-[#aaa] text-base md:text-lg">✉️ itscollinsmaina@gmail.com</span>
            </div>
          </div>

          {/* Skills */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            <h2 className="font-display text-3xl md:text-4xl font-semibold uppercase tracking-tight mb-4 text-white">
              Skills & Tools
            </h2>

            <div className="bg-[#2d2d2d] p-6 border-l-4 border-[#00ff88] hover:border-l-8 transition-all">
              <strong className="block text-lg md:text-xl uppercase font-display mb-1 text-white font-medium leading-snug">
                Go Backend Development
              </strong>
              <p className="text-[#aaa] text-sm md:text-base leading-relaxed">REST, gRPC, Microservices</p>
            </div>

            <div className="bg-[#2d2d2d] p-6 border-l-4 border-[#00ff88] hover:border-l-8 transition-all">
              <strong className="block text-lg md:text-xl uppercase font-display mb-1 text-white font-medium leading-snug">
                Databases & Caching
              </strong>
              <p className="text-[#aaa] text-sm md:text-base leading-relaxed">PostgreSQL, MySQL, Redis, MongoDB</p>
            </div>

            <div className="bg-[#2d2d2d] p-6 border-l-4 border-[#00ff88] hover:border-l-8 transition-all">
              <strong className="block text-lg md:text-xl uppercase font-display mb-1 text-white font-medium leading-snug">
               Deployment & Containers
              </strong>
              <p className="text-[#aaa] text-sm md:text-base leading-relaxed">Docker, Kubernetes, CI/CD</p>
            </div>

            <div className="bg-[#2d2d2d] p-6 border-l-4 border-[#00ff88] hover:border-l-8 transition-all">
              <strong className="block text-lg md:text-xl uppercase font-display mb-1 text-white font-medium leading-snug">
                Testing 
              </strong>
              <p className="text-[#aaa] text-sm md:text-base leading-relaxed">Unit tests, Integration tests</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-16 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold uppercase tracking-tight mb-6 md:mb-8 text-white leading-snug">
            Let's Build Something Together
          </h2>
          <p className="text-lg md:text-xl text-[#aaa] mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto">
            I’m available for freelance projects and collaborations. Reach out and let's create high-performance Go backend solutions.
          </p>
          <a
            href="/contact"
            className="inline-block px-12 md:px-16 py-5 md:py-6 font-mono text-base md:text-lg font-medium uppercase tracking-wider border-4 transition-all bg-gradient-to-r from-[#00ff88] to-[#4d9fff] text-[#0d0d0d] border-[#00ff88] hover:from-[#4d9fff] hover:to-[#00ff88] hover:text-white hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_white]"
          >
            Contact Me
          </a>
        </div>
      </section>
    </>
  );
}
