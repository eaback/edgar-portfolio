"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

type HeroProps = {
  headline: string;
  subline: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export default function Hero({ headline, subline, ctaPrimary, ctaSecondary }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax: photo moves up slower than the scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  // Content fades and moves up as you scroll
  const contentY = useTransform(scrollYProgress, [0, 0.6], ["0%", "-12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        height: "100svh",
        minHeight: "600px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Parallax background image */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-15% 0",
          y: imageY,
        }}
      >
        <Image
          src="/images/hero/hero-panorama.jpeg"
          alt="Ljungdalen valley, Swedish mountains"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />
        {/* Gradient overlay — warm dark at bottom for text contrast */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(26,25,23,0.15) 0%, rgba(26,25,23,0.45) 60%, rgba(26,25,23,0.75) 100%)",
          }}
        />
      </motion.div>

      {/* Hero content */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 1.5rem",
          maxWidth: "820px",
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "0.8125rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: "1.25rem",
            fontFamily: "var(--font-urbanist)",
          }}
        >
          Edgar Backer · Fullstack Developer · Ljungdalen, Sweden
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            color: "#FFFFFF",
            fontSize: "clamp(2rem, 5.5vw, 4.25rem)",
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
            fontFamily: "var(--font-urbanist)",
          }}
        >
          {headline}
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            color: "rgba(255,255,255,0.82)",
            fontSize: "clamp(1rem, 2vw, 1.1875rem)",
            lineHeight: 1.65,
            maxWidth: "600px",
            margin: "0 auto 2.5rem",
            fontFamily: "var(--font-sora)",
          }}
        >
          {subline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#work"
            style={{
              padding: "0.875rem 2rem",
              background: "var(--color-green)",
              color: "#fff",
              borderRadius: "var(--radius-button)",
              fontWeight: 700,
              fontSize: "0.9375rem",
              fontFamily: "var(--font-urbanist)",
              letterSpacing: "0.01em",
              transition: "background 0.2s ease, transform 0.15s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#2d5440";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--color-green)";
            }}
          >
            {ctaPrimary}
          </a>
          <Link
            href="/contact"
            style={{
              padding: "0.875rem 2rem",
              background: "rgba(255,255,255,0.12)",
              color: "#fff",
              border: "1.5px solid rgba(255,255,255,0.35)",
              borderRadius: "var(--radius-button)",
              fontWeight: 600,
              fontSize: "0.9375rem",
              fontFamily: "var(--font-urbanist)",
              backdropFilter: "blur(8px)",
              transition: "background 0.2s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.22)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.12)";
            }}
          >
            {ctaSecondary}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          zIndex: 10,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1.5px",
            height: "40px",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.7), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
