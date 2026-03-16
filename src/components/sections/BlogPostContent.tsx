"use client";

import { Link } from "@/i18n/navigation";
import { type BlogPost, formatDate, pick } from "@/lib/posts";

type Props = {
  post: BlogPost;
  locale: string;
  t: {
    back_to_blog: string;
    min_read: string;
    cta_box_title: string;
    cta_box_body: string;
    cta_box_link: string;
  };
};

export default function BlogPostContent({ post, locale, t }: Props) {
  return (
    <main style={{ paddingTop: "64px" }}>
      {/* Back link */}
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "2rem 1.5rem 0" }}>
        <Link
          href="/blog"
          style={{
            fontFamily: "var(--font-urbanist)",
            fontWeight: 500,
            fontSize: "0.875rem",
            color: "var(--color-text-muted)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.375rem",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-muted)";
          }}
        >
          ← {t.back_to_blog}
        </Link>
      </div>

      {/* Cover gradient */}
      <div style={{ maxWidth: "1200px", margin: "2rem auto 0", padding: "0 1.5rem" }}>
        <div
          style={{
            height: "280px",
            borderRadius: "var(--radius-card)",
            background: post.coverGradient ?? "linear-gradient(135deg, #EBF3EE 0%, #c8dfd0 100%)",
            marginBottom: "3rem",
          }}
        />
      </div>

      {/* Article */}
      <article style={{ maxWidth: "720px", margin: "0 auto", padding: "0 1.5rem 6rem" }}>
        {/* Tags */}
        <div style={{ display: "flex", gap: "0.375rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
          {post.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-urbanist)",
                fontWeight: 500,
                fontSize: "0.6875rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-green)",
                background: "var(--color-green-light)",
                padding: "0.2rem 0.5rem",
                borderRadius: "var(--radius-tag)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--font-urbanist)",
            fontWeight: 700,
            fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
            color: "var(--color-text)",
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            marginBottom: "1rem",
          }}
        >
          {pick(post.title, locale)}
        </h1>

        {/* Meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2.5rem",
            paddingBottom: "2rem",
            borderBottom: "1px solid var(--color-border)",
            flexWrap: "wrap",
          }}
        >
          {[
            formatDate(post.date, locale),
            `${post.readingTime} ${t.min_read}`,
            "Edgar Backer",
          ].map((item, i, arr) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-urbanist)",
                  fontSize: "0.875rem",
                  color: "var(--color-text-muted)",
                }}
              >
                {item}
              </span>
              {i < arr.length - 1 && (
                <span
                  style={{
                    width: "3px",
                    height: "3px",
                    borderRadius: "50%",
                    background: "var(--color-border)",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
              )}
            </span>
          ))}
        </div>

        {/* Lead */}
        <p
          style={{
            fontFamily: "var(--font-sora)",
            fontSize: "1.125rem",
            color: "var(--color-text)",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
            fontStyle: "italic",
            opacity: 0.85,
          }}
        >
          {pick(post.description, locale)}
        </p>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {post.sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2
                  style={{
                    fontFamily: "var(--font-urbanist)",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "var(--color-text)",
                    letterSpacing: "-0.015em",
                    marginBottom: "0.75rem",
                  }}
                >
                  {pick(section.heading!, locale)}
                </h2>
              )}
              <p
                style={{
                  fontFamily: "var(--font-sora)",
                  fontSize: "1rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.8,
                }}
              >
                {pick(section.body, locale)}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: "4rem",
            padding: "2rem",
            background: "var(--color-green-light)",
            borderRadius: "var(--radius-card)",
            borderLeft: "3px solid var(--color-green)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-urbanist)",
              fontWeight: 700,
              fontSize: "1rem",
              color: "var(--color-text)",
              marginBottom: "0.5rem",
            }}
          >
            {t.cta_box_title}
          </p>
          <p
            style={{
              fontFamily: "var(--font-sora)",
              fontSize: "0.9375rem",
              color: "var(--color-text-muted)",
              lineHeight: 1.65,
              marginBottom: "1.25rem",
            }}
          >
            {t.cta_box_body}
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontFamily: "var(--font-urbanist)",
              fontWeight: 600,
              fontSize: "0.9375rem",
              color: "var(--color-green)",
              textDecoration: "none",
            }}
          >
            {t.cta_box_link} →
          </Link>
        </div>
      </article>
    </main>
  );
}
