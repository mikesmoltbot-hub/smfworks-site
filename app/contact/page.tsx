"use client";
import { useState } from "react";
import Link from "next/link";

const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSesttQn_vRl9Q25-uz6kzy66E6X9vMPGisOzi62-ycNF-h15g/formResponse";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const f = e.currentTarget;
    const get = (name: string) =>
      (f.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)?.value || "";

    const callPref = (f.elements.namedItem("request_call") as RadioNodeList)?.value || "";
    const timeSlots = Array.from(f.querySelectorAll<HTMLInputElement>("input[name='time']:checked")).map(
      (el) => el.value
    );

    const params = new URLSearchParams();
    params.append("entry.115422947", get("fullname"));
    params.append("entry.775941689", get("phone"));
    params.append("entry.804366327", get("business"));
    params.append("entry.110550673", get("interest"));
    params.append("entry.591156020", get("message"));
    params.append("entry.1004000223", callPref);
    timeSlots.forEach((slot) => params.append("entry.429785489", slot));

    await fetch(FORM_ACTION, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    setStatus("success");
    f.reset();
  }

  return (
    <>
      {/* HEADER */}
      <section className="bg-[#1E1E1E] text-[#F8F5F0] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C87941] text-sm font-semibold uppercase tracking-widest mb-3">
            Let&apos;s Talk
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Get in Touch</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            No pitch decks. No sales funnels. Just a real conversation about your
            business and where AI can actually help.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-20 px-6 bg-[#F8F5F0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* FORM */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

            {status === "success" ? (
              <div className="bg-white border border-green-200 rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-2">Message Received</h3>
                <p className="text-gray-600 mb-6">
                  Thanks for reaching out. I respond personally within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-[#C87941] font-semibold hover:underline"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    required
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#C87941]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="jane@yourbusiness.com"
                    className="w-full px-4 py-3 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#C87941]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-gray-400">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(555) 555-5555"
                    className="w-full px-4 py-3 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#C87941]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="business"
                    placeholder="Your Business"
                    className="w-full px-4 py-3 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#C87941]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    I&apos;m interested in...
                  </label>
                  <select
                    name="interest"
                    className="w-full px-4 py-3 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#C87941]"
                  >
                    <option value="">Select a service</option>
                    <option value="Consulting Services">AI Workflow Consulting</option>
                    <option value="Product Development">AI Content Production</option>
                    <option value="Sales Inquiry">Both — I need to learn more</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tell me about your business *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="What do you do, what challenges are you facing, what are you hoping AI can help with?"
                    className="w-full px-4 py-3 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#C87941] resize-none"
                  />
                </div>

                <div>
                  <p className="block text-sm font-medium text-gray-700 mb-2">
                    Would you like a follow-up call?
                  </p>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="request_call" value="Yes, please call me." className="accent-[#C87941]" />
                      <span className="text-sm text-gray-700">Yes, please call me</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="request_call" value="No, email communication is preferred." defaultChecked className="accent-[#C87941]" />
                      <span className="text-sm text-gray-700">No, email is fine</span>
                    </label>
                  </div>
                </div>

                <div>
                  <p className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred call time <span className="text-gray-400">(if requesting a call)</span>
                  </p>
                  <div className="space-y-2">
                    {[
                      "Morning (9:00 AM - 12:00 PM)",
                      "Early Afternoon (12:00 PM - 3:00 PM)",
                      "Late Afternoon (3:00 PM - 5:00 PM)",
                    ].map((slot) => (
                      <label key={slot} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" name="time" value={slot} className="accent-[#C87941]" />
                        <span className="text-sm text-gray-700">{slot}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#C87941] text-white py-3 rounded font-semibold hover:bg-[#b56b35] transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  I respond to every message personally, usually within 24 hours.
                </p>
              </form>
            )}
          </div>

          {/* INFO */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:hello@smfworks.com" className="text-[#C87941] hover:underline">
                      hello@smfworks.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-gray-600">Pittsboro, NC — serving businesses nationwide</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1E1E1E] text-[#F8F5F0] rounded-xl p-8">
              <h3 className="font-bold text-lg mb-3">What to expect</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                {[
                  "Personal response within 24 hours",
                  "No sales pressure — just a real conversation",
                  "Honest assessment of where AI can help you",
                  "Clear pricing — no surprises",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#C87941] mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3">Also, subscribe to SMF AI Weekly</h3>
              <p className="text-gray-600 text-sm mb-4">
                Free weekly AI insights for small businesses — practical, jargon-free, actually useful.
              </p>
              <Link href="/#newsletter" className="text-[#C87941] font-semibold hover:underline text-sm">
                Subscribe free →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
