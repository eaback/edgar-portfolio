import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { CASE_STUDIES, pick } from "@/lib/projects";
import CaseStudy from "@/components/sections/CaseStudy";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug, locale } = await params;
  const project = CASE_STUDIES[slug];
  if (!project) return {};
  return {
    title: project.title,
    description: pick(project.summary, locale),
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug, locale } = await params;
  const project = CASE_STUDIES[slug];

  if (!project) notFound();

  const t = await getTranslations({ locale, namespace: "work" });

  return (
    <main style={{ paddingTop: "64px" }}>
      <CaseStudy
        project={project}
        locale={locale}
        visitSiteLabel={t("visit_site")}
        stackLabel={t("stack_label")}
        roleLabel={t("role_label")}
        periodLabel={t("period_label")}
      />
    </main>
  );
}
