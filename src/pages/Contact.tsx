import React from "react";

export default function Contact() {
  return (
    <>
      {/* Contact Hero */}
      <section className="relative py-24 md:py-36 px-6 md:px-12 lg:px-16 bg-[#0d0d0d] overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold uppercase tracking-tight mb-6 relative inline-block after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1.5 after:bg-[#00ff88] text-white leading-relaxed">
            Let's Talk
          </h1>
          <p className="text-lg md:text-xl text-[#888] mb-12 leading-loose">
            Got a project or idea? Drop a message and let's make it happen together.
          </p>
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#00ff88]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4d9fff]/10 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Animated Scroll Arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a href="#contact-form" className="flex flex-col items-center gap-2 animate-bounce">
            <span className="block w-3 h-3 border-b-2 border-r-2 border-[#00ff88] rotate-45 mb-1"></span>
            <span className="block w-3 h-3 border-b-2 border-r-2 border-[#00ff88] rotate-45"></span>
          </a>
        </div>
      </section>

      {/* Centered Contact Form */}
      <section id="contact-form" className="relative py-20 md:py-32 px-6 md:px-12 lg:px-16 bg-[#1a1a1a]">
        <div className="max-w-xl mx-auto">
          <div className="bg-[#0d0d0d] p-10 md:p-12 rounded-3xl shadow-lg">
            <h2 className="font-display text-3xl md:text-4xl font-semibold uppercase tracking-tight mb-8 text-center text-white leading-relaxed">
              Send a Message
            </h2>
            <form className="space-y-6 md:space-y-8">
              <div>
                <label className="block font-mono text-xs md:text-sm uppercase tracking-wider mb-2 text-[#00ff88] font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-5 py-4 bg-[#1a1a1a] border-2 border-[#2d2d2d] rounded-lg text-white focus:outline-none focus:border-[#00ff88] transition-all leading-loose"
                />
              </div>

              <div>
                <label className="block font-mono text-xs md:text-sm uppercase tracking-wider mb-2 text-[#00ff88] font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-5 py-4 bg-[#1a1a1a] border-2 border-[#2d2d2d] rounded-lg text-white focus:outline-none focus:border-[#00ff88] transition-all leading-loose"
                />
              </div>

              <div>
                <label className="block font-mono text-xs md:text-sm uppercase tracking-wider mb-2 text-[#00ff88] font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Your message..."
                  required
                  className="w-full px-5 py-4 bg-[#1a1a1a] border-2 border-[#2d2d2d] rounded-lg text-white focus:outline-none focus:border-[#00ff88] transition-all resize-none leading-loose"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-[#00ff88] to-[#4d9fff] text-[#0d0d0d] font-mono font-medium uppercase rounded-lg tracking-wider transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_white]"
              >
                Send Message
              </button>
            </form>

            <div id="form-response" className="mt-6 md:mt-8 text-center text-white"></div>
          </div>
        </div>
      </section>
    </>
  );
}
