"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { type CaseStudy as CaseStudyType, pick } from "@/lib/projects";

type Props = {
  project: CaseStudyType;
  locale: string;
  visitSiteLabel: string;
  stackLabel: string;
  roleLabel: string;
  periodLabel: string;
};

export default function CaseStudy({ project, locale, visitSiteLabel, stackLabel, roleLabel, periodLabel }: Props) {
  return (
    <article>
      {/* Hero */}
      <CaseHero project={project} locale={locale} visitSiteLabel={visitSiteLabel} />

      {/* Cover image */}
      {project.coverImage && (
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ borderRadius: "var(--radius-card)", overflow: "hidden", boxShadow: "var(--shadow-card-hover)" }}>
            <Image
              src={project.coverImage}
              alt={project.title}
              width={1000}
              height={625}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      )}

      {/* Meta bar */}
      <MetaBar project={project} stackLabel={stackLabel} roleLabel={roleLabel} periodLabel={periodLabel} />

      {/* Body sections */}
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 1.5rem" }}>
        <Section title="The problem" delay={0}>
          <p style={bodyText}>{pick(project.problem, locale)}</p>
        </Section>

        <Section title="What I built" delay={0.05}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {project.approach.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                <span style={{
                  flexShrink: 0,
                  width: "1.25rem",
                  height: "1.25rem",
                  marginTop: "0.15rem",
                  borderRadius: "50%",
                  background: "var(--color-green-light)",
                  color: "var(--color-green)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.6rem",
                  fontWeight: 800,
                }}>✓</span>
                <span style={bodyText}>{pick(item, locale)}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Extra images */}
        {project.images && project.images.length > 0 && (
          <Section title="Screens" delay={0.05}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {project.images.map((img, i) => (
                <figure key={i} style={{ margin: 0 }}>
                  <div style={{ borderRadius: "0.75rem", overflow: "hidden", boxShadow: "var(--shadow-card)" }}>
                    <Image
                      src={img.src}
                      alt={img.caption ?? project.title}
                      width={680}
                      height={425}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                  {img.caption && (
                    <figcaption style={{
                      fontFamily: "var(--font-sora)",
                      fontSize: "0.8125rem",
                      color: "var(--color-text-muted)",
                      textAlign: "center",
                      marginTop: "0.5rem",
                    }}>
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </Section>
        )}

        <Section title="Result" delay={0.05}>
          <p style={bodyText}>{pick(project.result, locale)}</p>
          {project.resultStats && (
            <div style={{
              display: "grid",
              gridTemplateColumns: `repeat(${project.resultStats.length}, 1fr)`,
              gap: "1rem",
              marginTop: "1.5rem",
              padding: "1.5rem",
              background: "var(--color-green-light)",
              borderRadius: "var(--radius-card)",
            }}>
              {project.resultStats.map((stat) => (
                <div key={stat.value} style={{ textAlign: "center" }}>
                  <div style={{
                    fontFamily: "var(--font-urbanist)",
                    fontWeight: 800,
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    color: "var(--color-green)",
                    lineHeight: 1,
                    marginBottom: "0.375rem",
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-urbanist)",
                    fontWeight: 500,
                    fontSize: "0.75rem",
                    color: "var(--color-green)",
                    opacity: 0.75,
                    letterSpacing: "0.04em",
                  }}>
                    {pick(stat.label, locale)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Section>
      </div>

      {/* Next project */}
      {project.nextSlug && (
        <NextProject slug={project.nextSlug} title={project.nextTitle ?? ""} />
      )}
    </article>
  );
}

/* ── Sub-components ──────────────────────────────────────────────────────── */

function CaseHero({ project, locale, visitSiteLabel }: { project: CaseStudyType; locale: string; visitSiteLabel: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      style={{ maxWidth: "1000px", margin: "0 auto", padding: "3.5rem 1.5rem 2.5rem" }}
    >
      <Link
        href="/work"
        style={{
          fontFamily: "var(--font-urbanist)",
          fontSize: "0.8125rem",
          fontWeight: 500,
          color: "var(--color-text-muted)",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.375rem",
          marginBottom: "2rem",
        }}
      >
        ← Work
      </Link>

      <span style={{
        display: "inline-block",
        fontFamily: "var(--font-urbanist)",
        fontWeight: 600,
        fontSize: "0.6875rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--color-green)",
        background: "var(--color-green-light)",
        padding: "0.3rem 0.65rem",
        borderRadius: "var(--radius-tag)",
        marginBottom: "1.25rem",
      }}>
        {project.category}
      </span>

      <h1 style={{
        fontFamily: "var(--font-urbanist)",
        fontWeight: 700,
        fontSize: "clamp(1.875rem, 4vw, 3rem)",
        color: "var(--color-text)",
        letterSpacing: "-0.025em",
        lineHeight: 1.1,
        marginBottom: "1.25rem",
        maxWidth: "640px",
      }}>
        {project.title}
      </h1>

      <p style={{
        ...bodyText,
        fontSize: "1.0625rem",
        maxWidth: "560px",
        marginBottom: "2rem",
      }}>
        {pick(project.summary, locale)}
      </p>

      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.625rem 1.375rem",
            background: "var(--color-green)",
            color: "#fff",
            borderRadius: "var(--radius-button)",
            fontFamily: "var(--font-urbanist)",
            fontWeight: 600,
            fontSize: "0.875rem",
            textDecoration: "none",
          }}
        >
          {visitSiteLabel} ↗
        </a>
      )}
    </motion.div>
  );
}

function MetaBar({ project, stackLabel, roleLabel, periodLabel }: {
  project: CaseStudyType;
  stackLabel: string;
  roleLabel: string;
  periodLabel: string;
}) {
  return (
    <div style={{
      borderTop: "1px solid var(--color-border)",
      borderBottom: "1px solid var(--color-border)",
      margin: "2.5rem 0",
    }}>
      <div style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "1.5rem",
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
      }}>
        {[
          { label: periodLabel, value: project.period },
          { label: roleLabel, value: project.role },
          { label: stackLabel, value: project.stack.join(" · ") },
        ].map(({ label, value }) => (
          <div key={label}>
            <p style={{
              fontFamily: "var(--font-urbanist)",
              fontWeight: 600,
              fontSize: "0.6875rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--color-text-muted)",
              marginBottom: "0.25rem",
            }}>
              {label}
            </p>
            <p style={{
              fontFamily: "var(--font-urbanist)",
              fontWeight: 500,
              fontSize: "0.875rem",
              color: "var(--color-text)",
            }}>
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Section({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      style={{ marginBottom: "3.5rem" }}
    >
      <h2 style={{
        fontFamily: "var(--font-urbanist)",
        fontWeight: 700,
        fontSize: "1.25rem",
        color: "var(--color-text)",
        letterSpacing: "-0.01em",
        marginBottom: "1.25rem",
      }}>
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

function NextProject({ slug, title }: { slug: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      style={{
        borderTop: "1px solid var(--color-border)",
        marginTop: "4rem",
        padding: "3rem 1.5rem",
        textAlign: "center",
      }}
    >
      <p style={{
        fontFamily: "var(--font-urbanist)",
        fontSize: "0.75rem",
        fontWeight: 600,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--color-text-muted)",
        marginBottom: "0.75rem",
      }}>
        Next project
      </p>
      <Link
        href={`/work/${slug}`}
        style={{
          fontFamily: "var(--font-urbanist)",
          fontWeight: 700,
          fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
          color: "var(--color-text)",
          textDecoration: "none",
          letterSpacing: "-0.02em",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          transition: "color 0.2s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-green)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text)";
        }}
      >
        {title} →
      </Link>
    </motion.div>
  );
}

const bodyText: React.CSSProperties = {
  fontFamily: "var(--font-sora)",
  fontSize: "0.9375rem",
  color: "var(--color-text-muted)",
  lineHeight: 1.75,
  margin: 0,
};
