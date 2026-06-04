import { type LocaleString } from "./posts";
export { pick } from "./posts";
export type { LocaleString } from "./posts";

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  period: string;
  role: string;
  stack: string[];
  liveUrl?: string;
  summary: LocaleString;
  problem: LocaleString;
  approach: LocaleString[];
  result: LocaleString;
  resultStats?: { value: string; label: LocaleString }[];
  coverImage?: string;
  images?: { src: string; caption?: string }[];
  nextSlug?: string;
  nextTitle?: string;
};

export const CASE_STUDIES: Record<string, CaseStudy> = {
  "de-bergen": {
    slug: "de-bergen",
    title: "De Bergen — Stugvärd Website",
    category: "Client · Web",
    period: "December 2024",
    role: "Solo Fullstack Developer",
    stack: ["Next.js", "Tailwind CSS", "React", "Firebase", "Vercel"],
    liveUrl: "https://www.debergen.se",
    summary: {
      en: "De Bergen is a cabin caretaker company in the Swedish mountains. They had no digital presence and relied entirely on word-of-mouth. I built their website from scratch — design, development and deployment.",
      nl: "De Bergen is een stugvärd-bedrijf in de Zweedse bergen. Ze hadden geen digitale aanwezigheid en vertrouwden volledig op mond-tot-mondreclame. Ik bouwde hun website van nul — design, development en deployment.",
      sv: "De Bergen är ett stugvärdsföretag i de svenska fjällen. De hade ingen digital närvaro och förlitade sig helt på muntliga rekommendationer. Jag byggde deras webbplats från grunden — design, utveckling och driftsättning.",
      de: "De Bergen ist ein Stugvärd-Unternehmen in den schwedischen Bergen. Sie hatten keine digitale Präsenz und verließen sich vollständig auf Mundpropaganda. Ich baute ihre Website von Grund auf — Design, Entwicklung und Deployment.",
      no: "De Bergen er et stugvärdsselskap i de svenske fjellene. De hadde ingen digital tilstedeværelse og var fullstendig avhengige av jungeltelegrafen. Jeg bygde nettsiden deres fra bunnen av — design, utvikling og publisering.",
    },
    problem: {
      en: "The company had 30 clients but no way to be found online. Every new client came through personal referrals, which limited growth. There was no way to showcase their services, explain their pricing or build trust before a first contact.",
      nl: "Het bedrijf had 30 klanten maar was online niet vindbaar. Elke nieuwe klant kwam via persoonlijke aanbevelingen, wat de groei beperkte. Er was geen manier om hun diensten te tonen, de prijzen uit te leggen of vertrouwen op te bouwen voor een eerste contact.",
      sv: "Företaget hade 30 kunder men gick inte att hitta online. Varje ny kund kom via personliga rekommendationer, vilket begränsade tillväxten. Det fanns inget sätt att visa upp deras tjänster, förklara prissättningen eller bygga förtroende innan en första kontakt.",
      de: "Das Unternehmen hatte 30 Kunden, war aber online nicht auffindbar. Jeder neue Kunde kam über persönliche Empfehlungen, was das Wachstum begrenzte. Es gab keine Möglichkeit, ihre Dienstleistungen zu präsentieren, die Preisgestaltung zu erklären oder Vertrauen vor einem ersten Kontakt aufzubauen.",
      no: "Selskapet hadde 30 kunder, men ingen måte å bli funnet på nettet. Hver ny kunde kom gjennom personlige anbefalinger, noe som begrenset veksten. Det var ingen måte å vise frem tjenestene deres, forklare prisene eller bygge tillit før en første kontakt.",
    },
    approach: [
      {
        en: "Designed and built a responsive multi-page site with Tailwind CSS — services overview, pricing tiers and a direct contact form",
        nl: "Een responsive meersidse website ontworpen en gebouwd met Tailwind CSS — overzicht van diensten, prijsniveaus en een direct contactformulier",
        sv: "Designade och byggde en responsiv flersidessajt med Tailwind CSS — tjänsteöversikt, prisnivåer och ett direktkontaktformulär",
        de: "Eine responsive mehrseitige Website mit Tailwind CSS entworfen und entwickelt — Dienstleistungsübersicht, Preisstufen und ein direktes Kontaktformular",
        no: "Designet og bygde en responsiv flersidig nettside med Tailwind CSS — tjenesteoversikt, prisnivåer og et direktekontaktskjema",
      },
      {
        en: "Integrated Firebase for form submissions with email notifications",
        nl: "Firebase geïntegreerd voor formulierinzendingen met e-mailmeldingen",
        sv: "Integrerade Firebase för formulärinlämningar med e-postmeddelanden",
        de: "Firebase für Formularübermittlungen mit E-Mail-Benachrichtigungen integriert",
        no: "Integrerte Firebase for skjemainnsendinger med e-postvarsler",
      },
      {
        en: "Implemented SEO fundamentals: structured metadata, Open Graph tags, sitemap and semantic HTML",
        nl: "SEO-basisprincipes geïmplementeerd: gestructureerde metadata, Open Graph-tags, sitemap en semantische HTML",
        sv: "Implementerade SEO-grunder: strukturerad metadata, Open Graph-taggar, sitemap och semantisk HTML",
        de: "SEO-Grundlagen implementiert: strukturierte Metadaten, Open-Graph-Tags, Sitemap und semantisches HTML",
        no: "Implementerte SEO-grunnleggende: strukturert metadata, Open Graph-tagger, sitemap og semantisk HTML",
      },
      {
        en: "Deployed on Vercel with custom domain, automatic HTTPS and edge caching",
        nl: "Gedeployd op Vercel met eigen domein, automatische HTTPS en edge-caching",
        sv: "Driftsatt på Vercel med eget domän, automatisk HTTPS och edge-cachning",
        de: "Auf Vercel mit eigener Domain, automatischem HTTPS und Edge-Caching deployt",
        no: "Distribuert på Vercel med egendefinert domene, automatisk HTTPS og edge-caching",
      },
      {
        en: "Optimised for local search — Ljungdalen-specific keywords and Google Business integration guidance",
        nl: "Geoptimaliseerd voor lokale zoekopdrachten — Ljungdalen-specifieke zoekwoorden en begeleiding bij Google Business-integratie",
        sv: "Optimerat för lokal sökning — Ljungdalen-specifika sökord och vägledning för Google Business-integration",
        de: "Für die lokale Suche optimiert — Ljungdalen-spezifische Keywords und Beratung zur Google Business-Integration",
        no: "Optimalisert for lokalt søk — Ljungdalen-spesifikke nøkkelord og veiledning for Google Business-integrasjon",
      },
    ],
    result: {
      en: "Within two years of launch, De Bergen grew from 30 to 55 active clients — an 83% increase. Revenue doubled in the same period. The site became their primary discovery channel and helped them land a major new client for snow clearing and cleaning services.",
      nl: "Binnen twee jaar na de lancering groeide De Bergen van 30 naar 55 actieve klanten — een toename van 83%. De omzet verdubbelde in dezelfde periode. De website werd hun primaire ontdekkingskanaal en hielp hen een grote nieuwe klant binnen te halen voor sneeuwruimen en schoonmaakdiensten.",
      sv: "Inom två år efter lansering växte De Bergen från 30 till 55 aktiva kunder — en ökning med 83%. Omsättningen fördubblades under samma period. Webbplatsen blev deras primära inkommenskanal och hjälpte dem att landa en stor ny kund för snöröjning och städtjänster.",
      de: "Innerhalb von zwei Jahren nach dem Launch wuchs De Bergen von 30 auf 55 aktive Kunden — ein Anstieg von 83%. Der Umsatz verdoppelte sich im gleichen Zeitraum. Die Website wurde ihr primärer Entdeckungskanal und half ihnen, einen großen neuen Kunden für Schneeräumungs- und Reinigungsdienstleistungen zu gewinnen.",
      no: "Innen to år etter lansering vokste De Bergen fra 30 til 55 aktive kunder — en økning på 83%. Inntektene ble doblet i samme periode. Nettsiden ble deres primære oppdagelseskanal og hjalp dem med å lande en stor ny kunde for snørydding og rengjøringstjenester.",
    },
    resultStats: [
      { value: "+83%", label: { en: "client growth", nl: "klantgroei", sv: "kundtillväxt", de: "Kundenwachstum", no: "kundevekst" } },
      { value: "2×", label: { en: "revenue", nl: "omzet", sv: "omsättning", de: "Umsatz", no: "inntekt" } },
      { value: "+25", label: { en: "new clients", nl: "nieuwe klanten", sv: "nya kunder", de: "neue Kunden", no: "nye kunder" } },
    ],
    coverImage: "/images/projects/de-bergen/debergen.png",
    nextSlug: "destination-ljungdalen",
    nextTitle: "Destination Ljungdalen",
  },

  "destination-ljungdalen": {
    slug: "destination-ljungdalen",
    title: "Destination Ljungdalen",
    category: "Platform · Tourism",
    period: "August 2024 — present",
    role: "Solo Fullstack Developer",
    stack: ["Next.js 15", "TypeScript", "PostgreSQL (Aiven)", "NextAuth.js", "Mollie Payments", "Bunny CDN", "Coolify", "Hetzner VPS"],
    summary: {
      en: "Ljungdalen had no regional booking platform — tourists used Booking.com and local providers had no collective digital presence. I built a full-stack destination platform from the ground up: bookings, cabin management, merchandise and a multi-role admin system.",
      nl: "Ljungdalen had geen regionaal boekingsplatform — toeristen gebruikten Booking.com en lokale aanbieders hadden geen gezamenlijke digitale aanwezigheid. Ik bouwde een volledig fullstack-destinatieplatform van nul: boekingen, huisbeheer, merchandise en een multi-role-adminsysteem.",
      sv: "Ljungdalen saknade en regional bokningsplattform — turister använde Booking.com och lokala aktörer hade ingen gemensam digital närvaro. Jag byggde en fullstack-destinationsplattform från grunden: bokningar, stughantering, merchandise och ett adminssystem med flera roller.",
      de: "Ljungdalen hatte keine regionale Buchungsplattform — Touristen nutzten Booking.com und lokale Anbieter hatten keine gemeinsame digitale Präsenz. Ich baute eine Full-Stack-Destinationsplattform von Grund auf: Buchungen, Hüttenverwaltung, Merchandise und ein Multi-Rollen-Adminsystem.",
      no: "Ljungdalen hadde ingen regional bookingplattform — turister brukte Booking.com og lokale tilbydere hadde ingen felles digital tilstedeværelse. Jeg bygde en fullstack-destinasjonsplattform fra bunnen av: bookinger, hytteadministrasjon, merchandise og et administrasjonssystem med flere roller.",
    },
    problem: {
      en: "The mountain village of Ljungdalen had no shared digital infrastructure. Cabin owners paid high commissions to external platforms, tourists had no single source of truth for activities and accommodation, and there was no way to build a regional brand.",
      nl: "Het bergdorp Ljungdalen had geen gedeelde digitale infrastructuur. Huiseigenaren betaalden hoge commissies aan externe platforms, toeristen hadden geen centrale informatiebron voor activiteiten en accommodatie, en er was geen manier om een regionaal merk op te bouwen.",
      sv: "Bergets Ljungdalen saknade gemensam digital infrastruktur. Stugägare betalade höga provisioner till externa plattformar, turister hade ingen enda informationskälla för aktiviteter och boende och det fanns inget sätt att bygga ett regionalt varumärke.",
      de: "Das Bergdorf Ljungdalen hatte keine gemeinsame digitale Infrastruktur. Hüttenbesitzer zahlten hohe Provisionen an externe Plattformen, Touristen hatten keine einheitliche Informationsquelle für Aktivitäten und Unterkunft und es gab keine Möglichkeit, eine regionale Marke aufzubauen.",
      no: "Fjellbyen Ljungdalen hadde ingen felles digital infrastruktur. Hytteeiere betalte høye provisjoner til eksterne plattformer, turister hadde ingen enkelt informasjonskilde for aktiviteter og overnatting, og det var ingen måte å bygge et regionalt merke.",
    },
    approach: [
      {
        en: "Multi-role authentication system (guest / cabin owner / admin) with NextAuth.js — each role gets a different dashboard and permission set",
        nl: "Multi-role authenticatiesysteem (gast / huiseigenaar / beheerder) met NextAuth.js — elke rol krijgt een ander dashboard en rechtenset",
        sv: "Autentiseringssystem med flera roller (gäst / stugägare / admin) med NextAuth.js — varje roll får ett eget dashboard och behörighetsuppsättning",
        de: "Multi-Rollen-Authentifizierungssystem (Gast / Hüttenbesitzer / Admin) mit NextAuth.js — jede Rolle erhält ein anderes Dashboard und Berechtigungsset",
        no: "Multi-rolle autentiseringssystem (gjest / hytteeier / admin) med NextAuth.js — hver rolle får et annerledes dashboard og rettighetssett",
      },
      {
        en: "Multi-step booking flow: date picker → extra services → guest details → Mollie payment (iDEAL, Swish, Klarna, credit card)",
        nl: "Meerstaps boekingsflow: datumkiezer → extra diensten → gastgegevens → Mollie-betaling (iDEAL, Swish, Klarna, creditcard)",
        sv: "Flerstegigt bokningsflöde: datumväljare → extratjänster → gästuppgifter → Mollie-betalning (iDEAL, Swish, Klarna, kreditkort)",
        de: "Mehrstufiger Buchungsablauf: Datumsauswahl → Zusatzleistungen → Gastdaten → Mollie-Zahlung (iDEAL, Swish, Klarna, Kreditkarte)",
        no: "Flertrinnsbookingflyt: datevelger → ekstratjenester → gjesteopplysninger → Mollie-betaling (iDEAL, Swish, Klarna, kredittkort)",
      },
      {
        en: "Cabin owner onboarding and approval flow — self-service registration, pending review, activation",
        nl: "Onboarding en goedkeuringsflow voor huiseigenaren — zelfregistratie, beoordeling in behandeling, activering",
        sv: "Onboarding och godkännandeflöde för stugägare — självbetjäningsregistrering, granskning pågår, aktivering",
        de: "Onboarding und Genehmigungsablauf für Hüttenbesitzer — Self-Service-Registrierung, ausstehende Überprüfung, Aktivierung",
        no: "Onboarding og godkjenningsflyt for hytteeiere — selvbetjeningsregistrering, venter på gjennomgang, aktivering",
      },
      {
        en: "Merchandise webshop integrated into the same platform",
        nl: "Merchandise-webshop geïntegreerd in hetzelfde platform",
        sv: "Merchandise-webshop integrerad i samma plattform",
        de: "Merchandise-Webshop in dieselbe Plattform integriert",
        no: "Merchandise-nettbutikk integrert i samme plattform",
      },
      {
        en: "Migrated from MongoDB to PostgreSQL (Aiven, Finland) for EU-first data compliance and better relational integrity",
        nl: "Gemigreerd van MongoDB naar PostgreSQL (Aiven, Finland) voor EU-first datanaleving en betere relationele integriteit",
        sv: "Migrerade från MongoDB till PostgreSQL (Aiven, Finland) för EU-first dataefterlevnad och bättre relationell integritet",
        de: "Von MongoDB zu PostgreSQL (Aiven, Finnland) migriert für EU-first Daten-Compliance und bessere relationale Integrität",
        no: "Migrerte fra MongoDB til PostgreSQL (Aiven, Finland) for EU-first datatilpasning og bedre relasjonell integritet",
      },
      {
        en: "Deployed on Hetzner VPS via Coolify, static assets on Bunny CDN — fully EU infrastructure",
        nl: "Gedeployd op Hetzner VPS via Coolify, statische assets op Bunny CDN — volledig EU-infrastructuur",
        sv: "Driftsatt på Hetzner VPS via Coolify, statiska tillgångar på Bunny CDN — fullt EU-infrastruktur",
        de: "Auf Hetzner VPS via Coolify deployt, statische Assets auf Bunny CDN — vollständig EU-Infrastruktur",
        no: "Distribuert på Hetzner VPS via Coolify, statiske filer på Bunny CDN — fullt EU-infrastruktur",
      },
      {
        en: "Content Security Policy, WebSocket configuration and GDPR-compliant data handling",
        nl: "Content Security Policy, WebSocket-configuratie en GDPR-conforme gegevensverwerking",
        sv: "Content Security Policy, WebSocket-konfiguration och GDPR-kompatibel datahantering",
        de: "Content Security Policy, WebSocket-Konfiguration und DSGVO-konforme Datenverarbeitung",
        no: "Content Security Policy, WebSocket-konfigurasjon og GDPR-kompatibel datahåndtering",
      },
    ],
    result: {
      en: "First regional booking platform in this market segment. Fully EU-compliant infrastructure (Hetzner, Aiven, Bunny). Actively in development — potential reference case for other Scandinavian tourism regions.",
      nl: "Eerste regionale boekingsplatform in dit marktsegment. Volledig EU-conforme infrastructuur (Hetzner, Aiven, Bunny). Actief in ontwikkeling — potentieel referentiegeval voor andere Scandinavische toeristische regio's.",
      sv: "Första regionala bokningsplattformen i detta marknadssegment. Fullt EU-kompatibel infrastruktur (Hetzner, Aiven, Bunny). Aktivt under utveckling — potentiellt referensfall för andra skandinaviska turismregioner.",
      de: "Erste regionale Buchungsplattform in diesem Marktsegment. Vollständig EU-konforme Infrastruktur (Hetzner, Aiven, Bunny). Aktiv in Entwicklung — potenzieller Referenzfall für andere skandinavische Tourismusregionen.",
      no: "Første regionale bookingplattform i dette markedssegmentet. Fullt EU-kompatibel infrastruktur (Hetzner, Aiven, Bunny). Aktivt under utvikling — potensielt referansecase for andre skandinaviske turistregioner.",
    },
    resultStats: [
      { value: "6", label: { en: "user roles", nl: "gebruikersrollen", sv: "användarroller", de: "Benutzerrollen", no: "brukerroller" } },
      { value: "EU", label: { en: "infrastructure", nl: "infrastructuur", sv: "infrastruktur", de: "Infrastruktur", no: "infrastruktur" } },
      { value: "4", label: { en: "payment methods", nl: "betaalmethoden", sv: "betalningsmetoder", de: "Zahlungsmethoden", no: "betalingsmetoder" } },
    ],
    coverImage: "/images/projects/destination-ljungdalen/Dest-Ljungdalen.png",
    nextSlug: "devtop",
    nextTitle: "DevTop",
  },

  "devtop": {
    slug: "devtop",
    title: "DevTop — AI for Freelancers",
    category: "SaaS · AI",
    period: "October 2024 — present",
    role: "Solo Fullstack Developer + Product Owner",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Claude API", "GitHub API"],
    summary: {
      en: "Freelance developers juggle projects, client communication and invoicing across multiple disconnected tools. DevTop is an AI-powered project management platform built specifically for developers — with automated proposals, GitHub PR reviews and invoicing.",
      nl: "Freelance developers balanceren projecten, klantcommunicatie en facturering over meerdere losse tools. DevTop is een AI-gestuurd projectmanagementplatform dat specifiek voor developers is gebouwd — met geautomatiseerde voorstellen, GitHub PR-reviews en facturering.",
      sv: "Frilansutvecklare jonglerar med projekt, kundkommunikation och fakturering i flera separata verktyg. DevTop är en AI-driven projektledningsplattform byggd specifikt för utvecklare — med automatiserade offerter, GitHub PR-recensioner och fakturering.",
      de: "Freelance-Entwickler jonglieren Projekte, Kundenkommunikation und Rechnungsstellung über mehrere unverbundene Tools. DevTop ist eine KI-gestützte Projektmanagement-Plattform, die speziell für Entwickler entwickelt wurde — mit automatisierten Angeboten, GitHub PR-Reviews und Rechnungsstellung.",
      no: "Frilansutviklere jonglerer prosjekter, kundekommunikasjon og fakturering på tvers av flere usammenhengende verktøy. DevTop er en AI-drevet prosjektstyringsplattform bygget spesielt for utviklere — med automatiserte forslag, GitHub PR-gjennomganger og fakturering.",
    },
    problem: {
      en: "No EU-compliant alternative existed that was purpose-built for developers. Existing tools (Notion, Trello, FreshBooks) are generic and don't understand the developer workflow. Switching between tools wastes hours every week.",
      nl: "Er bestond geen EU-conform alternatief dat specifiek voor developers was gebouwd. Bestaande tools (Notion, Trello, FreshBooks) zijn generiek en begrijpen de developerworkflow niet. Schakelen tussen tools kost elke week uren.",
      sv: "Inget EU-kompatibelt alternativ existerade som var specifikt byggt för utvecklare. Befintliga verktyg (Notion, Trello, FreshBooks) är generiska och förstår inte utvecklararbetsflödet. Att byta mellan verktyg slösar timmar varje vecka.",
      de: "Es existierte keine EU-konforme Alternative, die speziell für Entwickler entwickelt wurde. Bestehende Tools (Notion, Trello, FreshBooks) sind generisch und verstehen den Entwickler-Workflow nicht. Der Wechsel zwischen Tools verschwendet jede Woche Stunden.",
      no: "Det fantes ingen EU-kompatibelt alternativ som var spesielt bygget for utviklere. Eksisterende verktøy (Notion, Trello, FreshBooks) er generiske og forstår ikke utviklerarbeidsflyt. Å bytte mellom verktøy kaster bort timer hver uke.",
    },
    approach: [
      {
        en: "Multi-tier subscription model with Stripe: Free / Base / Pro — feature-gated per plan",
        nl: "Meerlaags abonnementsmodel met Stripe: Gratis / Basis / Pro — functies per abonnement beperkt",
        sv: "Prenumerationsmodell med flera nivåer med Stripe: Gratis / Bas / Pro — funktioner gated per plan",
        de: "Mehrstufiges Abonnementmodell mit Stripe: Free / Base / Pro — funktionsbeschränkt je Plan",
        no: "Flerlagsabonnementsmodell med Stripe: Gratis / Base / Pro — funksjoner gated per plan",
      },
      {
        en: "AI proposal generator via Claude API — client inputs project brief, AI outputs a structured, professional proposal",
        nl: "AI-voorstelgenerator via Claude API — klant vult projectbriefing in, AI genereert een gestructureerd, professioneel voorstel",
        sv: "AI-offertgenerator via Claude API — klienten anger projektbriefing, AI genererar ett strukturerat, professionellt förslag",
        de: "KI-Angebotsgenerator über Claude API — Kunde gibt Projektbriefing ein, KI erstellt ein strukturiertes, professionelles Angebot",
        no: "AI-forslagsgenerator via Claude API — klient legger inn prosjektbrief, AI genererer et strukturert, profesjonelt forslag",
      },
      {
        en: "GitHub API integration for PR review automation — summarises changes, flags issues, drafts review comments",
        nl: "GitHub API-integratie voor PR-reviewautomatisering — vat wijzigingen samen, markeert problemen, stelt reviewopmerkingen op",
        sv: "GitHub API-integration för PR-recensionsautomatisering — sammanfattar ändringar, flaggar problem, skissar recensionskommentarer",
        de: "GitHub-API-Integration für PR-Review-Automatisierung — fasst Änderungen zusammen, markiert Probleme, entwirft Review-Kommentare",
        no: "GitHub API-integrasjon for PR-gjennomgangsautomatisering — oppsummerer endringer, flaggproblemer, skisserer gjennomgangskommentarer",
      },
      {
        en: "Invoice automation — auto-generated from project milestones with PDF export",
        nl: "Factuurautomatisering — automatisch gegenereerd uit projectmijlpalen met PDF-export",
        sv: "Fakturaautomatisering — automatgenererad från projektmilstolpar med PDF-export",
        de: "Rechnungsautomatisierung — automatisch aus Projektmeilensteinen generiert mit PDF-Export",
        no: "Fakturaautomatisering — autogenerert fra prosjektmilepæler med PDF-eksport",
      },
      {
        en: "Project and client management dashboard with status tracking",
        nl: "Project- en klantbeheerdashboard met statusbeheer",
        sv: "Projekt- och kundhanteringsdashboard med statusspårning",
        de: "Projekt- und Kundenverwaltungs-Dashboard mit Statusverfolgung",
        no: "Prosjekt- og kundeadministrasjonsdashboard med statussporing",
      },
    ],
    result: {
      en: "In active development. Core features (proposals, invoicing, project management) are functional. GitHub and AI integrations in progress.",
      nl: "In actieve ontwikkeling. Kernfuncties (voorstellen, facturering, projectbeheer) zijn functioneel. GitHub- en AI-integraties in uitvoering.",
      sv: "Under aktiv utveckling. Kärnfunktioner (offerter, fakturering, projekthantering) är funktionella. GitHub- och AI-integrationer pågår.",
      de: "In aktiver Entwicklung. Kernfunktionen (Angebote, Rechnungsstellung, Projektmanagement) sind funktionsfähig. GitHub- und KI-Integrationen in Arbeit.",
      no: "Under aktiv utvikling. Kjernefunksjoner (forslag, fakturering, prosjektledelse) er funksjonelle. GitHub- og AI-integrasjoner pågår.",
    },
    coverImage: "/images/projects/devtop/Devtop.png",
    nextSlug: "ljungdalen-hub",
    nextTitle: "Ljungdalen Hub",
  },

  "ljungdalen-hub": {
    slug: "ljungdalen-hub",
    title: "Ljungdalen Hub",
    category: "Client · Web",
    period: "2026 — in design",
    role: "Solo Fullstack Developer + Designer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS 4", "Hetzner", "Caddy"],
    summary: {
      en: "A central website for Ljungdalen — connecting visitors, locals and businesses in one place. From event listings and local services to a contact hub for the village.",
      nl: "Een centrale website voor Ljungdalen — bezoekers, inwoners en bedrijven op één plek verbinden. Van evenementenlijsten en lokale diensten tot een contacthub voor het dorp.",
      sv: "En central webbplats för Ljungdalen — som förenar besökare, ortsbor och företag på ett och samma ställe. Från evenemanglistor och lokala tjänster till en kontakthub för byn.",
      de: "Eine zentrale Website für Ljungdalen — Besucher, Einheimische und Unternehmen an einem Ort verbinden. Von Veranstaltungslisten und lokalen Dienstleistungen bis hin zu einem Kontakt-Hub für das Dorf.",
      no: "En sentral nettside for Ljungdalen — som kobler besøkende, lokalbefolkning og bedrifter på ett sted. Fra arrangementslistinger og lokale tjenester til en kontakthub for landsbyen.",
    },
    problem: {
      en: "Ljungdalen has no central digital hub. Information is scattered across Facebook groups, PDF flyers and word-of-mouth. Visitors and new residents have no reliable single source of truth for what's happening in the village.",
      nl: "Ljungdalen heeft geen centrale digitale hub. Informatie is verspreid over Facebook-groepen, PDF-flyers en mond-tot-mondreclame. Bezoekers en nieuwe inwoners hebben geen betrouwbare centrale informatiebron voor wat er in het dorp gebeurt.",
      sv: "Ljungdalen saknar en central digital hub. Information är utspridd över Facebook-grupper, PDF-flygblad och muntliga rekommendationer. Besökare och nya invånare har ingen tillförlitlig enda källa till information om vad som händer i byn.",
      de: "Ljungdalen hat keinen zentralen digitalen Hub. Informationen sind über Facebook-Gruppen, PDF-Flyer und Mundpropaganda verstreut. Besucher und neue Einwohner haben keine zuverlässige zentrale Informationsquelle darüber, was im Dorf passiert.",
      no: "Ljungdalen har ingen sentral digital hub. Informasjon er spredt over Facebook-grupper, PDF-flyers og jungeltelegrafen. Besøkende og nye innbyggere har ingen pålitelig enkelt informasjonskilde for hva som skjer i landsbyen.",
    },
    approach: [
      {
        en: "Clean, accessible design that works for all age groups — from tourists to elderly locals",
        nl: "Schoon, toegankelijk design dat werkt voor alle leeftijdsgroepen — van toeristen tot oudere inwoners",
        sv: "Rent, tillgängligt design som fungerar för alla åldersgrupper — från turister till äldre ortsbor",
        de: "Klares, barrierefreies Design, das für alle Altersgruppen funktioniert — von Touristen bis zu älteren Einheimischen",
        no: "Rent, tilgjengelig design som fungerer for alle aldersgrupper — fra turister til eldre lokalbefolkning",
      },
      {
        en: "Event calendar with local activities and seasonal highlights",
        nl: "Evenementenkalender met lokale activiteiten en seizoenshoogtepunten",
        sv: "Evenemangkalender med lokala aktiviteter och säsongshöjdpunkter",
        de: "Veranstaltungskalender mit lokalen Aktivitäten und saisonalen Highlights",
        no: "Arrangementskalender med lokale aktiviteter og sesongmessige høydepunkter",
      },
      {
        en: "Directory of local businesses and services",
        nl: "Gids van lokale bedrijven en diensten",
        sv: "Katalog över lokala företag och tjänster",
        de: "Verzeichnis lokaler Unternehmen und Dienstleistungen",
        no: "Katalog over lokale bedrifter og tjenester",
      },
      {
        en: "Multilingual content (Swedish / English) for both locals and visitors",
        nl: "Meertalige content (Zweeds / Engels) voor zowel inwoners als bezoekers",
        sv: "Flerspråkigt innehåll (svenska / engelska) för både ortsbor och besökare",
        de: "Mehrsprachige Inhalte (Schwedisch / Englisch) für Einheimische und Besucher",
        no: "Flerspråklig innhold (svensk / engelsk) for både lokalbefolkning og besøkende",
      },
      {
        en: "EU-first infrastructure on Hetzner — hosted in Sweden's backyard",
        nl: "EU-first infrastructuur op Hetzner — gehost in Zweden's achtertuin",
        sv: "EU-first infrastruktur på Hetzner — hostad i Sveriges bakgård",
        de: "EU-first Infrastruktur auf Hetzner — in Schwedens Hinterhof gehostet",
        no: "EU-first infrastruktur på Hetzner — hostet i Sveriges bakgård",
      },
    ],
    result: {
      en: "In design phase. Mockups completed, development starting Q2 2026.",
      nl: "In ontwerpfase. Mockups klaar, ontwikkeling start Q2 2026.",
      sv: "I designfas. Mockups klara, utveckling startar Q2 2026.",
      de: "In der Designphase. Mockups abgeschlossen, Entwicklung beginnt Q2 2026.",
      no: "I designfase. Mockups fullført, utvikling starter Q2 2026.",
    },
    coverImage: "/images/projects/ljungdalen-hub/ljungdalen_01_hero.png",
    images: [
      { src: "/images/projects/ljungdalen-hub/ljungdalen_01_hero.png", caption: "Hero — village entry point" },
      { src: "/images/projects/ljungdalen-hub/ljungdalen_02_community.png", caption: "Community section" },
      { src: "/images/projects/ljungdalen-hub/ljungdalen_03_events.png", caption: "Events calendar" },
      { src: "/images/projects/ljungdalen-hub/ljungdalen_04_hubs.png", caption: "Local hubs directory" },
      { src: "/images/projects/ljungdalen-hub/ljungdalen_05_mobile.png", caption: "Mobile view" },
    ],
    nextSlug: "chefmate",
    nextTitle: "ChefMate AI",
  },

  "chefmate": {
    slug: "chefmate",
    title: "ChefMate AI",
    category: "Mobile · AI",
    period: "January 2026 — present",
    role: "Solo Mobile Developer",
    stack: ["Flutter", "Dart", "Riverpod", "GoRouter", "Hive", "Claude Vision API"],
    summary: {
      en: "A cross-platform Flutter app that generates recipes from photos of fridge contents. Point the camera at your ingredients and get a recipe — from basic to luxury — powered by Claude Vision API.",
      nl: "Een cross-platform Flutter-app die recepten genereert op basis van foto's van koelkastinhoud. Richt de camera op je ingrediënten en krijg een recept — van eenvoudig tot luxe — aangedreven door Claude Vision API.",
      sv: "En plattformsoberoende Flutter-app som genererar recept från foton av kylskåpets innehåll. Rikta kameran mot dina ingredienser och få ett recept — från enkelt till lyxigt — drivet av Claude Vision API.",
      de: "Eine plattformübergreifende Flutter-App, die aus Fotos des Kühlschrankinhalts Rezepte generiert. Richten Sie die Kamera auf Ihre Zutaten und erhalten Sie ein Rezept — von einfach bis luxuriös — powered by Claude Vision API.",
      no: "En kryssplattform Flutter-app som genererer oppskrifter fra bilder av kjøleskapsinnhold. Pek kameraet mot ingrediensene dine og få en oppskrift — fra enkel til luksuriøs — drevet av Claude Vision API.",
    },
    problem: {
      en: "You don't know what you can make with what's in the fridge. Existing apps give static recipes without context. ChefMate looks at what you actually have and generates something creative.",
      nl: "Je weet niet wat je kunt maken met wat er in de koelkast zit. Bestaande apps geven statische recepten zonder context. ChefMate kijkt naar wat je werkelijk hebt en genereert iets creatiefs.",
      sv: "Du vet inte vad du kan laga av det som finns i kylen. Befintliga appar ger statiska recept utan kontext. ChefMate tittar på vad du faktiskt har och genererar något kreativt.",
      de: "Man weiß nicht, was man aus dem Kühlschrankinhalt kochen kann. Vorhandene Apps liefern statische Rezepte ohne Kontext. ChefMate schaut, was tatsächlich vorhanden ist, und generiert etwas Kreatives.",
      no: "Du vet ikke hva du kan lage med det som er i kjøleskapet. Eksisterende apper gir statiske oppskrifter uten kontekst. ChefMate ser på hva du faktisk har og genererer noe kreativt.",
    },
    approach: [
      {
        en: "Flutter clean architecture — Riverpod for state management, GoRouter for navigation, Hive for local storage",
        nl: "Flutter clean architecture — Riverpod voor toestandsbeheer, GoRouter voor navigatie, Hive voor lokale opslag",
        sv: "Flutter clean architecture — Riverpod för tillståndshantering, GoRouter för navigering, Hive för lokal lagring",
        de: "Flutter Clean Architecture — Riverpod für State Management, GoRouter für Navigation, Hive für lokale Speicherung",
        no: "Flutter clean architecture — Riverpod for tilstandshåndtering, GoRouter for navigasjon, Hive for lokal lagring",
      },
      {
        en: "Camera and gallery integration for ingredient recognition",
        nl: "Camera- en galerij-integratie voor ingrediëntherkenning",
        sv: "Kamera- och gallerintegration för ingrediensigenkänning",
        de: "Kamera- und Galerieintegration für Zutaten-Erkennung",
        no: "Kamera- og galleriintegrasjon for ingrediensgjenkjenning",
      },
      {
        en: "Claude Vision API analyses photos and identifies ingredients",
        nl: "Claude Vision API analyseert foto's en identificeert ingrediënten",
        sv: "Claude Vision API analyserar foton och identifierar ingredienser",
        de: "Claude Vision API analysiert Fotos und identifiziert Zutaten",
        no: "Claude Vision API analyserer bilder og identifiserer ingredienser",
      },
      {
        en: "Recipe generator on three levels: basic / medium / luxury",
        nl: "Receptgenerator op drie niveaus: eenvoudig / gemiddeld / luxe",
        sv: "Receptgenerator på tre nivåer: enkel / medium / lyxig",
        de: "Rezeptgenerator auf drei Ebenen: einfach / mittel / luxuriös",
        no: "Oppskriftsgenerator på tre nivåer: enkel / medium / luksuriøs",
      },
      {
        en: "Local recipe book — save and revisit favourites without an internet connection",
        nl: "Lokaal receptenboek — bewaar en bekijk favorieten zonder internetverbinding",
        sv: "Lokalt recepthäfte — spara och återbesök favoriter utan internetanslutning",
        de: "Lokales Rezeptbuch — Favoriten ohne Internetverbindung speichern und erneut aufrufen",
        no: "Lokal oppskriftsbok — lagre og se på igjen favoritter uten internettforbindelse",
      },
    ],
    result: {
      en: "V1 in development. Core flow (photo → recipe) functional. V2 will add multi-source import and shopping list.",
      nl: "V1 in ontwikkeling. Kernflow (foto → recept) functioneel. V2 voegt multi-source import en boodschappenlijst toe.",
      sv: "V1 under utveckling. Kärnflöde (foto → recept) funktionellt. V2 lägger till flerkällimport och inköpslista.",
      de: "V1 in Entwicklung. Kerndurchlauf (Foto → Rezept) funktionsfähig. V2 fügt Multi-Quellen-Import und Einkaufsliste hinzu.",
      no: "V1 under utvikling. Kjerneflyt (bilde → oppskrift) funksjonell. V2 vil legge til flerkildeimport og handleliste.",
    },
    coverImage: "/images/projects/chefmate/ChefmateAI.png",
    nextSlug: "dotnet-clean-api",
    nextTitle: "dotnet-clean-api-starter",
  },

  "dotnet-clean-api": {
    slug: "dotnet-clean-api",
    title: "dotnet-clean-api-starter",
    category: "Open Source · API",
    period: "May 2026",
    role: "Solo Backend Developer",
    stack: [".NET 10", "C#", "PostgreSQL", "EF Core", "MediatR", "JWT", "Docker", "xUnit", "Testcontainers"],
    liveUrl: "https://github.com/eaback/dotnet-API",
    summary: {
      en: "A production-ready .NET 10 Web API template built on Clean Architecture and CQRS. Fully wired up with JWT auth, PostgreSQL, Docker and integration tests — ready to clone and build on.",
      nl: "Een productieklaar .NET 10 Web API-template gebouwd op Clean Architecture en CQRS. Volledig ingericht met JWT-auth, PostgreSQL, Docker en integratietests — klaar om te clonen en op te bouwen.",
      sv: "En produktionsfärdig .NET 10 Web API-mall byggd på Clean Architecture och CQRS. Fullt konfigurerad med JWT-auth, PostgreSQL, Docker och integrationstester — redo att klona och bygga vidare på.",
      de: "Ein produktionsreifes .NET 10 Web-API-Template auf Basis von Clean Architecture und CQRS. Vollständig eingerichtet mit JWT-Auth, PostgreSQL, Docker und Integrationstests — bereit zum Klonen und Weiterentwickeln.",
      no: "En produksjonsklar .NET 10 Web API-mal bygget på Clean Architecture og CQRS. Fullt konfigurert med JWT-auth, PostgreSQL, Docker og integrasjonstester — klar til å klone og bygge videre på.",
    },
    problem: {
      en: "Starting a new .NET API from scratch takes days of boilerplate — project structure, auth, database setup, error handling, tests. This template eliminates that setup time so you can focus on your actual feature.",
      nl: "Een nieuwe .NET API van nul opzetten kost dagen aan boilerplate — projectstructuur, auth, databaseconfiguratie, foutafhandeling, tests. Dit template elimineert die opstarttijd zodat je je kunt focussen op de daadwerkelijke feature.",
      sv: "Att starta ett nytt .NET API från grunden tar dagar av boilerplate — projektstruktur, auth, databasinställning, felhantering, tester. Den här mallen eliminerar den installationstiden så att du kan fokusera på din faktiska funktion.",
      de: "Ein neues .NET-API von Grund auf aufzubauen dauert Tage an Boilerplate — Projektstruktur, Auth, Datenbank-Setup, Fehlerbehandlung, Tests. Dieses Template eliminiert diesen Einrichtungsaufwand, damit Sie sich auf Ihr eigentliches Feature konzentrieren können.",
      no: "Å starte et nytt .NET API fra bunnen av tar dager med boilerplate — prosjektstruktur, auth, databaseoppsett, feilhåndtering, tester. Denne malen eliminerer den oppstartstiden slik at du kan fokusere på den faktiske funksjonen.",
    },
    approach: [
      {
        en: "Clean Architecture in four layers: Domain → Application → Infrastructure → API, with strict one-way dependency rules",
        nl: "Clean Architecture in vier lagen: Domain → Application → Infrastructure → API, met strikte eenrichtings-afhankelijkheidsregels",
        sv: "Clean Architecture i fyra lager: Domain → Application → Infrastructure → API, med strikta enkelriktade beroenregler",
        de: "Clean Architecture in vier Schichten: Domain → Application → Infrastructure → API, mit strikten unidirektionalen Abhängigkeitsregeln",
        no: "Clean Architecture i fire lag: Domain → Application → Infrastructure → API, med strenge enveisavhengighetsregler",
      },
      {
        en: "CQRS via MediatR with a validation pipeline — every command runs FluentValidation automatically before the handler",
        nl: "CQRS via MediatR met een validatiepipeline — elke command doorloopt automatisch FluentValidation voor de handler",
        sv: "CQRS via MediatR med en valideringspipeline — varje kommando kör FluentValidation automatiskt före handleren",
        de: "CQRS über MediatR mit einer Validierungspipeline — jeder Command durchläuft automatisch FluentValidation vor dem Handler",
        no: "CQRS via MediatR med en valideringspipeline — hver kommando kjører FluentValidation automatisk før handleren",
      },
      {
        en: "JWT access tokens (15 min) + refresh token rotation (7 days) — stored in PostgreSQL with full revocation support",
        nl: "JWT-toegangstokens (15 min) + roterend refresh token (7 dagen) — opgeslagen in PostgreSQL met volledige intrekkingsondersteuning",
        sv: "JWT-åtkomsttoken (15 min) + roterande uppdateringstoken (7 dagar) — lagrat i PostgreSQL med fullt återkallningsstöd",
        de: "JWT-Zugriffstoken (15 Min.) + Refresh-Token-Rotation (7 Tage) — in PostgreSQL gespeichert mit vollständiger Widerrufsunterstützung",
        no: "JWT-tilgangstokens (15 min) + refresh-token-rotering (7 dager) — lagret i PostgreSQL med full tilbakekallingsst øtte",
      },
      {
        en: "Multi-stage Dockerfile + docker-compose with healthcheck — one command to run the full stack locally",
        nl: "Multi-stage Dockerfile + docker-compose met healthcheck — één commando om de volledige stack lokaal te draaien",
        sv: "Flerstegs Dockerfile + docker-compose med healthcheck — ett kommando för att köra hela stacken lokalt",
        de: "Multi-Stage-Dockerfile + docker-compose mit Healthcheck — ein Befehl, um den vollständigen Stack lokal auszuführen",
        no: "Flerstegs Dockerfile + docker-compose med healthcheck — ett kommando for å kjøre hele stacken lokalt",
      },
      {
        en: "Integration tests with Testcontainers (real PostgreSQL), Respawn (database cleanup) and Bogus (realistic test data)",
        nl: "Integratietests met Testcontainers (echte PostgreSQL), Respawn (databaseopschoning) en Bogus (realistische testdata)",
        sv: "Integrationstester med Testcontainers (riktig PostgreSQL), Respawn (databasrensning) och Bogus (realistisk testdata)",
        de: "Integrationstests mit Testcontainers (echtes PostgreSQL), Respawn (Datenbankbereinigung) und Bogus (realistische Testdaten)",
        no: "Integrasjonstester med Testcontainers (ekte PostgreSQL), Respawn (databaseopprydding) og Bogus (realistiske testdata)",
      },
      {
        en: "GitHub Actions CI pipeline — build, unit tests and integration tests on every push to main",
        nl: "GitHub Actions CI-pipeline — build, unit tests en integratietests bij elke push naar main",
        sv: "GitHub Actions CI-pipeline — build, enhetstester och integrationstester vid varje push till main",
        de: "GitHub Actions CI-Pipeline — Build, Unit-Tests und Integrationstests bei jedem Push auf main",
        no: "GitHub Actions CI-pipeline — build, enhetstester og integrasjonstester ved hver push til main",
      },
    ],
    result: {
      en: "A fully functional, tested and documented .NET 10 API template. 17 passing tests (10 unit, 7 integration). Clean Architecture demonstrated end-to-end — from domain value objects to integration tests against a real database.",
      nl: "Een volledig functioneel, getest en gedocumenteerd .NET 10 API-template. 17 geslaagde tests (10 unit, 7 integratie). Clean Architecture gedemonstreerd van begin tot eind — van domein-value objects tot integratietests tegen een echte database.",
      sv: "En fullt funktionell, testad och dokumenterad .NET 10 API-mall. 17 godkända tester (10 enhets-, 7 integrations-). Clean Architecture demonstrerad end-to-end — från domän-värdeobjekt till integrationstester mot en riktig databas.",
      de: "Ein vollständig funktionsfähiges, getestetes und dokumentiertes .NET 10 API-Template. 17 bestandene Tests (10 Unit-, 7 Integrations-). Clean Architecture von Anfang bis Ende demonstriert — von Domain-Wertobjekten bis zu Integrationstests gegen eine echte Datenbank.",
      no: "En fullt funksjonell, testet og dokumentert .NET 10 API-mal. 17 bestått tester (10 enhets-, 7 integrasjons-). Clean Architecture demonstrert ende-til-ende — fra domene-verdiobjekter til integrasjonstester mot en ekte database.",
    },
    resultStats: [
      { value: "17", label: { en: "tests passing", nl: "tests geslaagd", sv: "tester godkända", de: "Tests bestanden", no: "tester bestått" } },
      { value: "4", label: { en: "architecture layers", nl: "architectuurlagen", sv: "arkitekturlager", de: "Architekturschichten", no: "arkitekturlag" } },
      { value: "CI", label: { en: "GitHub Actions", nl: "GitHub Actions", sv: "GitHub Actions", de: "GitHub Actions", no: "GitHub Actions" } },
    ],
    coverImage: "/images/projects/dotnet-api/dotnet-api.png",
    nextSlug: "de-bergen",
    nextTitle: "De Bergen",
  },
};
