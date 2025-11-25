
import illustration from "../assets/img/illustration.png";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 max-w-[1400px] mx-auto bg-[#0d0d0d]">
      
      {/* Decorative line */}
      <div className="hidden lg:block absolute top-0 right-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#00ff88] to-transparent opacity-30"></div>
      
      {/* Text content */}
      <div className="flex flex-col justify-center text-center lg:text-left">
        <a href="/" className="inline-block w-fit no-underline group">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-6 md:mb-8 uppercase text-white transition-colors group-hover:text-[#00ff88]">
            Collins<br />Kimani
          </h1>
        </a>

        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-[#666] mb-10 md:mb-12 font-light max-w-xl mx-auto lg:mx-0">
          Building <strong className="text-[#00ff88] font-semibold">scalable backend systems</strong> with clean code and reliable architecture. Specializing in Go, APIs solutions.
        </p>

        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-5">
          <a
            href="/projects"
            className="px-8 md:px-10 py-4 md:py-5 font-mono text-sm md:text-base font-bold uppercase tracking-wider border-4 transition-all bg-[#00ff88] text-[#0d0d0d] border-[#00ff88] hover:bg-white hover:border-white text-center"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-8 md:px-10 py-4 md:py-5 font-mono text-sm md:text-base font-bold uppercase tracking-wider border-4 transition-all bg-transparent text-white border-white hover:bg-white hover:text-[#0d0d0d] text-center"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Illustration */}
      <div className="hidden lg:flex items-center justify-center">
        <div className="w-full max-w-md aspect-square overflow-hidden transition-transform hover:scale-105">
          <img 
            src={illustration} 
            alt="Backend development illustration" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Animated Scroll Arrow */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
        <a href="#next-section" className="flex flex-col items-center gap-2 animate-bounce">
          <span className="block w-3 h-3 border-b-2 border-r-2 border-[#00ff88] rotate-45 mb-1"></span>
          <span className="block w-3 h-3 border-b-2 border-r-2 border-[#00ff88] rotate-45"></span>
        </a>
      </div>
    </section>
  );
}
