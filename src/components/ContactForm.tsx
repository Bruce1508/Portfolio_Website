"use client";
import { FormEvent, useState } from "react";
export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setLoading(true);
    setStatus("");
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (!response.ok) throw new Error("Send failed");
      setStatus("Thanks for your message. I’ll be in touch!");
      form.reset();
    } catch {
      setStatus(
        "Your message couldn’t be sent. Please try again or use the email link.",
      );
    } finally {
      setLoading(false);
    }
  }
  return (
    <form className="contact-form" onSubmit={submit} aria-busy={loading}>
      <label>
        Your name
        <input
          name="fullName"
          autoComplete="name"
          placeholder="Alex Chen"
          minLength={2}
          maxLength={100}
          required
        />
      </label>
      <label>
        Email address
        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
        />
      </label>
      <label>
        What’s on your mind?
        <textarea
          name="message"
          placeholder="Tell me a little about it…"
          minLength={10}
          maxLength={5000}
          rows={5}
          required
        />
      </label>
      <button className="button" type="submit" disabled={loading}>
        {loading ? "Sending…" : "Send message"}
      </button>
      <p className="form-status" role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
