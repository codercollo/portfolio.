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

    // Reset status after 3.5 seconds
    setTimeout(() => {
      setStatus("idle");
      setError("");
    }, 3500);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-[#0d0d0d] rounded-3xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-white mb-6">Send a Message</h2>

      <label className="block mb-4">
        <span className="text-xs text-[#00ff88] uppercase">Name</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={status === "sending"}
          required
          className="mt-2 w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#2d2d2d] text-white rounded-lg focus:border-[#00ff88]"
        />
      </label>

      <label className="block mb-4">
        <span className="text-xs text-[#00ff88] uppercase">Email</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={status === "sending"}
          required
          className="mt-2 w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#2d2d2d] text-white rounded-lg focus:border-[#00ff88]"
        />
      </label>

      <label className="block mb-6">
        <span className="text-xs text-[#00ff88] uppercase">Message</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          disabled={status === "sending"}
          required
          className="mt-2 w-full px-4 py-3 bg-[#1a1a1a] border-2 border-[#2d2d2d] text-white rounded-lg resize-none focus:border-[#00ff88]"
        />
      </label>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-8 py-3 font-mono bg-[#00ff88] text-[#0d0d0d] rounded-lg uppercase"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "sent" && <span className="text-sm text-[#00ff88] animate-pulse">✓ Message sent!</span>}
        {status === "error" && <span className="text-sm text-red-500">{error}</span>}
      </div>
    </form>
  );
}
