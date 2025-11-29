import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// -------------------------------
// CORS CONFIG
// -------------------------------
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://portfolio-lgn7.vercel.app",
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  const allowed = allowedOrigins.includes(origin) || /\.vercel\.app$/.test(origin);

  if (allowed) res.setHeader("Access-Control-Allow-Origin", origin);

  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") return res.sendStatus(200);

  next();
});

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Validation middleware
const validateEmailRequest = (req, res, next) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res.status(400).json({ error: "Missing required fields" });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email))
    return res.status(400).json({ error: "Invalid email address" });

  if (name.length > 100 || message.length > 5000)
    return res.status(400).json({ error: "Field length exceeded" });

  next();
};

// -------------------------------
// Routes
// -------------------------------
app.get("/", (req, res) => {
  res.json({ status: "Portfolio email service running" });
});

app.post("/send-email", validateEmailRequest, async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.RECIPIENT_EMAIL,
      reply_to: email,
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #00ff88;">New Contact Message</h2>
          <div style="background: #f5f5f5; padding: 16px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <h3>Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    console.log("Email sent via Resend from:", email);
    res.json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("Error sending email with Resend:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// 500 handler
app.use((err, req, res, next) => {
  console.error("Unexpected server error:", err);
  res.status(500).json({ error: "Server error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
