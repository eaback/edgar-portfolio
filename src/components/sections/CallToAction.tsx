"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  label: string;
  headline: string;
  body: string;
  ctaPrimary: string;
  ctaSecondary: string;
  emailAddress: string;
};

export default function CallToAction({
  label,
  headline,
  body,
  ctaPrimary,
  ctaSecondary,
  emailAddress,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      style={{
        padding: "7rem 1.5rem 8rem",
        textAlign: "center",
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ maxWidth: "640px", margin: "0 auto" }}
      >
        <p
          style={{
            fontFamily: "var(--font-urbanist)",
            fontWeight: 600,
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-green)",
            marginBottom: "1rem",
          }}
        >
          {label}
        </p>

        <h2
          style={{
            fontFamily: "var(--font-urbanist)",
            fontWeight: 700,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "var(--color-text)",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            marginBottom: "1.25rem",
          }}
        >
          {headline}
        </h2>

        <p
          style={{
            fontFamily: "var(--font-sora)",
            fontSize: "1.0625rem",
            color: "var(--color-text-muted)",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          {body}
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Primary: Start a project */}
          <a
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.8125rem 1.75rem",
              background: "var(--color-green)",
              color: "#fff",
              borderRadius: "var(--radius-button)",
              fontFamily: "var(--font-urbanist)",
              fontWeight: 700,
              fontSize: "0.9375rem",
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
            }}
          >
            {ctaPrimary}
          </a>

          {/* Secondary: Email */}
          <a
            href={`mailto:${emailAddress}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.8125rem 1.75rem",
              background: "transparent",
              color: "var(--color-text)",
              border: "1.5px solid var(--color-border)",
              borderRadius: "var(--radius-button)",
              fontFamily: "var(--font-urbanist)",
              fontWeight: 600,
              fontSize: "0.9375rem",
              textDecoration: "none",
              transition: "border-color 0.2s ease, color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--color-green)";
              el.style.color = "var(--color-green)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--color-border)";
              el.style.color = "var(--color-text)";
            }}
          >
            {ctaSecondary}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
