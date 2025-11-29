import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    setError("");

    try {
const res = await axios.post(
  "https://portfolio-19jc.onrender.com/send-email",
  formData,
  {
    headers: { "Content-Type": "application/json" }
  }
);


      if (res.data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Failed to send the message.");
      }

      setTimeout(() => {
        setStatus("");
        setError("");
      }, 3500);
    } catch (err: any) {
      console.error(err);

      if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError("Failed to send message. Try again later.");
      }

      setTimeout(() => {
        setError("");
      }, 4000);

      setStatus("");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-36 px-6 md:px-12 lg:px-16 bg-[#0d0d0d] overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold uppercase tracking-tight mb-6 text-white">
            Let's Talk
          </h1>
          <p className="text-lg md:text-xl text-[#888] mb-12">
            Got a project or idea? Drop a message.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-20 md:py-32 px-6 md:px-12 lg:px-16 bg-[#1a1a1a]">
        <div className="max-w-xl mx-auto">
          <div className="bg-[#0d0d0d] p-10 md:p-12 rounded-3xl shadow-lg">
            <h2 className="font-display text-3xl md:text-4xl text-center text-white mb-8">
              Send a Message
            </h2>

            <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs text-[#00ff88] uppercase mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === "Sending..."}
                  className="w-full px-5 py-4 bg-[#1a1a1a] border-2 border-[#2d2d2d] text-white rounded-lg focus:border-[#00ff88]"
                />
              </div>

              <div>
                <label className="block text-xs text-[#00ff88] uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === "Sending..."}
                  className="w-full px-5 py-4 bg-[#1a1a1a] border-2 border-[#2d2d2d] text-white rounded-lg focus:border-[#00ff88]"
                />
              </div>

              <div>
                <label className="block text-xs text-[#00ff88] uppercase mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === "Sending..."}
                  className="w-full px-5 py-4 bg-[#1a1a1a] border-2 border-[#2d2d2d] text-white rounded-lg resize-none focus:border-[#00ff88]"
                />
              </div>

              <button
                type="submit"
                disabled={status === "Sending..."}
                className="px-12 py-4 bg-[#00ff88] text-[#0d0d0d] font-mono rounded-lg uppercase"
              >
                {status === "Sending..." ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Success Message */}
            {status && status !== "Sending..." && (
              <div className="mt-6 text-center text-[#00ff88]">{status}</div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mt-6 text-center text-red-500">{error}</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
