"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard, { type Project } from "@/components/ui/ProjectCard";

type Props = {
  label: string;
  title: string;
  description: string;
  projects: Project[];
  viewCaseStudy: string;
};

export default function WorkGrid({ label, title, description, projects, viewCaseStudy }: Props) {
  const headingRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headingRef, { once: true });

  return (
    <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
      {/* Page header */}
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
        style={{ marginBottom: "3.5rem", maxWidth: "560px" }}
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
        <h1
          style={{
            fontFamily: "var(--font-urbanist)",
            fontWeight: 700,
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            color: "var(--color-text)",
            letterSpacing: "-0.02em",
            lineHeight: 1.12,
            marginBottom: "1rem",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontFamily: "var(--font-sora)",
            fontSize: "1rem",
            color: "var(--color-text-muted)",
            lineHeight: 1.65,
          }}
        >
          {description}
        </p>
      </motion.div>

      {/* Featured — first two projects, larger */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: "1.5rem",
          marginBottom: "1.5rem",
        }}
      >
        {projects.slice(0, 2).map((project, i) => (
          <ProjectCard key={project.slug} project={{ ...project, cta: viewCaseStudy }} index={i} />
        ))}
      </div>

      {/* Secondary — rest in a tighter 3-column grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "1.5rem",
        }}
      >
        {projects.slice(2).map((project, i) => (
          <ProjectCard key={project.slug} project={{ ...project, cta: viewCaseStudy }} index={i + 2} />
        ))}
      </div>
    </section>
  );
}
