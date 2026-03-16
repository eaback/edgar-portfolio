import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  let homeLabel = "Go home";
  let workLabel = "See my work";

  try {
    const t = await getTranslations("nav");
    workLabel = t("work");
  } catch {
    // fallback to English
  }

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem 1.5rem",
      background: "var(--color-background)",
    }}>
      <div style={{ textAlign: "center", maxWidth: "480px" }}>
        <p style={{
          fontFamily: "var(--font-urbanist)",
          fontWeight: 800,
          fontSize: "clamp(5rem, 15vw, 9rem)",
          color: "var(--color-green-light)",
          lineHeight: 1,
          marginBottom: "0",
          letterSpacing: "-0.04em",
          userSelect: "none",
        }}>
          404
        </p>

        <h1 style={{
          fontFamily: "var(--font-urbanist)",
          fontWeight: 700,
          fontSize: "clamp(1.375rem, 3vw, 1.875rem)",
          color: "var(--color-text)",
          letterSpacing: "-0.02em",
          marginBottom: "0.875rem",
        }}>
          Page not found
        </h1>

        <p style={{
          fontFamily: "var(--font-sora)",
          fontSize: "1rem",
          color: "var(--color-text-muted)",
          lineHeight: 1.65,
          marginBottom: "2.5rem",
        }}>
          This page doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        <div style={{ display: "flex", gap: "0.875rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{
            display: "inline-flex", alignItems: "center", gap: "0.375rem",
            padding: "0.75rem 1.5rem",
            background: "var(--color-green)", color: "#fff",
            borderRadius: "var(--radius-button)",
            fontFamily: "var(--font-urbanist)", fontWeight: 700, fontSize: "0.9375rem",
            textDecoration: "none",
          }}>
            ← {homeLabel}
          </Link>
          <Link href="/work" style={{
            display: "inline-flex", alignItems: "center",
            padding: "0.75rem 1.5rem",
            background: "transparent", color: "var(--color-text)",
            border: "1.5px solid var(--color-border)",
            borderRadius: "var(--radius-button)",
            fontFamily: "var(--font-urbanist)", fontWeight: 600, fontSize: "0.9375rem",
            textDecoration: "none",
          }}>
            {workLabel}
          </Link>
        </div>
      </div>
    </main>
  );
}
