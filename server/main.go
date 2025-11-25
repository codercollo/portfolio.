package main

import (
	"fmt"
	"log"
	"net/http"
	"net/smtp"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load() // Load environment variables from .env

	// Route with CORS wrapper
	http.HandleFunc("/send-email", cors(sendEmailHandler))

	fmt.Println("Backend running on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil)) // Start server
}

// --- CORS middleware ---
func cors(handler http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// Allow frontend access
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == "OPTIONS" {
			return // Preflight request
		}
		handler(w, r) // Continue to handler
	}
}

// --- Email handler ---
func sendEmailHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Error(w, "Invalid method", http.StatusMethodNotAllowed)
		return
	}

	r.ParseForm() // Parse form fields

	// Extract form data
	name := r.Form.Get("name")
	email := r.Form.Get("email")
	message := r.Form.Get("message")

	// SMTP credentials
	from := os.Getenv("SMTP_EMAIL")
	password := os.Getenv("SMTP_PASSWORD")
	to := []string{os.Getenv("SMTP_EMAIL")} // Send to yourself

	// SMTP server info
	smtpHost := os.Getenv("SMTP_HOST")
	smtpPort := os.Getenv("SMTP_PORT")

	// Email content
	body := fmt.Sprintf(
		"Name: %s\nEmail: %s\n\nMessage:\n%s",
		name, email, message,
	)

	auth := smtp.PlainAuth("", from, password, smtpHost)

	// Send email
	err := smtp.SendMail(
		smtpHost+":"+smtpPort,
		auth,
		from,
		to,
		[]byte("Subject: Portfolio Contact Form\n\n"+body),
	)

	if err != nil {
		http.Error(w, "Failed to send email: "+err.Error(), http.StatusInternalServerError)
		return
	}

	w.Write([]byte("Email sent successfully"))
}
