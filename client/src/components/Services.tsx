
import { useServices } from "../hooks/useServices";

export default function Services() {
  const services = useServices();

  return (
    <section className="bg-[#0d0d0d] py-20 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <h2  className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-5 relative inline-block after:absolute after:bottom-[-10px] after:left-0 after:w-16 after:h-1.5 after:bg-[#00ff88] text-white">
          Services
        </h2>
        <p className="text-lg md:text-xl text-[#666] mb-12 md:mb-16 max-w-2xl leading-relaxed">
          Specialized expertise in modern web development and cloud infrastructure
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
          {services.map((s) => (
            <div
              key={s.title}
              className="relative group bg-[#1a1a1a] border-2 border-[#2d2d2d] p-8 md:p-10 rounded-xl overflow-hidden transition-transform hover:-translate-x-1 hover:-translate-y-1"
            >
              {/* Gradient Glow on Hover */}
              <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-br from-[#00ff88] to-[#4d9fff] opacity-0 group-hover:opacity-50 transition-opacity rounded-xl -z-10"></div>

              {/* Service Icon */}
              <div className="text-5xl mb-5">{s.icon}</div>

              {/* Service Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                {s.title}
              </h3>

              {/* Service Description */}
              <p className="text-[#aaa] text-sm md:text-base leading-relaxed">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
