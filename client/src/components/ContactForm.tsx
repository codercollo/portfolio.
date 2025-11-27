import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://portfolio-1aju.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send email");

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl">
      <label className="block mb-6">
        <span className="font-mono text-xs text-[#00ff88] uppercase tracking-wider mb-2 block">
          Your Name
        </span>
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          disabled={status === "sending"}
          className="mt-2 block w-full bg-[#0d0d0d] border-4 border-[#2d2d2d] text-white px-5 py-4 font-mono transition-all focus:border-[#00ff88] focus:outline-none disabled:opacity-50"
          required
        />
      </label>

      <label className="block mb-6">
        <span className="font-mono text-xs text-[#00ff88] uppercase tracking-wider mb-2 block">
          Email
        </span>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          disabled={status === "sending"}
          className="mt-2 block w-full bg-[#0d0d0d] border-4 border-[#2d2d2d] text-white px-5 py-4 font-mono transition-all focus:border-[#00ff88] focus:outline-none disabled:opacity-50"
          required
        />
      </label>

      <label className="block mb-8">
        <span className="font-mono text-xs text-[#00ff88] uppercase tracking-wider mb-2 block">
          Message
        </span>
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          rows={6}
          disabled={status === "sending"}
          className="mt-2 block w-full bg-[#0d0d0d] border-4 border-[#2d2d2d] text-white px-5 py-4 font-mono transition-all focus:border-[#00ff88] focus:outline-none resize-none disabled:opacity-50"
          required
        />
      </label>

      <div className="flex items-center gap-6">
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-10 py-5 font-mono text-base font-bold uppercase tracking-wider border-4 transition-all bg-[#00ff88] text-[#0d0d0d] border-[#00ff88] hover:bg-white hover:border-white hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_white] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "sent" && (
          <span className="text-sm font-mono text-[#00ff88] uppercase tracking-wider animate-pulse">
            ✓ Message sent!
          </span>
        )}

        {status === "error" && (
          <span className="text-sm font-mono text-red-500 uppercase tracking-wider">
            Error sending email!
          </span>
        )}
      </div>
    </form>
  );
}