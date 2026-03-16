"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

const SKILLS = {
  frontend: ["Next.js", "React", "SvelteKit", "TypeScript", "Tailwind CSS 4", "Framer Motion"],
  backend: ["Node.js", "PostgreSQL", "Firebase", "NextAuth.js", "REST APIs", "GraphQL"],
  infra: ["Vercel", "Hetzner VPS", "Coolify", "Bunny CDN", "Aiven (PostgreSQL)", "Docker"],
  mobile: ["Flutter", "Dart", "React Native", "Riverpod", "GoRouter"],
  ai: ["Claude API", "Stripe", "Mollie Payments", "GitHub API", "Resend"],
};

const LANGUAGES = [
  { name: "Nederlands", level: "Native", flag: "🇳🇱" },
  { name: "English", level: "Fluent", flag: "🇬🇧" },
  { name: "Deutsch", level: "Fluent", flag: "🇩🇪" },
  { name: "Svenska", level: "Fluent", flag: "🇸🇪" },
  { name: "Norsk", level: "Conversational", flag: "🇳🇴" },
];

type Translations = {
  hero_label: string;
  hero_headline: string;
  hero_tagline: string;
  available_badge: string;
  location: string;
  story_label: string;
  story_p1: string;
  story_p2: string;
  skills_label: string;
  skills_frontend: string;
  skills_backend: string;
  skills_infra: string;
  skills_mobile: string;
  skills_ai: string;
  focus_label: string;
  focus_1_title: string;
  focus_1_body: string;
  focus_2_title: string;
  focus_2_body: string;
  focus_3_title: string;
  focus_3_body: string;
  focus_4_title: string;
  focus_4_body: string;
  languages_label: string;
  edu_label: string;
  edu_1_degree: string;
  edu_1_school: string;
  edu_1_year: string;
  edu_2_degree: string;
  edu_2_school: string;
  edu_2_year: string;
  cta_label: string;
  cta_headline: string;
  cta_body: string;
  cta_primary_book: string;
  cta_secondary_email: string;
};

export default function AboutContent({ t }: { t: Translations }) {
  return (
    <main style={{ paddingTop: "64px" }}>
      <style>{`
        .about-hero-section { display: grid; grid-template-columns: 1fr auto; gap: 3rem; align-items: center; max-width: 1200px; margin: 0 auto; padding: 4rem 1.5rem 3rem; }
        .about-two-col { display: grid; grid-template-columns: 200px 1fr; gap: 3rem; }
        .about-lang-edu { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; max-width: 1200px; margin: 0 auto; }
        .about-photo { display: flex; }
        @media (max-width: 768px) {
          .about-hero-section { grid-template-columns: 1fr; padding: 2.5rem 1.5rem 2rem; }
          .about-photo { display: flex; justify-content: center; order: -1; margin-bottom: 1.5rem; }
          .about-photo > div { width: 160px !important; height: 200px !important; }
          .about-two-col { grid-template-columns: 1fr; gap: 1.5rem; }
          .about-lang-edu { grid-template-columns: 1fr; gap: 2.5rem; }
        }
      `}</style>
      <HeroSection t={t} />
      <StorySection t={t} />
      <SkillsSection t={t} />
      <FocusSection t={t} />
      <LanguagesAndEduSection t={t} />
      <CtaSection t={t} />
    </main>
  );
}

/* ── Hero ─────────────────────────────────────────────────────────────────── */

function HeroSection({ t }: { t: Translations }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="about-hero-section">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <p style={sectionLabel}>{t.hero_label}</p>

        <h1
          style={{
            fontFamily: "var(--font-urbanist)",
            fontWeight: 700,
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            color: "var(--color-text)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: "1.25rem",
          }}
        >
          {t.hero_headline}
        </h1>

        <p
          style={{
            fontFamily: "var(--font-sora)",
            fontSize: "1.0625rem",
            color: "var(--color-text-muted)",
            lineHeight: 1.7,
            maxWidth: "520px",
            marginBottom: "2rem",
          }}
        >
          {t.hero_tagline}
        </p>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {/* Available badge */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-urbanist)",
              fontWeight: 600,
              fontSize: "0.8125rem",
              color: "var(--color-green)",
              background: "var(--color-green-light)",
              padding: "0.45rem 0.875rem",
              borderRadius: "var(--radius-tag)",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--color-green)",
                display: "inline-block",
              }}
            />
            {t.available_badge}
          </span>

          {/* Location */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontFamily: "var(--font-urbanist)",
              fontWeight: 500,
              fontSize: "0.8125rem",
              color: "var(--color-text-muted)",
              background: "var(--color-background)",
              border: "1px solid var(--color-border)",
              padding: "0.45rem 0.875rem",
              borderRadius: "var(--radius-tag)",
            }}
          >
            📍 {t.location}
          </span>
        </div>
      </motion.div>

      {/* Portrait photo */}
      <motion.div
        className="about-photo"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          width: "220px",
          height: "270px",
          borderRadius: "var(--radius-card)",
          overflow: "hidden",
          border: "1px solid var(--color-border)",
          flexShrink: 0,
        }}
      >
        <Image
          src="/images/edgar.jpg"
          alt="Edgar Backer"
          width={220}
          height={270}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
          priority
        />
      </motion.div>
    </section>
  );
}

/* ── Story ────────────────────────────────────────────────────────────────── */

function StorySection({ t }: { t: Translations }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55 }}
      style={{
        borderTop: "1px solid var(--color-border)",
        padding: "4rem 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div className="about-two-col">
        <p style={sectionLabel}>{t.story_label}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <p style={bodyText}>{t.story_p1}</p>
          <p style={bodyText}>{t.story_p2}</p>
        </div>
      </div>
    </motion.section>
  );
}

/* ── Skills ───────────────────────────────────────────────────────────────── */

function SkillsSection({ t }: { t: Translations }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const categories = [
    { label: t.skills_frontend, key: "frontend" as const },
    { label: t.skills_backend, key: "backend" as const },
    { label: t.skills_infra, key: "infra" as const },
    { label: t.skills_mobile, key: "mobile" as const },
    { label: t.skills_ai, key: "ai" as const },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55 }}
      style={{
        borderTop: "1px solid var(--color-border)",
        background: "var(--color-surface)",
        padding: "4rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="about-two-col">
          <p style={sectionLabel}>{t.skills_label}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {categories.map(({ label, key }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-urbanist)",
                    fontWeight: 600,
                    fontSize: "0.6875rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-text-muted)",
                    marginBottom: "0.625rem",
                  }}
                >
                  {label}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                  {SKILLS[key].map((skill) => (
                    <span key={skill} style={tagStyle}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* ── Focus areas ──────────────────────────────────────────────────────────── */

function FocusSection({ t }: { t: Translations }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const items = [
    { title: t.focus_1_title, body: t.focus_1_body, icon: "🇪🇺" },
    { title: t.focus_2_title, body: t.focus_2_body, icon: "⛰️" },
    { title: t.focus_3_title, body: t.focus_3_body, icon: "🤖" },
    { title: t.focus_4_title, body: t.focus_4_body, icon: "🚀" },
  ];

  return (
    <section
      style={{
        borderTop: "1px solid var(--color-border)",
        padding: "4rem 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div className="about-two-col">
      <motion.p
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
        style={sectionLabel}
      >
        {t.focus_label}
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
          gap: "1.5rem",
        }}
      >
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-card)",
              padding: "1.5rem",
            }}
          >
            <span style={{ fontSize: "1.5rem", display: "block", marginBottom: "0.75rem" }}>
              {item.icon}
            </span>
            <h3
              style={{
                fontFamily: "var(--font-urbanist)",
                fontWeight: 700,
                fontSize: "1rem",
                color: "var(--color-text)",
                marginBottom: "0.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sora)",
                fontSize: "0.875rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.65,
              }}
            >
              {item.body}
            </p>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}

/* ── Languages + Education ────────────────────────────────────────────────── */

function LanguagesAndEduSection({ t }: { t: Translations }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55 }}
      style={{
        borderTop: "1px solid var(--color-border)",
        background: "var(--color-surface)",
        padding: "4rem 1.5rem",
      }}
    >
      <div className="about-lang-edu">
        {/* Languages */}
        <div>
          <p style={{ ...sectionLabel, marginBottom: "1.5rem" }}>{t.languages_label}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {LANGUAGES.map((lang) => (
              <div
                key={lang.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.75rem 1rem",
                  background: "var(--color-background)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "0.625rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <span style={{ fontSize: "1.125rem" }}>{lang.flag}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-urbanist)",
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      color: "var(--color-text)",
                    }}
                  >
                    {lang.name}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-urbanist)",
                    fontWeight: 500,
                    fontSize: "0.75rem",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <p style={{ ...sectionLabel, marginBottom: "1.5rem" }}>{t.edu_label}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              { degree: t.edu_1_degree, school: t.edu_1_school, year: t.edu_1_year },
              { degree: t.edu_2_degree, school: t.edu_2_school, year: t.edu_2_year },
            ].map((edu) => (
              <div
                key={edu.degree}
                style={{
                  padding: "1.25rem 1rem",
                  background: "var(--color-background)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "0.625rem",
                  borderLeft: "3px solid var(--color-green)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-urbanist)",
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                    color: "var(--color-text)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {edu.degree}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sora)",
                    fontSize: "0.8125rem",
                    color: "var(--color-text-muted)",
                    marginBottom: "0.375rem",
                  }}
                >
                  {edu.school}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-urbanist)",
                    fontWeight: 500,
                    fontSize: "0.75rem",
                    color: "var(--color-text-muted)",
                    opacity: 0.7,
                  }}
                >
                  {edu.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* ── CTA ──────────────────────────────────────────────────────────────────── */

function CtaSection({ t }: { t: Translations }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55 }}
      style={{
        borderTop: "1px solid var(--color-border)",
        padding: "6rem 1.5rem 7rem",
        textAlign: "center",
      }}
    >
      <p style={{ ...sectionLabel, textAlign: "center", marginBottom: "1rem" }}>{t.cta_label}</p>
      <h2
        style={{
          fontFamily: "var(--font-urbanist)",
          fontWeight: 700,
          fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
          color: "var(--color-text)",
          letterSpacing: "-0.02em",
          marginBottom: "1rem",
        }}
      >
        {t.cta_headline}
      </h2>
      <p
        style={{
          fontFamily: "var(--font-sora)",
          fontSize: "1rem",
          color: "var(--color-text-muted)",
          lineHeight: 1.7,
          maxWidth: "480px",
          margin: "0 auto 2.5rem",
        }}
      >
        {t.cta_body}
      </p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <Link
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
          }}
        >
          {t.cta_primary_book}
        </Link>
        <a
          href="mailto:edgarbacker@gmail.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.8125rem 1.75rem",
            background: "transparent",
            color: "var(--color-text)",
            border: "1.5px solid var(--color-border)",
            borderRadius: "var(--radius-button)",
            fontFamily: "var(--font-urbanist)",
            fontWeight: 600,
            fontSize: "0.9375rem",
            textDecoration: "none",
          }}
        >
          {t.cta_secondary_email}
        </a>
      </div>
    </motion.section>
  );
}

/* ── Shared styles ────────────────────────────────────────────────────────── */

const sectionLabel: React.CSSProperties = {
  fontFamily: "var(--font-urbanist)",
  fontWeight: 600,
  fontSize: "0.75rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "var(--color-green)",
};

const bodyText: React.CSSProperties = {
  fontFamily: "var(--font-sora)",
  fontSize: "1rem",
  color: "var(--color-text-muted)",
  lineHeight: 1.75,
};

const tagStyle: React.CSSProperties = {
  fontFamily: "var(--font-urbanist)",
  fontWeight: 500,
  fontSize: "0.8125rem",
  color: "var(--color-text-muted)",
  background: "var(--color-background)",
  border: "1px solid var(--color-border)",
  padding: "0.25rem 0.625rem",
  borderRadius: "var(--radius-tag)",
};
