import React, { useState } from "react";
import axios from "axios";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await axios.post(
        " https://portfolio-fu91.onrender.com/send-email",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.data.success) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setError(res.data.error || "Failed to send the message");
      }
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setError(err.response?.data?.error || "Failed to send message. Try again later.");
    }

    // Reset status after 3.5 seconds
    setTimeout(() => {
      setStatus("idle");
      setError("");
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
{/* Hero Section with Glow Blobs */}
<section className="relative py-24 md:py-36 px-6 md:px-12 lg:px-16 text-center overflow-hidden">
  {/* Background Blobs */}
  <div className="absolute top-0 left-0 w-64 h-64 bg-[#00ff88]/20 rounded-full blur-3xl animate-pulse-slow mix-blend-overlay"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4d9fff]/20 rounded-full blur-3xl animate-pulse-slow mix-blend-overlay"></div>

  {/* Hero Content */}
  <div className="relative z-10 max-w-3xl mx-auto">
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-6 text-white relative inline-block">
      Let's Talk
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-[#00ff88] rounded-full"></span>
    </h1>
    <p className="text-lg md:text-xl text-[#888] max-w-2xl mx-auto">
      Have a project or idea? Drop a message, and I’ll get back to you as soon as possible.
    </p>
  </div>

  {/* Animated Scroll Arrow */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
    <a href="#contact-form" className="flex flex-col items-center gap-2 animate-bounce">
      <span className="block w-3 h-3 border-b-2 border-r-2 border-[#00ff88] rotate-45 mb-1"></span>
      <span className="block w-3 h-3 border-b-2 border-r-2 border-[#00ff88] rotate-45"></span>
    </a>
  </div>
</section>


      {/* Contact Form Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-16 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-[#0d0d0d] p-10 md:p-12 rounded-3xl shadow-lg space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#00ff88] mb-8">
            Send a Message
          </h2>

          {/* Name */}
          <label className="block">
            <span className="text-xs text-[#00ff88] uppercase mb-2">Name</span>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              disabled={status === "sending"}
              required
              className="mt-2 w-full px-5 py-4 bg-[#1a1a1a] border-2 border-[#2d2d2d] text-white rounded-lg focus:border-[#00ff88]"
            />
          </label>

          {/* Email */}
          <label className="block">
            <span className="text-xs text-[#00ff88] uppercase mb-2">Email</span>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              disabled={status === "sending"}
              required
              className="mt-2 w-full px-5 py-4 bg-[#1a1a1a] border-2 border-[#2d2d2d] text-white rounded-lg focus:border-[#00ff88]"
            />
          </label>

          {/* Message */}
          <label className="block">
            <span className="text-xs text-[#00ff88] uppercase mb-2">Message</span>
            <textarea
              name="message"
              rows={6}
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              disabled={status === "sending"}
              required
              className="mt-2 w-full px-5 py-4 bg-[#1a1a1a] border-2 border-[#2d2d2d] text-white rounded-lg resize-none focus:border-[#00ff88]"
            />
          </label>

          {/* Submit Button */}
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-10 py-4 font-mono bg-[#00ff88] text-[#0d0d0d] rounded-lg uppercase"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {/* Status Messages */}
            {status === "sent" && <span className="text-sm text-[#00ff88] animate-pulse">✓ Message sent!</span>}
            {status === "error" && <span className="text-sm text-red-500">{error}</span>}
          </div>
        </form>
      </section>
    </div>
  );
}
