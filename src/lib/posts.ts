export type LocaleString = {
  en: string;
  nl: string;
  sv: string;
  de: string;
  no: string;
};

export function pick(field: LocaleString, locale: string): string {
  return (field as Record<string, string>)[locale] ?? field.en;
}

export type BlogPost = {
  slug: string;
  title: LocaleString;
  description: LocaleString;
  date: string; // ISO: "2026-03-01"
  readingTime: number; // minutes
  tags: string[];
  coverGradient?: string;
  sections: {
    heading?: LocaleString;
    body: LocaleString;
  }[];
};

export const POSTS: BlogPost[] = [
  {
    slug: "building-in-the-mountains",
    title: {
      en: "Building digital platforms from a mountain village",
      nl: "Digitale platformen bouwen vanuit een bergdorp",
      sv: "Bygga digitala plattformar från en fjällby",
      de: "Digitale Plattformen aus einem Bergdorf entwickeln",
      no: "Bygge digitale plattformer fra en fjellby",
    },
    description: {
      en: "Why I moved from the Netherlands to Ljungdalen, Sweden — and how living in a remote mountain village shapes the way I build for Scandinavian businesses.",
      nl: "Waarom ik van Nederland naar Ljungdalen, Zweden verhuisde — en hoe het leven in een afgelegen bergdorp de manier waarop ik bouw voor Scandinavische bedrijven vormt.",
      sv: "Varför jag flyttade från Nederländerna till Ljungdalen, Sverige — och hur livet i en avlägsen fjällby formar sättet jag bygger för skandinaviska företag.",
      de: "Warum ich von den Niederlanden nach Ljungdalen, Schweden gezogen bin — und wie das Leben in einem abgelegenen Bergdorf meine Arbeit für skandinavische Unternehmen prägt.",
      no: "Hvorfor jeg flyttet fra Nederland til Ljungdalen i Sverige — og hvordan livet i en avsidesliggende fjellby former måten jeg bygger for skandinaviske bedrifter.",
    },
    date: "2026-03-01",
    readingTime: 5,
    tags: ["Life", "Freelance", "Sweden"],
    coverGradient: "linear-gradient(135deg, #EBF3EE 0%, #b8d4c4 60%, #9ec2b0 100%)",
    sections: [
      {
        body: {
          en: "When people find out I live in Ljungdalen — a village of roughly 200 people in the mountains of Jämtland, Sweden — they usually assume internet access is the first problem. It isn't. Fiber reached here before it reached many Dutch suburbs. The bigger shift was mental: trading city convenience for something that most people only visit on holiday.",
          nl: "Wanneer mensen erachter komen dat ik in Ljungdalen woon — een dorp van ongeveer 200 inwoners in de bergen van Jämtland, Zweden — gaan ze er doorgaans van uit dat internetverbinding het eerste probleem is. Dat is het niet. Glasvezel bereikte dit dorp eerder dan veel Nederlandse buitenwijken. De grote verschuiving was mentaal: stadsgemak inruilen voor iets wat de meeste mensen alleen op vakantie bezoeken.",
          sv: "När folk får reda på att jag bor i Ljungdalen — en by med ungefär 200 invånare i Jämtlands fjällvärld — antar de oftast att internetuppkoppling är det första problemet. Det stämmer inte. Fiber nådde hit innan det nådde många svenska förorter. Det stora skiftet var mentalt: att byta stadens bekvämlighet mot något som de flesta bara besöker på semester.",
          de: "Wenn Leute erfahren, dass ich in Ljungdalen lebe — einem Dorf mit etwa 200 Menschen in den Bergen von Jämtland, Schweden — gehen sie meist davon aus, dass Internetzugang das erste Problem ist. Das ist es nicht. Glasfaser erreichte diesen Ort, bevor es viele niederländische Vororte erreichte. Das größere Umdenken war mental: den Komfort der Stadt gegen etwas einzutauschen, das die meisten Menschen nur im Urlaub besuchen.",
          no: "Når folk finner ut at jeg bor i Ljungdalen — en landsby med omtrent 200 innbyggere i fjellene i Jämtland, Sverige — antar de vanligvis at internettilgang er det første problemet. Det stemmer ikke. Fiber nådde hit før det nådde mange nederlandske forsteder. Det store skiftet var mentalt: å bytte bybehaget mot noe som de fleste bare besøker på ferie.",
        },
      },
      {
        heading: {
          en: "Why Sweden, why now?",
          nl: "Waarom Zweden, waarom nu?",
          sv: "Varför Sverige, varför nu?",
          de: "Warum Schweden, warum jetzt?",
          no: "Hvorfor Sverige, hvorfor nå?",
        },
        body: {
          en: "I moved in 2022, initially to help launch a local hospitality project. What started as a short contract turned into a permanent base. The mountains, the pace, the people — it stuck. And professionally, it opened a niche I hadn't planned for: building digital infrastructure for exactly the kind of businesses I was surrounded by.",
          nl: "Ik verhuisde in 2022, aanvankelijk om een lokaal hospitalityproject op te starten. Wat begon als een kort contract werd een vaste basis. De bergen, het ritme, de mensen — het bleef hangen. En professioneel opende het een niche die ik niet had gepland: digitale infrastructuur bouwen voor precies de bedrijven waarmee ik omgeven was.",
          sv: "Jag flyttade 2022, ursprungligen för att hjälpa till att starta ett lokalt hospitalitetsprojekt. Det som började som ett kortare uppdrag blev en permanent bas. Fjällen, tempot, människorna — det fastnade. Och yrkesmässigt öppnade det en nisch jag inte hade planerat: att bygga digital infrastruktur för precis de typer av företag jag var omgiven av.",
          de: "Ich zog 2022 um, zunächst um ein lokales Hospitality-Projekt zu starten. Was als kurzer Auftrag begann, wurde zu einer dauerhaften Basis. Die Berge, das Tempo, die Menschen — es blieb hängen. Und beruflich eröffnete es eine Nische, die ich nicht geplant hatte: digitale Infrastruktur für genau die Art von Unternehmen zu bauen, von denen ich umgeben war.",
          no: "Jeg flyttet i 2022, opprinnelig for å hjelpe med å starte et lokalt hospitalitetsprosjekt. Det som startet som en kort kontrakt ble en permanent base. Fjellene, tempoet, menneskene — det festet seg. Og yrkesmessig åpnet det en nisje jeg ikke hadde planlagt: å bygge digital infrastruktur for nettopp de typene bedrifter jeg var omgitt av.",
        },
      },
      {
        heading: {
          en: "Building for the industry you live in",
          nl: "Bouwen voor de industrie waarin je leeft",
          sv: "Bygga för branschen du lever i",
          de: "Für die Branche entwickeln, in der man lebt",
          no: "Bygge for bransjen du lever i",
        },
        body: {
          en: "There's a difference between reading about a cabin rental business and managing one. I know what it means when a booking platform goes down on a Friday afternoon in peak season. I know why a stugvärd needs WhatsApp-level simplicity in the admin panel, not a Salesforce-style dashboard. That context doesn't come from a brief — it comes from living here.",
          nl: "Er is een verschil tussen lezen over een huisverhuurbedrijf en er één beheren. Ik weet wat het betekent als een boekingsplatform op een vrijdagmiddag in het hoogseizoen uitvalt. Ik weet waarom een stugvärd eenvoud op WhatsApp-niveau nodig heeft in het adminpaneel, geen Salesforce-achtig dashboard. Die context komt niet uit een briefing — die komt van hier wonen.",
          sv: "Det finns en skillnad mellan att läsa om ett stuguthyrningsföretag och att faktiskt driva ett. Jag vet vad det innebär när en bokningsplattform kraschar en fredagseftermiddag under högsäsong. Jag vet varför en stugvärd behöver WhatsApp-enkel enkelhet i adminpanelen, inte ett Salesforce-liknande dashboard. Det sammanhanget får man inte från en brief — det får man av att bo här.",
          de: "Es gibt einen Unterschied zwischen dem Lesen über ein Ferienhaus-Vermietungsunternehmen und dem tatsächlichen Betrieb eines solchen. Ich weiß, was es bedeutet, wenn eine Buchungsplattform an einem Freitagsnachmittag in der Hochsaison ausfällt. Ich weiß, warum ein Stugvärd WhatsApp-ähnliche Einfachheit im Admin-Panel braucht, kein Salesforce-Dashboard. Dieser Kontext entsteht nicht aus einem Briefing — er entsteht davon, hier zu leben.",
          no: "Det er en forskjell mellom å lese om en hytteutleiebedrift og faktisk å drive en. Jeg vet hva det betyr når en bookingplattform går ned en fredag ettermiddag i høysesong. Jeg vet hvorfor en stugvärd trenger WhatsApp-enkel enkelhet i adminpanelet, ikke et Salesforce-lignende dashboard. Den konteksten kommer ikke fra en brief — den kommer fra å bo her.",
        },
      },
      {
        heading: {
          en: "EU-first isn't optional",
          nl: "EU-first is geen keuze",
          sv: "EU-first är inte valfritt",
          de: "EU-first ist keine Option",
          no: "EU-first er ikke valgfritt",
        },
        body: {
          en: "GDPR isn't a checkbox in Scandinavia — it's a baseline expectation. Every platform I build runs on EU infrastructure: Hetzner for compute, Aiven for managed PostgreSQL, Bunny CDN for edge delivery. Not because it's mandated by a client spec, but because it's the right default when you're serving European businesses and their European customers.",
          nl: "GDPR is in Scandinavië geen checkbox — het is een basisverwachting. Elk platform dat ik bouw draait op EU-infrastructuur: Hetzner voor compute, Aiven voor beheerde PostgreSQL, Bunny CDN voor edge delivery. Niet omdat een klantspecificatie dat verplicht, maar omdat het de juiste standaard is wanneer je Europese bedrijven en hun Europese klanten bedient.",
          sv: "GDPR är ingen kryssruta i Skandinavien — det är en grundläggande förväntning. Varje plattform jag bygger körs på EU-infrastruktur: Hetzner för compute, Aiven för hanterad PostgreSQL, Bunny CDN för edge delivery. Inte för att det är påtvingat av en kundspecifikation, utan för att det är rätt standard när du betjänar europeiska företag och deras europeiska kunder.",
          de: "DSGVO ist in Skandinavien keine Checkbox — es ist eine Grundvoraussetzung. Jede Plattform, die ich baue, läuft auf EU-Infrastruktur: Hetzner für Compute, Aiven für verwaltetes PostgreSQL, Bunny CDN für Edge Delivery. Nicht weil es durch eine Kundenspezifikation vorgeschrieben ist, sondern weil es der richtige Standard ist, wenn man europäische Unternehmen und ihre europäischen Kunden bedient.",
          no: "GDPR er ingen avkrysningsboks i Skandinavia — det er en grunnleggende forventning. Hver plattform jeg bygger kjører på EU-infrastruktur: Hetzner for compute, Aiven for administrert PostgreSQL, Bunny CDN for edge delivery. Ikke fordi det er pålagt av en kundespec, men fordi det er riktig standard når du betjener europeiske bedrifter og deres europeiske kunder.",
        },
      },
      {
        heading: {
          en: "What I'm building next",
          nl: "Wat ik als volgende bouw",
          sv: "Vad jag bygger härnäst",
          de: "Was ich als Nächstes baue",
          no: "Hva jeg bygger videre",
        },
        body: {
          en: "This portfolio is the first step toward a more focused freelance practice: fullstack development for Scandinavian hospitality operators, tourism platforms, and SaaS founders who need EU-first infrastructure. If that sounds like you, I'm available for new projects — reach me via the contact page.",
          nl: "Dit portfolio is de eerste stap naar een meer gerichte freelancepraktijk: fullstack development voor Scandinavische hospitality-operators, toeristische platforms en SaaS-oprichters die EU-first infrastructuur nodig hebben. Klinkt dat als jou? Ik ben beschikbaar voor nieuwe projecten — bereik me via de contactpagina.",
          sv: "Den här portföljen är det första steget mot en mer fokuserad frilanspraktik: fullstack-utveckling för skandinaviska hospitalitetsoperatörer, turismplattformar och SaaS-grundare som behöver EU-first infrastruktur. Låter det som du? Jag är tillgänglig för nya projekt — nå mig via kontaktsidan.",
          de: "Dieses Portfolio ist der erste Schritt zu einer fokussierteren Freelance-Praxis: Fullstack-Entwicklung für skandinavische Hospitality-Betreiber, Tourismusplattformen und SaaS-Gründer, die EU-first Infrastruktur benötigen. Klingt das nach dir? Ich bin für neue Projekte verfügbar — erreich mich über die Kontaktseite.",
          no: "Denne porteføljen er det første steget mot en mer fokusert freelance-praksis: fullstack-utvikling for skandinaviske hospitalitetsoperatører, turismeplattformer og SaaS-grunnleggere som trenger EU-first infrastruktur. Høres det ut som deg? Jeg er tilgjengelig for nye prosjekter — nå meg via kontaktsiden.",
        },
      },
    ],
  },
  {
    slug: "eu-first-infrastructure-for-startups",
    title: {
      en: "EU-first infrastructure: why it matters for your startup",
      nl: "EU-first infrastructuur: waarom het belangrijk is voor jouw startup",
      sv: "EU-first infrastruktur: varför det spelar roll för din startup",
      de: "EU-first Infrastruktur: warum es für dein Startup wichtig ist",
      no: "EU-first infrastruktur: hvorfor det er viktig for din startup",
    },
    description: {
      en: "GDPR, data residency, and why hosting in Europe isn't just a legal checkbox — it's a competitive advantage for Scandinavian startups.",
      nl: "GDPR, dataresidentie en waarom hosten in Europa niet alleen een juridische vereiste is — maar een concurrentievoordeel voor Scandinavische startups.",
      sv: "GDPR, datalagring och varför hosting i Europa inte bara är ett juridiskt krav — det är en konkurrensfördel för skandinaviska startups.",
      de: "DSGVO, Datenresidenz und warum Hosting in Europa nicht nur ein rechtliches Muss ist — sondern ein Wettbewerbsvorteil für skandinavische Startups.",
      no: "GDPR, dataresidency og hvorfor hosting i Europa ikke bare er en juridisk avkrysningsboks — men et konkurransefortrinn for skandinaviske startups.",
    },
    date: "2026-02-15",
    readingTime: 4,
    tags: ["Infrastructure", "GDPR", "SaaS"],
    coverGradient: "linear-gradient(135deg, #FAF0E9 0%, #f0d8c5 60%, #e8c9ae 100%)",
    sections: [
      {
        body: {
          en: "Every week I talk to a founder who has their database on a US-East AWS region, their CDN on Cloudflare (Cayman Islands-registered), and a vague plan to 'sort out GDPR later.' By the time they want to sell to an enterprise customer in Germany or Sweden, that plan costs six figures to untangle.",
          nl: "Elke week spreek ik met een founder die zijn database op een US-East AWS-regio heeft staan, zijn CDN op Cloudflare (geregistreerd in de Kaaimaneilanden), en een vaag plan om 'GDPR later te regelen.' Tegen de tijd dat ze willen verkopen aan een bedrijfsclient in Duitsland of Zweden, kost dat plan zes cijfers om te ontwarren.",
          sv: "Varje vecka pratar jag med en grundare som har sin databas på en US-East AWS-region, sin CDN på Cloudflare (registrerat på Caymanöarna) och en vag plan att 'lösa GDPR senare.' När de väl vill sälja till en företagskund i Tyskland eller Sverige kostar den planen sexsiffriga belopp att reda ut.",
          de: "Jede Woche spreche ich mit einem Gründer, der seine Datenbank in einer US-East-AWS-Region, sein CDN auf Cloudflare (auf den Cayman Islands registriert) und einen vagen Plan hat, 'GDPR später zu regeln.' Wenn sie dann an einen Unternehmenskunden in Deutschland oder Schweden verkaufen wollen, kostet das sechsstellige Summen, um es zu entwirren.",
          no: "Hver uke snakker jeg med en gründer som har databasen sin på en US-East AWS-region, CDN-en på Cloudflare (registrert på Caymanøyene), og en vag plan om å 'ordne GDPR senere.' Innen de ønsker å selge til en bedriftskunde i Tyskland eller Sverige, koster den planen sekssifrede summer å rydde opp i.",
        },
      },
      {
        heading: {
          en: "What EU-first actually means",
          nl: "Wat EU-first werkelijk betekent",
          sv: "Vad EU-first faktiskt innebär",
          de: "Was EU-first wirklich bedeutet",
          no: "Hva EU-first faktisk betyr",
        },
        body: {
          en: "EU-first doesn't mean avoiding good tooling — it means making intentional choices early. Hetzner (Germany/Finland) for VPS. Aiven (Finland) for managed PostgreSQL. Bunny CDN (Slovenia) for global edge with EU-only storage zones. Resend for transactional email with GDPR-compliant logging. None of these compromise developer experience. Most of them are cheaper than their US equivalents.",
          nl: "EU-first betekent niet het vermijden van goede tooling — het betekent vroeg bewuste keuzes maken. Hetzner (Duitsland/Finland) voor VPS. Aiven (Finland) voor beheerde PostgreSQL. Bunny CDN (Slovenië) voor globale edge met EU-only opslagzones. Resend voor transactionele e-mail met GDPR-conforme logging. Geen van deze compromitteert de developer experience. De meeste zijn goedkoper dan hun Amerikaanse equivalenten.",
          sv: "EU-first innebär inte att undvika bra verktyg — det innebär att göra medvetna val tidigt. Hetzner (Tyskland/Finland) för VPS. Aiven (Finland) för hanterad PostgreSQL. Bunny CDN (Slovenien) för global edge med EU-exklusiva lagringszoner. Resend för transaktionell e-post med GDPR-kompatibel loggning. Inget av detta kompromissar med utvecklarupplevelsen. Det mesta är billigare än motsvarande US-alternativ.",
          de: "EU-first bedeutet nicht, gute Werkzeuge zu meiden — es bedeutet, frühzeitig bewusste Entscheidungen zu treffen. Hetzner (Deutschland/Finnland) für VPS. Aiven (Finnland) für verwaltetes PostgreSQL. Bunny CDN (Slowenien) für globale Edge-Dienste mit EU-exklusiven Speicherzonen. Resend für transaktionale E-Mails mit DSGVO-konformem Logging. Keines davon beeinträchtigt die Entwicklererfahrung. Die meisten sind günstiger als ihre US-Alternativen.",
          no: "EU-first betyr ikke å unngå gode verktøy — det betyr å ta bevisste valg tidlig. Hetzner (Tyskland/Finland) for VPS. Aiven (Finland) for administrert PostgreSQL. Bunny CDN (Slovenia) for global edge med EU-eksklusive lagringssoner. Resend for transaksjons-e-post med GDPR-kompatibel logging. Ingen av disse kompromitterer utvikleropplevelsen. De fleste er billigere enn sine amerikanske ekvivalenter.",
        },
      },
      {
        heading: {
          en: "Data residency is a sales argument",
          nl: "Dataresidentie is een verkoopargument",
          sv: "Datalagring är ett säljargument",
          de: "Datenresidenz ist ein Verkaufsargument",
          no: "Dataresidency er et salgsargument",
        },
        body: {
          en: "In B2B SaaS, especially in healthcare, finance, and government-adjacent sectors, data residency is a requirement — not a preference. A Swedish healthcare provider will not sign a data processing agreement with a company that can't guarantee EU-only storage. Getting this right at the start means you don't lose those deals later.",
          nl: "In B2B SaaS, met name in de gezondheidszorg, financiën en overheidsgerelateerde sectoren, is dataresidentie een vereiste — geen voorkeur. Een Zweedse zorgverlener zal geen gegevensverwerkingsovereenkomst ondertekenen met een bedrijf dat EU-only opslag niet kan garanderen. Dit vanaf het begin goed doen betekent dat je die deals later niet verliest.",
          sv: "Inom B2B SaaS, särskilt inom hälso- och sjukvård, finans och myndighetsnära sektorer, är datalagring ett krav — inte en preferens. En svensk vårdgivare kommer inte att skriva under ett databehandlingsavtal med ett företag som inte kan garantera EU-exklusiv lagring. Att få det rätt från start innebär att du inte förlorar de affärerna senare.",
          de: "Im B2B-SaaS-Bereich, insbesondere im Gesundheitswesen, im Finanzsektor und in behördennahen Branchen, ist Datenresidenz eine Anforderung — keine Präferenz. Ein schwedischer Gesundheitsdienstleister wird keinen Datenverarbeitungsvertrag mit einem Unternehmen unterzeichnen, das keine EU-exklusive Speicherung garantieren kann. Wer das von Anfang an richtig macht, verliert diese Aufträge später nicht.",
          no: "I B2B SaaS, spesielt innen helsevesen, finans og myndighetsnære sektorer, er dataresidency et krav — ikke en preferanse. En svensk helsaktør vil ikke signere en databehandlingsavtale med et selskap som ikke kan garantere EU-eksklusiv lagring. Å gjøre dette riktig fra starten av betyr at du ikke mister de avtalene senere.",
        },
      },
      {
        heading: {
          en: "The practical stack",
          nl: "De praktische stack",
          sv: "Den praktiska stacken",
          de: "Der praktische Stack",
          no: "Den praktiske stacken",
        },
        body: {
          en: "For most of the platforms I build: Next.js on a Hetzner VPS (Coolify or Caddy + PM2 for process management), PostgreSQL on Aiven with automated backups, and Bunny CDN for static assets. Authentication via NextAuth.js or Clerk (EU data region). Payments via Mollie (Dutch, EU-regulated). This stack handles everything from a 100-user cabin booking system to a multi-tenant SaaS with thousands of monthly active users.",
          nl: "Voor de meeste platforms die ik bouw: Next.js op een Hetzner VPS (Coolify of Caddy + PM2 voor procesbeheer), PostgreSQL op Aiven met geautomatiseerde back-ups, en Bunny CDN voor statische assets. Authenticatie via NextAuth.js of Clerk (EU-dataregion). Betalingen via Mollie (Nederlands, EU-gereguleerd). Deze stack verwerkt alles van een boekingssysteem met 100 gebruikers tot een multi-tenant SaaS met duizenden maandelijks actieve gebruikers.",
          sv: "För de flesta plattformar jag bygger: Next.js på en Hetzner VPS (Coolify eller Caddy + PM2 för processhantering), PostgreSQL på Aiven med automatiserade säkerhetskopior och Bunny CDN för statiska tillgångar. Autentisering via NextAuth.js eller Clerk (EU-dataregion). Betalningar via Mollie (nederländskt, EU-reglerat). Denna stack hanterar allt från ett bokningssystem med 100 användare till en multi-tenant SaaS med tusentals månadsaktiva användare.",
          de: "Für die meisten Plattformen, die ich baue: Next.js auf einem Hetzner-VPS (Coolify oder Caddy + PM2 für die Prozessverwaltung), PostgreSQL auf Aiven mit automatisierten Backups und Bunny CDN für statische Assets. Authentifizierung über NextAuth.js oder Clerk (EU-Datenregion). Zahlungen über Mollie (niederländisch, EU-reguliert). Dieser Stack verwaltet alles von einem Buchungssystem mit 100 Benutzern bis zu einem Multi-Tenant-SaaS mit Tausenden monatlich aktiver Nutzer.",
          no: "For de fleste plattformene jeg bygger: Next.js på en Hetzner VPS (Coolify eller Caddy + PM2 for prosesshåndtering), PostgreSQL på Aiven med automatiserte sikkerhetskopier og Bunny CDN for statiske filer. Autentisering via NextAuth.js eller Clerk (EU-dataregion). Betalinger via Mollie (nederlandsk, EU-regulert). Denne stacken håndterer alt fra et bookingsystem med 100 brukere til en multi-tenant SaaS med tusenvis av månedlige aktive brukere.",
        },
      },
      {
        heading: {
          en: "Where to start",
          nl: "Waar te beginnen",
          sv: "Var du ska börja",
          de: "Wo man anfängt",
          no: "Hvor du skal begynne",
        },
        body: {
          en: "If you're starting a new project and you plan to serve European customers, make EU-first the default — not the retrofit. It's a one-time decision that affects every architecture choice downstream. If you're already running on US infrastructure and need to migrate, that's a conversation worth having early rather than when a contract depends on it.",
          nl: "Als je een nieuw project start en je van plan bent Europese klanten te bedienen, maak EU-first dan de standaard — geen laattijdige aanpassing. Het is een eenmalige beslissing die elke architectuurkeuze stroomafwaarts beïnvloedt. Als je al op US-infrastructuur draait en wilt migreren, voer dat gesprek liever vroeg dan wanneer een contract ervan afhangt.",
          sv: "Om du startar ett nytt projekt och planerar att betjäna europeiska kunder, gör EU-first till standard — inte en efteranpassning. Det är ett engångsbeslut som påverkar varje arkitekturval nedströms. Om du redan kör på US-infrastruktur och behöver migrera är det ett samtal du bör ha tidigt snarare än när ett kontrakt beror på det.",
          de: "Wenn du ein neues Projekt startest und planst, europäische Kunden zu bedienen, mach EU-first zum Standard — nicht zur nachträglichen Anpassung. Es ist eine einmalige Entscheidung, die jede Architekturentscheidung im Downstream beeinflusst. Wenn du bereits auf US-Infrastruktur läufst und migrieren musst, ist das ein Gespräch, das besser früh als dann geführt werden sollte, wenn ein Vertrag davon abhängt.",
          no: "Hvis du starter et nytt prosjekt og planlegger å betjene europeiske kunder, gjør EU-first til standarden — ikke ettermonteringen. Det er en engangsbeslutning som påvirker hvert arkitekturvalg nedstrøms. Hvis du allerede kjører på US-infrastruktur og trenger å migrere, er det en samtale som er verdt å ta tidlig snarere enn når en kontrakt avhenger av det.",
        },
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function formatDate(iso: string, locale: string): string {
  return new Date(iso).toLocaleDateString(
    locale === "nl" ? "nl-NL" :
    locale === "sv" ? "sv-SE" :
    locale === "de" ? "de-DE" :
    locale === "no" ? "nb-NO" : "en-GB",
    { year: "numeric", month: "long", day: "numeric" }
  );
}
