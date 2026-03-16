"use client";

import { Link } from "@/i18n/navigation";
import { type BlogPost, formatDate, pick } from "@/lib/posts";

type Props = {
  posts: BlogPost[];
  locale: string;
  readMoreLabel: string;
  minReadLabel: string;
};

export default function BlogList({ posts, locale, readMoreLabel, minReadLabel }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {posts.map((post, i) => (
        <BlogPostCard
          key={post.slug}
          post={post}
          locale={locale}
          readMoreLabel={readMoreLabel}
          minReadLabel={minReadLabel}
          isFirst={i === 0}
        />
      ))}
    </div>
  );
}

function BlogPostCard({
  post,
  locale,
  readMoreLabel,
  minReadLabel,
  isFirst,
}: {
  post: BlogPost;
  locale: string;
  readMoreLabel: string;
  minReadLabel: string;
  isFirst: boolean;
}) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <article
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "2rem",
          alignItems: "start",
          padding: "2rem 0",
          borderTop: isFirst ? "1px solid var(--color-border)" : undefined,
          borderBottom: "1px solid var(--color-border)",
          transition: "background 0.2s ease, padding 0.2s ease, margin 0.2s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = "var(--color-surface)";
          el.style.marginLeft = "-1.5rem";
          el.style.marginRight = "-1.5rem";
          el.style.paddingLeft = "1.5rem";
          el.style.paddingRight = "1.5rem";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = "transparent";
          el.style.marginLeft = "0";
          el.style.marginRight = "0";
          el.style.paddingLeft = "0";
          el.style.paddingRight = "0";
        }}
      >
        <div>
          {/* Tags */}
          <div style={{ display: "flex", gap: "0.375rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
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
          <h2
            style={{
              fontFamily: "var(--font-urbanist)",
              fontWeight: 700,
              fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
              color: "var(--color-text)",
              letterSpacing: "-0.015em",
              lineHeight: 1.2,
              marginBottom: "0.625rem",
            }}
          >
            {pick(post.title, locale)}
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-sora)",
              fontSize: "0.9375rem",
              color: "var(--color-text-muted)",
              lineHeight: 1.65,
              maxWidth: "600px",
            }}
          >
            {pick(post.description, locale)}
          </p>
        </div>

        {/* Meta */}
        <div
          style={{
            textAlign: "right",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0.375rem",
            paddingTop: "0.25rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-urbanist)",
              fontSize: "0.8125rem",
              color: "var(--color-text-muted)",
              whiteSpace: "nowrap",
            }}
          >
            {formatDate(post.date, locale)}
          </span>
          <span
            style={{
              fontFamily: "var(--font-urbanist)",
              fontSize: "0.75rem",
              color: "var(--color-text-muted)",
              opacity: 0.7,
              whiteSpace: "nowrap",
            }}
          >
            {post.readingTime} {minReadLabel}
          </span>
          <span
            style={{
              fontFamily: "var(--font-urbanist)",
              fontWeight: 600,
              fontSize: "0.8125rem",
              color: "var(--color-green)",
              marginTop: "0.5rem",
            }}
          >
            {readMoreLabel} →
          </span>
        </div>
      </article>
    </Link>
  );
}
