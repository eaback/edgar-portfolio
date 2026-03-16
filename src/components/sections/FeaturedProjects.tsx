"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard, { type Project } from "@/components/ui/ProjectCard";

type Props = {
  label: string;
  headline: string;
  viewAllLabel: string;
  viewCaseStudy: string;
  projects: Project[];
};

export default function FeaturedProjects({ label, headline, viewAllLabel, viewCaseStudy, projects }: Props) {
  const headingRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section
      id="work"
      style={{
        padding: "6rem 1.5rem 5rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Section header */}
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "3rem",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-urbanist)",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-green)",
              marginBottom: "0.5rem",
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
            }}
          >
            {headline}
          </h2>
        </div>

        <a
          href="/work"
          style={{
            fontFamily: "var(--font-urbanist)",
            fontWeight: 600,
            fontSize: "0.875rem",
            color: "var(--color-text-muted)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.375rem",
            paddingBottom: "0.125rem",
            borderBottom: "1px solid var(--color-border)",
            transition: "color 0.2s ease",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-muted)";
          }}
        >
          {viewAllLabel} →
        </a>
      </motion.div>

      {/* Project grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "1.5rem",
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={{ ...project, cta: viewCaseStudy }} index={i} />
        ))}
      </div>
    </section>
  );
}
