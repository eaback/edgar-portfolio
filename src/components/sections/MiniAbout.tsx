"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Stat = { value: string; label: string };

type Props = {
  label: string;
  headline: string;
  body: string;
  stats: Stat[];
  ctaLabel: string;
  ctaHref: string;
};

export default function MiniAbout({ label, headline, body, stats, ctaLabel, ctaHref }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      style={{
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        padding: "6rem 1.5rem",
      }}
    >
      <style>{`
        .mini-about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; max-width: 1200px; margin: 0 auto; }
        .mini-about-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        @media (max-width: 768px) {
          .mini-about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
        }
      `}</style>
      <div className="mini-about-grid">
        {/* Left — text */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p
            style={{
              fontFamily: "var(--font-urbanist)",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-green)",
              marginBottom: "0.75rem",
            }}
          >
            {label}
          </p>

          <h2
            style={{
              fontFamily: "var(--font-urbanist)",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 3vw, 2.375rem)",
              color: "var(--color-text)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}
          >
            {headline}
          </h2>

          <p
            style={{
              fontFamily: "var(--font-sora)",
              fontSize: "1rem",
              color: "var(--color-text-muted)",
              lineHeight: 1.7,
              marginBottom: "2rem",
              maxWidth: "480px",
            }}
          >
            {body}
          </p>

          <a
            href={ctaHref}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontFamily: "var(--font-urbanist)",
              fontWeight: 600,
              fontSize: "0.9375rem",
              color: "var(--color-text)",
              textDecoration: "none",
              borderBottom: "2px solid var(--color-green)",
              paddingBottom: "0.125rem",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-green)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text)";
            }}
          >
            {ctaLabel} →
          </a>
        </motion.div>

        {/* Right — stats */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mini-about-stats"
          style={{
            gap: "1.5rem",
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
              style={{
                background: "var(--color-background)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-card)",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-urbanist)",
                  fontWeight: 800,
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  color: "var(--color-green)",
                  lineHeight: 1,
                  marginBottom: "0.375rem",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sora)",
                  fontSize: "0.875rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
