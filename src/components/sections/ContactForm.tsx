"use client";

import { useState } from "react";
import { contactPage } from "@/lib/content";

const inputClass =
  "w-full bg-white border border-navy/15 rounded px-4 py-3 font-sans text-sm text-navy placeholder:text-navy/35 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-150";

const labelClass =
  "block font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-navy/50 mb-1.5";

export function ContactForm() {
  const { form } = contactPage;
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // TODO: Replace this stub with your email backend.
    // Options: Resend API route, Formspree, EmailJS
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center mb-5">
          <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-navy text-2xl mb-2">Message Sent</h3>
        <p className="font-sans text-navy/50 text-sm">
          We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>Name *</label>
          <input
            id="name"
            required
            type="text"
            name="name"
            autoComplete="name"
            placeholder={form.namePlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input
            id="email"
            required
            type="email"
            name="email"
            autoComplete="email"
            placeholder={form.emailPlaceholder}
            className={inputClass}
          />
        </div>
      </div>

      {/* Organization */}
      <div>
        <label htmlFor="organization" className={labelClass}>Organization</label>
        <input
          id="organization"
          type="text"
          name="organization"
          autoComplete="organization"
          placeholder={form.orgPlaceholder}
          className={inputClass}
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="subject" className={labelClass}>Area of Interest</label>
        <select id="subject" name="subject" className={inputClass}>
          <option value="">Select a service...</option>
          {form.subjectOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>Message *</label>
        <textarea
          id="message"
          required
          name="message"
          rows={5}
          placeholder={form.messagePlaceholder}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full inline-flex items-center justify-center gap-2 bg-gold text-[#04091A] font-sans font-semibold text-sm py-4 px-8 rounded hover:bg-gold-light transition-all duration-200 shadow-[0_2px_16px_rgba(196,146,58,0.3)] hover:shadow-[0_4px_28px_rgba(196,146,58,0.5)] disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-px"
      >
        {status === "sending" ? (
          <>
            <svg aria-hidden="true" className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            {form.submitLabel}
            <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
