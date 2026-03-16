"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";

const LOCALES = [
  { code: "en", label: "EN" },
  { code: "nl", label: "NL" },
  { code: "sv", label: "SV" },
  { code: "de", label: "DE" },
  { code: "no", label: "NO" },
];

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Transparent overlay only on the homepage (with hero photo behind it)
  const isHomepage =
    pathname === "/" ||
    /^\/(nl|sv|de|no)\/?$/.test(pathname);
  const isTransparent = isHomepage && !scrolled && !menuOpen;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease",
        background: isTransparent
          ? "transparent"
          : "rgba(247, 244, 239, 0.96)",
        backdropFilter: isTransparent ? "none" : "blur(16px)",
        WebkitBackdropFilter: isTransparent ? "none" : "blur(16px)",
        boxShadow: isTransparent ? "none" : "0 1px 0 0 rgba(26,25,23,0.12), 0 2px 8px 0 rgba(26,25,23,0.04)",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-urbanist)",
            fontWeight: 700,
            fontSize: "1.0625rem",
            letterSpacing: "-0.01em",
            color: isTransparent ? "#ffffff" : "var(--color-text)",
            transition: "color 0.3s ease",
            textDecoration: "none",
          }}
        >
          Edgar Backer
        </Link>

        {/* Desktop nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
          className="desktop-nav"
        >
          {(["work", "about", "blog"] as const).map((key) => (
            <Link
              key={key}
              href={`/${key}`}
              style={{
                fontFamily: "var(--font-urbanist)",
                fontWeight: 500,
                fontSize: "0.9375rem",
                color: isTransparent ? "rgba(255,255,255,0.85)" : "var(--color-text-muted)",
                padding: "0.4rem 0.75rem",
                borderRadius: "6px",
                transition: "color 0.2s ease, background 0.2s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = isTransparent ? "#ffffff" : "var(--color-text)";
                if (!isTransparent) el.style.background = "rgba(26,25,23,0.05)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = isTransparent ? "rgba(255,255,255,0.85)" : "var(--color-text-muted)";
                el.style.background = "transparent";
              }}
            >
              {t(key)}
            </Link>
          ))}

          {/* Divider */}
          <div
            style={{
              width: "1px",
              height: "16px",
              background: isTransparent ? "rgba(255,255,255,0.25)" : "var(--color-border)",
              margin: "0 0.5rem",
              transition: "background 0.3s ease",
            }}
          />

          {/* Locale switcher */}
          <LocaleSwitcher isTransparent={isTransparent} currentLocale={locale} />

          {/* CTA */}
          <Link
            href="/contact"
            style={{
              marginLeft: "0.5rem",
              padding: "0.5rem 1.125rem",
              background: isTransparent ? "rgba(255,255,255,0.15)" : "var(--color-green)",
              border: isTransparent ? "1px solid rgba(255,255,255,0.3)" : "none",
              backdropFilter: isTransparent ? "blur(8px)" : "none",
              color: "#ffffff",
              borderRadius: "var(--radius-button)",
              fontFamily: "var(--font-urbanist)",
              fontWeight: 600,
              fontSize: "0.875rem",
              transition: "background 0.2s ease",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = isTransparent ? "rgba(255,255,255,0.25)" : "#2d5440";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = isTransparent ? "rgba(255,255,255,0.15)" : "var(--color-green)";
            }}
          >
            {t("contact")}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="mobile-menu-btn"
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "8px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: isTransparent ? "#ffffff" : "var(--color-text)",
                borderRadius: "1px",
                transition: "transform 0.2s ease, opacity 0.2s ease",
                transform:
                  menuOpen
                    ? i === 0
                      ? "translateY(7px) rotate(45deg)"
                      : i === 2
                      ? "translateY(-7px) rotate(-45deg)"
                      : "scaleX(0)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(247,244,239,0.97)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid var(--color-border)",
            padding: "1rem 1.5rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {(["work", "about", "blog"] as const).map((key) => (
            <Link
              key={key}
              href={`/${key}`}
              style={{
                fontFamily: "var(--font-urbanist)",
                fontWeight: 500,
                fontSize: "1.0625rem",
                color: "var(--color-text)",
                padding: "0.75rem 0.5rem",
                borderBottom: "1px solid var(--color-border)",
                textDecoration: "none",
              }}
            >
              {t(key)}
            </Link>
          ))}
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {LOCALES.map(({ code, label }) => (
              <LocaleLink key={code} code={code} label={label} current={locale} />
            ))}
          </div>
          <Link
            href="/contact"
            style={{
              marginTop: "1rem",
              padding: "0.75rem 1.5rem",
              background: "var(--color-green)",
              color: "#fff",
              borderRadius: "var(--radius-button)",
              fontFamily: "var(--font-urbanist)",
              fontWeight: 600,
              fontSize: "0.9375rem",
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            {t("contact")}
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

function LocaleSwitcher({
  isTransparent,
  currentLocale,
}: {
  isTransparent: boolean;
  currentLocale: string;
}) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {LOCALES.map(({ code, label }) => (
        <LocaleLink
          key={code}
          code={code}
          label={label}
          current={currentLocale}
          isTransparent={isTransparent}
        />
      ))}
    </div>
  );
}

function LocaleLink({
  code,
  label,
  current,
  isTransparent,
}: {
  code: string;
  label: string;
  current: string;
  isTransparent?: boolean;
}) {
  const isActive = code === current;
  const pathname = usePathname();

  // Strip current locale prefix to get the path segment
  const localePattern = /^\/(en|nl|sv|de|no)(\/|$)/;
  const pathWithoutLocale = pathname.replace(localePattern, "/") || "/";

  return (
    <Link
      href={pathWithoutLocale}
      locale={code}
      style={{
        fontFamily: "var(--font-urbanist)",
        fontWeight: isActive ? 700 : 400,
        fontSize: "0.75rem",
        letterSpacing: "0.05em",
        color: isActive
          ? isTransparent
            ? "#ffffff"
            : "var(--color-text)"
          : isTransparent
          ? "rgba(255,255,255,0.5)"
          : "var(--color-text-muted)",
        padding: "0.25rem 0.3rem",
        textDecoration: "none",
        transition: "color 0.2s ease",
        borderBottom: isActive
          ? `1.5px solid ${isTransparent ? "#ffffff" : "var(--color-green)"}`
          : "1.5px solid transparent",
      }}
    >
      {label}
    </Link>
  );
}
