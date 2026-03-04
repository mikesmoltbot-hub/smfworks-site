"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "You're in! First issue hits your inbox Monday morning.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center">
        <div className="text-4xl mb-3">🎉</div>
        <p className="text-[#C87941] font-semibold text-lg mb-1">You&apos;re subscribed!</p>
        <p className="text-gray-300 text-sm">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        disabled={status === "loading"}
        className="flex-1 px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C87941] transition-colors disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={status === "loading" || !email}
        className="bg-[#C87941] text-white px-6 py-3 rounded font-semibold hover:bg-[#b56b35] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
      >
        {status === "loading" ? "Subscribing…" : "Subscribe Free"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm mt-1 sm:col-span-2">{message}</p>
      )}
    </form>
  );
}
