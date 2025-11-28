import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send email");

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl">
      <label className="block mb-6">
        <span className="text-xs text-[#00ff88] uppercase">Your Name</span>
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          disabled={status === "sending"}
          required
          className="mt-2 w-full bg-[#0d0d0d] border-4 border-[#2d2d2d] text-white px-5 py-4"
        />
      </label>

      <label className="block mb-6">
        <span className="text-xs text-[#00ff88] uppercase">Email</span>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          disabled={status === "sending"}
          required
          className="mt-2 w-full bg-[#0d0d0d] border-4 border-[#2d2d2d] text-white px-5 py-4"
        />
      </label>

      <label className="block mb-8">
        <span className="text-xs text-[#00ff88] uppercase">Message</span>
        <textarea
          name="message"
          rows={6}
          value={form.message}
          onChange={onChange}
          required
          disabled={status === "sending"}
          className="mt-2 w-full bg-[#0d0d0d] border-4 border-[#2d2d2d] text-white px-5 py-4 resize-none"
        />
      </label>

      <div className="flex items-center gap-6">
        <button
          disabled={status === "sending"}
          type="submit"
          className="px-10 py-5 font-mono bg-[#00ff88] text-[#0d0d0d] border-4 border-[#00ff88]"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "sent" && (
          <span className="text-sm text-[#00ff88] animate-pulse">
            ✓ Message sent!
          </span>
        )}

        {status === "error" && (
          <span className="text-sm text-red-500">
            Error sending email!
          </span>
        )}
      </div>
    </form>
  );
}
