"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// TODO: vervang door echte social URLs
const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/edgar-backer" },
  { label: "GitHub", href: "https://github.com/eaback" },
];

const NAV_LINKS = [
  { key: "work" as const, href: "/work" },
  { key: "about" as const, href: "/about" },
  { key: "blog" as const, href: "/blog" },
];

export default function Footer() {
  const t = useTranslations("nav");
  const tFooter = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        background: "var(--color-surface)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "3.5rem 1.5rem 2rem",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "3rem 2rem",
          alignItems: "start",
        }}
      >
        {/* Left — branding */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-urbanist)",
              fontWeight: 700,
              fontSize: "1.0625rem",
              color: "var(--color-text)",
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            Edgar Backer
          </Link>
          <p
            style={{
              fontFamily: "var(--font-sora)",
              fontSize: "0.875rem",
              color: "var(--color-text-muted)",
              lineHeight: 1.5,
              maxWidth: "260px",
            }}
          >
            {tFooter("tagline")}
          </p>

          {/* Social links */}
          <div style={{ display: "flex", gap: "1.25rem", marginTop: "0.25rem" }}>
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-urbanist)",
                  fontWeight: 500,
                  fontSize: "0.8125rem",
                  color: "var(--color-text-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-muted)";
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — nav */}
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.625rem",
            alignItems: "flex-end",
          }}
        >
          {NAV_LINKS.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              style={{
                fontFamily: "var(--font-urbanist)",
                fontWeight: 500,
                fontSize: "0.875rem",
                color: "var(--color-text-muted)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-muted)";
              }}
            >
              {t(key)}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1.25rem 1.5rem",
          borderTop: "1px solid var(--color-border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-urbanist)",
            fontSize: "0.75rem",
            color: "var(--color-text-muted)",
          }}
        >
          © {year} {tFooter("copyright")}
        </p>
        <p
          style={{
            fontFamily: "var(--font-urbanist)",
            fontSize: "0.75rem",
            color: "var(--color-border)",
          }}
        >
          Built in the Swedish mountains.
        </p>
      </div>

      <style>{`
        @media (max-width: 560px) {
          footer > div:first-child {
            grid-template-columns: 1fr !important;
          }
          footer nav {
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  );
}
