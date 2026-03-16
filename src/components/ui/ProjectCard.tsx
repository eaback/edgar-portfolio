"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  stat?: { value: string; label: string };
  stack: string[];
  image?: string;
  placeholderGradient?: string;
  cta: string;
  href?: string; // external link (optional)
};

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        background: "var(--color-surface)",
        borderRadius: "var(--radius-card)",
        overflow: "hidden",
        boxShadow: "var(--shadow-card)",
        display: "flex",
        flexDirection: "column",
        transition: "box-shadow 0.25s ease, transform 0.25s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-card-hover)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-card)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      {/* Image area */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 10",
          background: project.placeholderGradient ?? "var(--color-green-light)",
          overflow: "hidden",
        }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "top center" }}
          />
        ) : (
          <PlaceholderVisual gradient={project.placeholderGradient} title={project.title} />
        )}

        {/* Category tag */}
        <span
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(6px)",
            color: "var(--color-text)",
            fontFamily: "var(--font-urbanist)",
            fontWeight: 600,
            fontSize: "0.6875rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "0.3rem 0.65rem",
            borderRadius: "var(--radius-tag)",
          }}
        >
          {project.category}
        </span>

        {/* Stat badge */}
        {project.stat && (
          <div
            style={{
              position: "absolute",
              bottom: "1rem",
              right: "1rem",
              background: "var(--color-green)",
              color: "#fff",
              fontFamily: "var(--font-urbanist)",
              borderRadius: "0.625rem",
              padding: "0.4rem 0.75rem",
              textAlign: "center",
            }}
          >
            <div style={{ fontWeight: 800, fontSize: "1.0625rem", lineHeight: 1 }}>
              {project.stat.value}
            </div>
            <div style={{ fontWeight: 500, fontSize: "0.625rem", opacity: 0.85, letterSpacing: "0.04em" }}>
              {project.stat.label}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.875rem", flex: 1 }}>
        <div>
          <h3
            style={{
              fontFamily: "var(--font-urbanist)",
              fontWeight: 700,
              fontSize: "1.1875rem",
              color: "var(--color-text)",
              marginBottom: "0.4rem",
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontFamily: "var(--font-sora)",
              fontSize: "0.875rem",
              color: "var(--color-text-muted)",
              lineHeight: 1.6,
            }}
          >
            {project.description}
          </p>
        </div>

        {/* Stack tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
          {project.stack.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-urbanist)",
                fontWeight: 500,
                fontSize: "0.6875rem",
                letterSpacing: "0.04em",
                color: "var(--color-text-muted)",
                background: "var(--color-background)",
                border: "1px solid var(--color-border)",
                padding: "0.2rem 0.5rem",
                borderRadius: "var(--radius-tag)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: "auto", paddingTop: "0.5rem" }}>
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              style={ctaStyle}
            >
              {project.cta} →
            </a>
          ) : (
            <Link href={`/work/${project.slug}`} style={ctaStyle}>
              {project.cta} →
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const ctaStyle: React.CSSProperties = {
  fontFamily: "var(--font-urbanist)",
  fontWeight: 600,
  fontSize: "0.875rem",
  color: "var(--color-green)",
  textDecoration: "none",
  letterSpacing: "0.01em",
};

function PlaceholderVisual({ gradient, title }: { gradient?: string; title: string }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: gradient ?? "linear-gradient(135deg, #EBF3EE 0%, #d4e9db 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-urbanist)",
          fontWeight: 700,
          fontSize: "0.875rem",
          color: "var(--color-green)",
          opacity: 0.5,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}
      >
        {title}
      </span>
    </div>
  );
}
