// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "O nama", href: "#o-nama" },
  { label: "Usluge", href: "#usluge" },
  { label: "Rezultati", href: "#rezultati" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const HERO = {
  headlineLine1: "Mjesto gdje njega, estetika",
  headlineLine2: "i samopouzdanje dolaze zajedno",
  subtext:
    "Personalizirana estetska medicina u srcu Zadra. Tretmani temeljeni na medicini, izvedeni u luksuznom okruženju.",
  ctaPrimary: "Zakažite konzultaciju",
  ctaSecondary: "Pogledajte tretmane",
  trustItems: [
    "Medicinski certificirani tretmani",
    "Individualni pristup svakom klijentu",
    "Zadar, Hrvatska",
  ],
} as const;

// ─── About ────────────────────────────────────────────────────────────────────

export const ABOUT = {
  headline: "Povjerenje, znanje i briga o vama",
  pullQuote: "Svaka koža ima svoju priču.",
  body: "Risus Estetski centar nudi medicinski dokazane estetske tretmane za njegu lica i tijela. Naš tim stručnjaka kombinira najnovije tehnologije s individualnim pristupom svakom klijentu — jer svaka koža ima svoju priču. Nalazimo se u srcu Zadra, u prostoru koji diše mirom i elegantnošću.",
} as const;

// ─── Services ─────────────────────────────────────────────────────────────────

export const SERVICES = [
  {
    id: "hydrafacial",
    name: "Hydrafacial",
    description:
      "Dubinsko čišćenje, hidratacija i obnova kože u jednom tretmanu.",
    image: "/images/treatments/hydrafacial/risus-hydrafacial-device-01.jpg",
    imageAlt: "Hydrafacial uređaj u Risus Estetskom centru",
  },
  {
    id: "dermapen",
    name: "Dermapen 4",
    description:
      "Mikroiglicama potaknuta obnova kolagena za mlađi i ujednačeniji ten.",
    image: "/images/treatments/dermapen/risus-dermapen-device-01.jpg",
    imageAlt: "Dermapen 4 tretman — Risus Estetski centar",
  },
  {
    id: "laser",
    name: "Laserska epilacija",
    description:
      "Trajno uklanjanje dlačica uz najsuvremeniju lasersku tehnologiju.",
    image: "/images/treatments/laser/risus-laser-treatment-01.jpg",
    imageAlt: "Laserska epilacija — Risus Estetski centar",
  },
  {
    id: "medisculpt",
    name: "Medisculpt — Oblikovanje tijela",
    description:
      "Neinvazivno oblikovanje i toniranje tijela bez oporavka.",
    image: "/images/treatments/medisculpt/risus-medisculpt-device-01.jpg",
    imageAlt: "Medisculpt uređaj za oblikovanje tijela",
  },
  {
    id: "masaza",
    name: "Masaža lica i njega kože",
    description:
      "Relaksirajući tretmani koji vraćaju sjaj i vitalnost koži.",
    image: "/images/treatments/face-massage/risus-face-massage-treatment-01.jpg",
    imageAlt: "Masaža lica — Risus Estetski centar",
  },
  {
    id: "anticelulitni",
    name: "Anticelulitni programi",
    description:
      "Individualni programi oblikovanja i njege za glatku i čvrstu kožu tijela.",
    image: "/images/programs/body/risus-body-anticellulite-editorial-01.jpg",
    imageAlt: "Anticelulitni program — Risus Estetski centar",
  },
] as const;

// ─── Results ──────────────────────────────────────────────────────────────────

export const RESULTS = {
  headline: "Rezultati koji govore sami za sebe",
  subtext:
    "Svaki tretman prati individualni plan — vidljivi rezultati, sigurni postupci.",
  images: [
    {
      src: "/images/results/Hydrafacial.jpg",
      alt: "Hydrafacial rezultati — Risus Estetski centar",
      caption: "Tekstura kože",
    },
    {
      src: "/images/results/Hydrafacial1.jpg",
      alt: "Hydrafacial rezultati — Risus Estetski centar",
      caption: "Ten i sjaj",
    },
    {
      src: "/images/results/Hydrafacial12.jpg",
      alt: "Hydrafacial rezultati — Risus Estetski centar",
      caption: "Pore i hidratacija",
    },
    {
      src: "/images/results/risus-results-chemical-peel-01.jpg",
      alt: "Chemical peel rezultati — Risus Estetski centar",
      caption: "Chemical peel rezultati",
    },
  ],
} as const;

// ─── Team ─────────────────────────────────────────────────────────────────────

export const TEAM = {
  headline: "Naš tim",
  subtext: "Stručnjaci predani vašoj ljepoti i zdravlju kože.",
  expert: {
    title: "Osnivačica i glavna estetičarka",
    image: "/images/team/risus-founder-portrait-01.jpg",
    imageAlt: "Estetski stručnjak — Risus Estetski centar",
    quote:
      "Svaki klijent zaslužuje individualni pristup i tretman koji odgovara upravo njemu.",
  },
} as const;

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Maja K.",
    avatar: "https://i.pravatar.cc/80?img=47",
    text: "Profesionalizam osoblja i vrhunska usluga — jedva čekam sljedeći tretman!",
  },
  {
    id: 2,
    name: "Ana T.",
    avatar: "https://i.pravatar.cc/80?img=44",
    text: "Ana je profesionalna, educirana i ljubazna. Tretman čišćenja lica — lice je mjesecima bilo čisto i glatko.",
  },
  {
    id: 3,
    name: "Ivana M.",
    avatar: "https://i.pravatar.cc/80?img=49",
    text: "Ugodna, opuštajuća atmosfera. Fantastična usluga, svima preporučujem.",
  },
  {
    id: 4,
    name: "Petra L.",
    avatar: "https://i.pravatar.cc/80?img=39",
    text: "Svaka pohvala — ugodna atmosfera i profesionalno odrađen posao. Definitivno preporučujem.",
  },
  {
    id: 5,
    name: "Sara B.",
    avatar: "https://i.pravatar.cc/80?img=45",
    text: "Hydrafacial tretman je bio nevjerojatan — koža odmah zasja. Osoblje je strpljivo objasnilo svaki korak. Više neću ići nigdje drugdje.",
  },
  {
    id: 6,
    name: "Lena V.",
    avatar: "https://i.pravatar.cc/80?img=41",
    text: "Konačno salon koji zaista razumije njegu kože. Rezultati Dermapen tretmana su vidljivi već nakon prvog dolaska. Toplo preporučujem svima!",
  },
] as const;

// ─── Contact ──────────────────────────────────────────────────────────────────

export const CONTACT = {
  address: "Bože Peričića 14, Zadar, Hrvatska",
  phone: "+385 99 675 0722",
  phoneHref: "tel:+385996750722",
  email: "risus.salon@gmail.com",
  emailHref: "mailto:risus.salon@gmail.com",
  hours: [
    { days: "Ponedjeljak – Petak", time: "08:00 – 21:00" },
    { days: "Subota", time: "09:00 – 13:00" },
    { days: "Nedjelja", time: "Zatvoreno" },
  ],
  ctaLabel: "Zakažite konzultaciju",
  serviceOptions: [
    "Hydrafacial",
    "Dermapen 4",
    "Laserska epilacija",
    "Medisculpt — Oblikovanje tijela",
    "Masaža lica i njega kože",
    "Anticelulitni programi",
  ],
} as const;

// ─── Footer ───────────────────────────────────────────────────────────────────

export const FOOTER = {
  navLinks: NAV_LINKS,
  email: "risus.salon@gmail.com",
  phone: "+385 99 675 0722",
  copyright: "© 2025 Risus Estetski centar, Zadar",
} as const;
