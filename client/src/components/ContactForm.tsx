import React, { useState } from "react";
import axios from "axios";

export default function ContactForm() {
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
        "https://portfolio-fu91.onrender.com/send-email",
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

    setTimeout(() => {
      setStatus("idle");
      setError("");
    }, 3500);
  };

  return (
    <div className="relative max-w-xl mx-auto">
      {/* Floating Background Blobs */}
      <div className="absolute top-[-40px] left-[-40px] w-36 h-36 bg-[#00ff88]/20 rounded-full blur-3xl animate-pulse-slow mix-blend-overlay"></div>
      <div className="absolute bottom-[-60px] right-[-60px] w-56 h-56 bg-[#4d9fff]/20 rounded-full blur-3xl animate-pulse-slow mix-blend-overlay"></div>

      <form 
        onSubmit={handleSubmit} 
        className="relative z-10 bg-[#0d0d0d] p-8 md:p-12 rounded-3xl shadow-2xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6 tracking-tight">Contact Me</h2>

        {/* Input Fields with Floating Labels */}
        {["name", "email"].map((field) => (
          <div key={field} className="relative">
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
              disabled={status === "sending"}
              required
              placeholder=" "
              className="peer w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#2d2d2d] rounded-lg text-white focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88] focus:outline-none transition-all"
            />
            <label
              className="absolute left-4 top-3 text-[#888] text-sm uppercase pointer-events-none transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#888] peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-[#00ff88] peer-focus:text-xs"
            >
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
          </div>
        ))}

        {/* Message Field */}
        <div className="relative">
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            disabled={status === "sending"}
            required
            placeholder=" "
            className="peer w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#2d2d2d] rounded-lg text-white resize-none focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88] focus:outline-none transition-all"
          />
          <label
            className="absolute left-4 top-3 text-[#888] text-sm uppercase pointer-events-none transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#888] peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-[#00ff88] peer-focus:text-xs"
          >
            Message
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center gap-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className="relative px-8 py-3 font-mono text-[#0d0d0d] bg-gradient-to-r from-[#00ff88] to-[#4d9fff] rounded-lg uppercase tracking-wide overflow-hidden transition-all hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10">{status === "sending" ? "Sending..." : "Send Message"}</span>
            <span className="absolute inset-0 bg-white opacity-5"></span>
          </button>

          {status === "sent" && <span className="text-sm text-[#00ff88] animate-pulse">✓ Message sent!</span>}
          {status === "error" && <span className="text-sm text-red-500">{error}</span>}
        </div>
      </form>
    </div>
  );
}
