package main

import (
	"crypto/tls"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/smtp"
	"os"

	"github.com/joho/godotenv"
)

type ContactForm struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Message string `json:"message"`
}

func main() {
	godotenv.Load()
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	http.HandleFunc("/send-email", cors(sendEmailHandler))
	fmt.Printf("Backend running on port %s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

// CORS Middleware
func cors(handler http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}
		handler(w, r)
	}
}

// Email Handler
func sendEmailHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Error(w, "Invalid method", http.StatusMethodNotAllowed)
		return
	}

	var form ContactForm
	err := json.NewDecoder(r.Body).Decode(&form)
	if err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	from := os.Getenv("SMTP_EMAIL")
	password := os.Getenv("SMTP_PASSWORD")
	to := os.Getenv("SMTP_EMAIL")
	smtpHost := os.Getenv("SMTP_HOST")
	smtpPort := os.Getenv("SMTP_PORT")

	// Create message
	subject := "Subject: Portfolio Contact Form\r\n"
	body := fmt.Sprintf(
		"From: %s\r\nTo: %s\r\n%s\r\nName: %s\r\nEmail: %s\r\n\r\nMessage:\r\n%s",
		from, to, subject, form.Name, form.Email, form.Message,
	)

	// Setup authentication
	auth := smtp.PlainAuth("", from, password, smtpHost)

	// Connect to the server with TLS
	addr := smtpHost + ":" + smtpPort

	// Connect to server
	client, err := smtp.Dial(addr)
	if err != nil {
		log.Printf("Dial error: %v", err)
		http.Error(w, "Failed to connect to SMTP server: "+err.Error(), http.StatusInternalServerError)
		return
	}
	defer client.Close()

	// Start TLS
	tlsConfig := &tls.Config{
		ServerName: smtpHost,
	}
	if err = client.StartTLS(tlsConfig); err != nil {
		log.Printf("StartTLS error: %v", err)
		http.Error(w, "Failed to start TLS: "+err.Error(), http.StatusInternalServerError)
		return
	}

	// Authenticate
	if err = client.Auth(auth); err != nil {
		log.Printf("Auth error: %v", err)
		http.Error(w, "Failed to authenticate: "+err.Error(), http.StatusInternalServerError)
		return
	}

	// Set sender and recipient
	if err = client.Mail(from); err != nil {
		log.Printf("Mail error: %v", err)
		http.Error(w, "Failed to set sender: "+err.Error(), http.StatusInternalServerError)
		return
	}
	if err = client.Rcpt(to); err != nil {
		log.Printf("Rcpt error: %v", err)
		http.Error(w, "Failed to set recipient: "+err.Error(), http.StatusInternalServerError)
		return
	}

	// Send the email body
	wc, err := client.Data()
	if err != nil {
		log.Printf("Data error: %v", err)
		http.Error(w, "Failed to get data writer: "+err.Error(), http.StatusInternalServerError)
		return
	}
	defer wc.Close()

	if _, err = wc.Write([]byte(body)); err != nil {
		log.Printf("Write error: %v", err)
		http.Error(w, "Failed to write email body: "+err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Email sent successfully"))
}
