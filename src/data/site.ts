export const site = {
  name: "Schut Marketing",
  owner: "Jorik Schut",
  founded: 2020,
  partnerSince: 2025,
  tagline: "Websites en marketing die voor je werken.",
  intro:
    "Van frisse websites tot campagnes die echt klanten opleveren. Samen bouwen we aan jouw online groei, op een manier die simpel en effectief blijft.",
  about:
    "Schut Marketing is de eenmanszaak van Jorik Schut. Een online marketingbureau dat je ondersteunt met campagnes, SEO, websites en social media. Persoonlijk geleverd, met korte lijnen en eerlijk advies.",
  agenseaIntro:
    "Sinds 2025 ben ik daarnaast partner bij Agensea, een AI-first bureau uit Zeeland voor websites, software en marketing. Voor grotere trajecten met meer specialismen werk ik vanuit Agensea, voor kleinere en persoonlijke opdrachten gewoon direct via Schut Marketing.",
  phone: "+31 6 57 94 61 99",
  phoneHref: "tel:+31657946199",
  whatsappHref: "https://wa.me/31657946199",
  email: "jorik@schutmarketing.nl",
  city: "Vlissingen, Zeeland",
  region: "Zeeland en Nederland",
  socials: {
    linkedin: "https://www.linkedin.com/in/jorik-schut-317138233/",
    agensea: "https://agensea.nl",
  },
  yearsActive: () => new Date().getFullYear() - 2018,
};

export const nav = [
  { label: "Diensten", href: "/#diensten" },
  { label: "Klanten", href: "/#klanten" },
  { label: "Over", href: "/over" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    key: "campagnes",
    title: "Online campagnes",
    summary: "Resultaatgerichte advertenties voor maximale zichtbaarheid.",
    detail:
      "Google Ads, Meta en LinkedIn. Strak gebouwd, scherp gemeten, eerlijk gerapporteerd. Met een Google Bronze Partner-certificering achter de hand.",
    points: [
      "Strategie, opzet en beheer",
      "Doelgroep- en zoekwoordonderzoek",
      "Heldere maandrapportage",
    ],
    accent: "mint",
    badge: "Focusdienst",
    icon: "target",
  },
  {
    key: "seo",
    title: "SEO",
    summary: "Word beter vindbaar in Google en bereik meer klanten organisch.",
    detail:
      "Technische SEO, content en geduld. Ik regel het hele traject zonder vakjargon of beloftes die niet uitkomen.",
    points: ["Site-audit en techniek", "Zoekwoordstrategie", "On-page optimalisatie"],
    accent: "cyan",
    icon: "search",
  },
  {
    key: "websites",
    title: "Websites",
    summary: "Professionele websites die werken en converteren.",
    detail:
      "WordPress voor wie zelf wil beheren, of maatwerk in Astro of Next.js voor wie maximaal tempo en SEO wil. Altijd snel, mobielvriendelijk en SEO-klaar.",
    points: ["WordPress of headless", "Pagespeed boven de 90", "Inclusief copy-richting"],
    accent: "peach",
    icon: "globe",
  },
  {
    key: "social",
    title: "Social media",
    summary: "Sterke content en strategieen om jouw merk zichtbaar te maken.",
    detail:
      "Een merk dat consistent verschijnt op de juiste kanalen, met een tone-of-voice die klopt. Zonder dat je elke dag zelf hoeft te posten.",
    points: ["Contentstrategie", "Tone-of-voice", "Maand-planning"],
    accent: "lilac",
    icon: "spark",
  },
] as const;

export const projects = [
  { slug: "dockwize",              name: "Dockwize",              sector: "Ondernemerschap",   logo: "/clients/dockwize.png",              bg: "mint"  },
  { slug: "innovatiepunt-kaap",    name: "Innovatiepunt KAAP",    sector: "Innovatie",          logo: "/clients/innovatiepunt-kaap.png",    bg: "cyan"  },
  { slug: "buurtteams-vlissingen", name: "Buurtteams Vlissingen", sector: "Zorg en welzijn",    logo: "/clients/buurtteams-vlissingen.png", bg: "peach" },
  { slug: "fractal-energy",        name: "Fractal Energy",        sector: "Energie",            logo: "/clients/fractal-energy.png",        bg: "lilac" },
  { slug: "get-unlocked",          name: "Get Unlocked",          sector: "Coaching",           logo: "/clients/get-unlocked.png",          bg: "mint"  },
  { slug: "zeeland-podcasts",      name: "Zeeland Podcasts",      sector: "Media",              logo: "/clients/zeeland-podcasts.png",      bg: "cyan"  },
  { slug: "ssn",                   name: "SSN",                   sector: "Stichting",          logo: "/clients/ssn.png",                   bg: "peach" },
] as const;

export const testimonials = [
  {
    name: "Arieke van Liere",
    role: "Bewegingsbouwer",
    quote:
      "Nieuwsgierig, gedreven en betrokken: zo zou ik Jorik omschrijven. Met zijn haarscherpe analyses denkt hij in kansen en is zeer kundig in marketing en communicatie.",
    photo: "/people/arieke.jpg",
  },
  {
    name: "Wahine Wisse",
    role: "Tekstschrijver",
    quote:
      "Ik heb de eer gehad om met Jorik samen te werken. Hij is echt een ondernemer in hart en nieren. Praktisch, snel, en hij ziet kansen voordat een ander ze ziet.",
    photo: "/people/wahine.png",
  },
] as const;

export const principles = [
  {
    title: "Eerst luisteren, dan bouwen",
    body: "Ik begin nooit met techniek of design. Eerst snappen wat je wilt bereiken, dan pas een plan en uitvoering.",
  },
  {
    title: "Nuchter en eerlijk",
    body: "Geen growth-hacker bullshit. Wat werkt zeg ik, wat niet werkt ook. Liever een kleine, eerlijke aanpak die echt iets oplevert.",
  },
  {
    title: "Persoonlijk eigenaarschap",
    body: "Je krijgt mij, geen accountmanager met een team eronder. Korte lijnen, snelle reacties, een vast aanspreekpunt.",
  },
  {
    title: "Schaalbaar via Agensea",
    body: "Vraagt je project meer paar handen, dan tuig ik via Agensea een team op. Hetzelfde aanspreekpunt, meer slagkracht.",
  },
] as const;

export const stats = [
  { value: site.yearsActive() + "+", label: "jaar ervaring" },
  { value: "1", label: "vast aanspreekpunt" },
  { value: "Bronze", label: "Google Partner" },
  { value: "Zeeland", label: "thuisbasis" },
] as const;
