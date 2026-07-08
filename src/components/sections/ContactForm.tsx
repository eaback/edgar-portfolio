"use client";

import { useState } from "react";

export type ContactTranslations = {
  hero_label: string;
  hero_headline: string;
  hero_body: string;
  field_name: string;
  field_email: string;
  field_company: string;
  field_type: string;
  field_type_placeholder: string;
  field_type_website: string;
  field_type_platform: string;
  field_type_mobile: string;
  field_type_consulting: string;
  field_type_other: string;
  field_message: string;
  field_message_placeholder: string;
  submit: string;
  sending: string;
  success_title: string;
  success_body: string;
  error_title: string;
  error_body: string;
  required: string;
};

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm({ t, locale }: { t: ContactTranslations; locale: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "", type: "", message: "" });
  // Honeypot — onzichtbaar voor gebruikers, bots vullen het in en worden server-side genegeerd
  const [websiteUrl, setWebsiteUrl] = useState("");

  const projectTypes = [
    { value: "website", label: t.field_type_website },
    { value: "platform", label: t.field_type_platform },
    { value: "mobile", label: t.field_type_mobile },
    { value: "consulting", label: t.field_type_consulting },
    { value: "other", label: t.field_type_other },
  ];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale, website_url: websiteUrl }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", email: "", company: "", type: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div style={{ maxWidth: "560px", margin: "0 auto", padding: "6rem 1.5rem", textAlign: "center" }}>
        <div style={{
          width: "56px", height: "56px", borderRadius: "50%",
          background: "var(--color-green-light)", color: "var(--color-green)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 1.5rem", fontSize: "1.375rem", fontWeight: 700,
        }}>✓</div>
        <h2 style={{ fontFamily: "var(--font-urbanist)", fontWeight: 700, fontSize: "1.5rem", color: "var(--color-text)", marginBottom: "0.75rem" }}>
          {t.success_title}
        </h2>
        <p style={{ fontFamily: "var(--font-sora)", color: "var(--color-text-muted)", lineHeight: 1.65 }}>
          {t.success_body}
        </p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 1.5rem 7rem" }}>
      <style>{`
        .contact-main-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 5rem; align-items: start; }
        .contact-field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .contact-sticky { position: sticky; top: 96px; }
        @media (max-width: 768px) {
          .contact-main-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .contact-field-row { grid-template-columns: 1fr; }
          .contact-sticky { position: static; }
        }
      `}</style>
      <div className="contact-main-grid">

        {/* Left — intro */}
        <div className="contact-sticky">
          <p style={labelStyle}>{t.hero_label}</p>
          <h1 style={{
            fontFamily: "var(--font-urbanist)", fontWeight: 700,
            fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", color: "var(--color-text)",
            letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: "1.25rem",
          }}>
            {t.hero_headline}
          </h1>
          <p style={{ fontFamily: "var(--font-sora)", fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
            {t.hero_body}
          </p>

          {[
            { icon: "📍", text: "Ljungdalen, Sweden (CET/CEST)" },
            { icon: "⏱", text: "Response within 1 business day" },
            { icon: "🌍", text: "EN · NL · SV · DE · NO" },
          ].map(({ icon, text }) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.875rem" }}>
              <span style={{ fontSize: "1rem", flexShrink: 0 }}>{icon}</span>
              <span style={{ fontFamily: "var(--font-urbanist)", fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* Right — form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

          {/* Honeypot — off-screen, niet focusbaar; server negeert inzendingen met dit veld gevuld */}
          <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden" }}>
            <label htmlFor="website_url">Website</label>
            <input type="text" id="website_url" name="website_url" tabIndex={-1} autoComplete="off"
              value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)} />
          </div>

          <div className="contact-field-row">
            <Field label={t.field_name} required>
              <input type="text" required value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Edgar Backer" style={inputStyle}
                onFocus={focusOn} onBlur={focusOff} />
            </Field>
            <Field label={t.field_email} required>
              <input type="email" required value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="hello@example.com" style={inputStyle}
                onFocus={focusOn} onBlur={focusOff} />
            </Field>
          </div>

          <div className="contact-field-row">
            <Field label={t.field_company}>
              <input type="text" value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Acme AB" style={inputStyle}
                onFocus={focusOn} onBlur={focusOff} />
            </Field>
            <Field label={t.field_type} required>
              <select required value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                style={{ ...inputStyle, cursor: "pointer" }}
                onFocus={focusOn} onBlur={focusOff}>
                <option value="" disabled>{t.field_type_placeholder}</option>
                {projectTypes.map(({ value, label }) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field label={t.field_message} required>
            <textarea required rows={6} value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={t.field_message_placeholder}
              style={{ ...inputStyle, resize: "vertical", lineHeight: 1.65 }}
              onFocus={focusOn} onBlur={focusOff} />
          </Field>

          {status === "error" && (
            <div style={{
              padding: "0.875rem 1rem", background: "#fef2f2",
              border: "1px solid #fecaca", borderRadius: "0.5rem",
              fontFamily: "var(--font-sora)", fontSize: "0.875rem", color: "#dc2626",
            }}>
              <strong>{t.error_title}</strong> — {t.error_body}
            </div>
          )}

          <button type="submit" disabled={status === "sending"} style={{
            padding: "0.875rem 2rem",
            background: status === "sending" ? "var(--color-text-muted)" : "var(--color-green)",
            color: "#fff", border: "none", borderRadius: "var(--radius-button)",
            fontFamily: "var(--font-urbanist)", fontWeight: 700, fontSize: "0.9375rem",
            cursor: status === "sending" ? "not-allowed" : "pointer",
            transition: "opacity 0.2s ease", alignSelf: "flex-start",
          }}>
            {status === "sending" ? t.sending : t.submit}
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
      <label style={{ fontFamily: "var(--font-urbanist)", fontWeight: 600, fontSize: "0.8125rem", color: "var(--color-text)", display: "flex", gap: "0.25rem", alignItems: "center" }}>
        {label}
        {required && <span style={{ color: "var(--color-green)" }}>*</span>}
      </label>
      {children}
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-urbanist)", fontWeight: 600, fontSize: "0.75rem",
  letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-green)",
  marginBottom: "0.75rem", display: "block",
};

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "0.6875rem 0.875rem",
  background: "var(--color-surface)", border: "1px solid var(--color-border)",
  borderRadius: "0.5rem", fontFamily: "var(--font-sora)", fontSize: "0.9375rem",
  color: "var(--color-text)", outline: "none", transition: "border-color 0.2s ease",
  boxSizing: "border-box",
};

function focusOn(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = "var(--color-green)";
}
function focusOff(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = "var(--color-border)";
}
