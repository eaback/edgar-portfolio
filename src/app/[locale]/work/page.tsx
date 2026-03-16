import { getTranslations } from "next-intl/server";
import { type Project } from "@/components/ui/ProjectCard";
import WorkGrid from "@/components/sections/WorkGrid";
import { pick, type LocaleString } from "@/lib/projects";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "work" });
  return { title: t("title"), description: t("description") };
}

type ProjectDef = Omit<Project, "description" | "stat" | "cta"> & {
  description: LocaleString;
  stat?: { value: string; label: LocaleString };
  cta: string;
};

const ALL_PROJECTS: ProjectDef[] = [
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
  {
    slug: "ljungdalen-hub",
    title: "Ljungdalen Hub",
    category: "Client · Web",
    description: {
      en: "A central website for Ljungdalen — events, local services and community info in one place. Currently in design phase with mockups ready.",
      nl: "Een centrale website voor Ljungdalen — evenementen, lokale diensten en gemeenschapsinformatie op één plek. Momenteel in ontwerpfase met mockups klaar.",
      sv: "En central webbplats för Ljungdalen — evenemang, lokala tjänster och samhällsinformation på ett ställe. Befinner sig i designfas med klara mockups.",
      de: "Eine zentrale Website für Ljungdalen — Veranstaltungen, lokale Dienste und Community-Infos an einem Ort. Derzeit in der Designphase mit fertigen Mockups.",
      no: "En sentral nettside for Ljungdalen — arrangementer, lokale tjenester og samfunnsinformasjon på ett sted. Er for øyeblikket i designfase med ferdige mockups.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS 4", "Hetzner"],
    image: "/images/projects/ljungdalen-hub/ljungdalen_01_hero.png",
    placeholderGradient: "linear-gradient(135deg, #EBF3EE 0%, #c8dfd0 100%)",
    cta: "",
  },
  {
    slug: "chefmate",
    title: "ChefMate AI",
    category: "Mobile · AI",
    description: {
      en: "Cross-platform Flutter app that generates recipes from fridge photos using Claude Vision API. Clean architecture with Riverpod, GoRouter and local storage.",
      nl: "Cross-platform Flutter-app die recepten genereert van koelkastfoto's met Claude Vision API. Clean architecture met Riverpod, GoRouter en lokale opslag.",
      sv: "Plattformsoberoende Flutter-app som genererar recept från kylskåpsfoton med Claude Vision API. Clean architecture med Riverpod, GoRouter och lokal lagring.",
      de: "Plattformübergreifende Flutter-App, die Rezepte aus Kühlschrankfotos mit Claude Vision API generiert. Clean Architecture mit Riverpod, GoRouter und lokaler Speicherung.",
      no: "Kryssplattform Flutter-app som genererer oppskrifter fra kjøleskapbilder med Claude Vision API. Clean architecture med Riverpod, GoRouter og lokal lagring.",
    },
    stack: ["Flutter", "Dart", "Claude Vision API", "Riverpod", "Hive"],
    image: "/images/projects/chefmate/ChefmateAI.png",
    placeholderGradient: "linear-gradient(135deg, #EBF3EE 0%, #d4e5e0 100%)",
    cta: "",
  },
];

export default async function WorkPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "work" });

  const resolvedProjects: Project[] = ALL_PROJECTS.map((p) => ({
    ...p,
    description: pick(p.description, locale),
    stat: p.stat ? { value: p.stat.value, label: pick(p.stat.label, locale) } : undefined,
  }));

  return (
    <main style={{ paddingTop: "64px" }}>
      <WorkGrid
        label={t("label")}
        title={t("title")}
        description={t("description")}
        projects={resolvedProjects}
        viewCaseStudy={t("view_case_study")}
      />
    </main>
  );
}
