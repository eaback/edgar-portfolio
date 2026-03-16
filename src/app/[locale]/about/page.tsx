import { getTranslations } from "next-intl/server";
import AboutContent from "@/components/sections/AboutContent";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("title"), description: t("description") };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  const tHome = await getTranslations({ locale, namespace: "home" });

  return (
    <AboutContent
      t={{
        hero_label: t("hero_label"),
        hero_headline: t("hero_headline"),
        hero_tagline: t("hero_tagline"),
        available_badge: t("available_badge"),
        location: t("location"),
        story_label: t("story_label"),
        story_p1: t("story_p1"),
        story_p2: t("story_p2"),
        skills_label: t("skills_label"),
        skills_frontend: t("skills_frontend"),
        skills_backend: t("skills_backend"),
        skills_infra: t("skills_infra"),
        skills_mobile: t("skills_mobile"),
        skills_ai: t("skills_ai"),
        focus_label: t("focus_label"),
        focus_1_title: t("focus_1_title"),
        focus_1_body: t("focus_1_body"),
        focus_2_title: t("focus_2_title"),
        focus_2_body: t("focus_2_body"),
        focus_3_title: t("focus_3_title"),
        focus_3_body: t("focus_3_body"),
        focus_4_title: t("focus_4_title"),
        focus_4_body: t("focus_4_body"),
        languages_label: t("languages_label"),
        edu_label: t("edu_label"),
        edu_1_degree: t("edu_1_degree"),
        edu_1_school: t("edu_1_school"),
        edu_1_year: t("edu_1_year"),
        edu_2_degree: t("edu_2_degree"),
        edu_2_school: t("edu_2_school"),
        edu_2_year: t("edu_2_year"),
        cta_label: t("cta_label"),
        cta_headline: t("cta_headline"),
        cta_body: t("cta_body"),
        cta_primary_book: tHome("cta_primary_book"),
        cta_secondary_email: tHome("cta_secondary_email"),
      }}
    />
  );
}
