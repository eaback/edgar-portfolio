import { getTranslations } from "next-intl/server";
import { POSTS } from "@/lib/posts";
import BlogList from "@/components/sections/BlogList";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return { title: t("title"), description: t("description") };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  return (
    <main style={{ paddingTop: "64px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
        {/* Header */}
        <div style={{ marginBottom: "3.5rem", maxWidth: "560px" }}>
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
            {t("title")}
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
            {t("description")}
          </h1>
        </div>

        <BlogList posts={POSTS} locale={locale} readMoreLabel={t("read_more")} minReadLabel={t("min_read")} />
      </div>
    </main>
  );
}
