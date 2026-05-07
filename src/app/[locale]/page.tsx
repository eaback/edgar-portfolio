import { getTranslations } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import MiniAbout from "@/components/sections/MiniAbout";
import CallToAction from "@/components/sections/CallToAction";
import { type Project } from "@/components/ui/ProjectCard";
import { pick, type LocaleString } from "@/lib/projects";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

type FeaturedProjectDef = Omit<Project, "description" | "stat" | "cta"> & {
  description: LocaleString;
  stat?: { value: string; label: LocaleString };
  cta: string;
};

const FEATURED_PROJECTS: FeaturedProjectDef[] = [
  {
    slug: "de-bergen",
    title: "De Bergen — Stugvärd Website",
    category: "Client · Web",
    description: {
      en: "Professional website for a Swedish cabin caretaker company. From zero online presence to the go-to service provider in the region.",
      nl: "Professionele website voor een Zweeds stugvärd-bedrijf. Van nul digitale aanwezigheid naar de bekendste serviceprovider in de regio.",
      sv: "Professionell webbplats för ett svenskt stugvärdsföretag. Från noll digital närvaro till regionens mest anlitade serviceleverantör.",
      de: "Professionelle Website für ein schwedisches Stugvärd-Unternehmen. Von null Online-Präsenz zum gefragtesten Serviceanbieter der Region.",
      no: "Profesjonell nettside for et svensk stugvärdsselskap. Fra null digital tilstedeværelse til regionens mest brukte tjenesteleverandør.",
    },
    stat: {
      value: "+83%",
      label: { en: "client growth", nl: "klantgroei", sv: "kundtillväxt", de: "Kundenwachstum", no: "kundevekst" },
    },
    stack: ["Next.js", "Tailwind CSS", "Firebase", "Vercel"],
    image: "/images/projects/de-bergen/debergen.png",
    placeholderGradient: "linear-gradient(135deg, #EBF3EE 0%, #c8dfd0 100%)",
    cta: "",
  },
  {
    slug: "destination-ljungdalen",
    title: "Destination Ljungdalen",
    category: "Platform · Tourism",
    description: {
      en: "Full-stack destination platform for a Swedish mountain village — bookings, cabin management, merchandise and multi-role admin. EU-first infrastructure.",
      nl: "Fullstack-destinatieplatform voor een Zweeds bergdorp — boekingen, huisbeheer, merchandise en multi-role admin. EU-first infrastructuur.",
      sv: "Fullstack-destinationsplattform för en svensk fjällby — bokningar, stughantering, merchandise och admin med flera roller. EU-first infrastruktur.",
      de: "Full-Stack-Destinationsplattform für ein schwedisches Bergdorf — Buchungen, Hüttenverwaltung, Merchandise und Multi-Rollen-Admin. EU-first Infrastruktur.",
      no: "Fullstack-destinasjonsplattform for en svensk fjellby — bookinger, hytteadministrasjon, merchandise og multi-rolle admin. EU-first infrastruktur.",
    },
    stat: {
      value: "6",
      label: { en: "user roles", nl: "gebruikersrollen", sv: "användarroller", de: "Benutzerrollen", no: "brukerroller" },
    },
    stack: ["Next.js 15", "PostgreSQL", "NextAuth", "Mollie", "Hetzner"],
    image: "/images/projects/destination-ljungdalen/Dest-Ljungdalen.png",
    placeholderGradient: "linear-gradient(135deg, #EBF3EE 0%, #b8d4c4 100%)",
    cta: "",
  },
  {
    slug: "devtop",
    title: "DevTop — AI for Freelancers",
    category: "SaaS · AI",
    description: {
      en: "AI-powered project management for freelance developers. Automated proposals, GitHub PR reviews and invoicing — built with Claude API and Stripe.",
      nl: "AI-gestuurd projectmanagement voor freelance developers. Geautomatiseerde voorstellen, GitHub PR-reviews en facturering — gebouwd met Claude API en Stripe.",
      sv: "AI-driven projektledning för frilansutvecklare. Automatiserade offerter, GitHub PR-recensioner och fakturering — byggt med Claude API och Stripe.",
      de: "KI-gestütztes Projektmanagement für Freelance-Entwickler. Automatisierte Angebote, GitHub PR-Reviews und Rechnungsstellung — mit Claude API und Stripe.",
      no: "AI-drevet prosjektledelse for frilansutviklere. Automatiserte forslag, GitHub PR-gjennomganger og fakturering — bygget med Claude API og Stripe.",
    },
    stack: ["Next.js", "PostgreSQL", "Claude API", "Stripe", "GitHub API"],
    image: "/images/projects/devtop/Devtop.png",
    placeholderGradient: "linear-gradient(135deg, #FAF0E9 0%, #f0d8c5 100%)",
    cta: "",
  },
];

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  const tWork = await getTranslations({ locale, namespace: "work" });

  const resolvedProjects: Project[] = FEATURED_PROJECTS.map((p) => ({
    ...p,
    description: pick(p.description, locale),
    stat: p.stat ? { value: p.stat.value, label: pick(p.stat.label, locale) } : undefined,
  }));

  return (
    <main>
      <Hero
        headline={t("headline")}
        subline={t("subline")}
        ctaPrimary={t("cta_primary")}
        ctaSecondary={t("cta_secondary")}
      />

      <FeaturedProjects
        label={t("featured_label")}
        headline={t("featured_headline")}
        viewAllLabel={tWork("title")}
        viewCaseStudy={tWork("view_case_study")}
        projects={resolvedProjects}
      />

      <MiniAbout
        label={t("about_label")}
        headline={t("about_headline")}
        body={t("about_body")}
        ctaLabel={t("about_cta")}
        ctaHref="/about"
        stats={[
          { value: "6+", label: t("about_stat_projects") },
          { value: "5+", label: t("about_stat_clients") },
          { value: "+83%", label: t("about_stat_growth") },
          { value: "3", label: t("about_stat_countries") },
        ]}
      />

      <CallToAction
        label={t("cta_label")}
        headline={t("cta_headline")}
        body={t("cta_body")}
        ctaPrimary={t("cta_primary_book")}
        ctaSecondary={t("cta_secondary_email")}
        emailAddress="contact@edgarbacker.dev"
      />
    </main>
  );
}
