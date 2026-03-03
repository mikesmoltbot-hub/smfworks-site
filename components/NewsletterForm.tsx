"use client";
import { useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwkh4M7V-zv2oybLrS2oiBhoC2_TuXJYa-Nd7ubntVcFPRr8MRAcX6cikbaFlyp8CUE/exec";

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;

    try {
      const params = new URLSearchParams({
        name: "Newsletter Signup",
        email,
        interest: "SMF AI Weekly Newsletter",
        message: "Newsletter signup from homepage.",
        request_call: "No",
        business: "",
      });
      await fetch(SCRIPT_URL + "?" + params.toString(), {
        method: "GET",
        mode: "no-cors",
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-[#C87941] font-semibold text-lg">
        ✅ You&apos;re in! First issue coming soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        name="email"
        placeholder="Your email address"
        required
        className="flex-1 px-4 py-3 rounded border border-gray-300 bg-white text-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-[#C87941]"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-[#C87941] text-white px-6 py-3 rounded font-semibold hover:bg-[#b56b35] transition-colors whitespace-nowrap disabled:opacity-60"
      >
        {status === "sending" ? "Subscribing..." : "Subscribe Free"}
      </button>
    </form>
  );
}
