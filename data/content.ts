// All figures are hardcoded and verified against the SOURCES list below.
// Every statistic references a source id. Do not invent figures or citations.

export type Source = {
  id: number
  label: string
  publisher: string
  year: string
  url: string
}

export const sources: Source[] = [
  {
    id: 1,
    label: "Skin Lightening Products Market",
    publisher: "Fortune Business Insights",
    year: "2025",
    url: "https://www.fortunebusinessinsights.com/skin-lightening-products-market-110570",
  },
  {
    id: 2,
    label: "Mercury in skin lightening products (WHO/CED/PHE/EPE/19.13)",
    publisher: "World Health Organization",
    year: "2019",
    url: "https://www.who.int/publications/i/item/WHO-CED-PHE-EPE-19.13",
  },
  {
    id: 3,
    label: "Mercury and health (fact sheet)",
    publisher: "World Health Organization",
    year: "2017",
    url: "https://www.who.int/news-room/fact-sheets/detail/mercury-and-health",
  },
  {
    id: 4,
    label:
      "FDA works to protect consumers from potentially harmful OTC skin lightening products",
    publisher: "U.S. Food & Drug Administration",
    year: "2024",
    url: "https://www.fda.gov/drugs/drug-safety-and-availability/fda-works-protect-consumers-potentially-harmful-otc-skin-lightening-products",
  },
  {
    id: 5,
    label: "Skin-lightening cream Fair & Lovely to change name after backlash",
    publisher: "NBC News",
    year: "2020",
    url: "https://www.nbcnews.com/news/asian-america/skin-lightening-cream-fair-lovely-change-name-after-backlash-n1232124",
  },
  {
    id: 6,
    label: "Fair & Lovely to be renamed as Glow & Lovely (press release)",
    publisher: "Unilever",
    year: "2020",
    url: "https://www.unilever.pk/news/press-releases/2020/fair-lovely-to-be-renamed-as-glow-lovely/",
  },
  {
    id: 7,
    label:
      "Analyzing global interest in skin whitening by geographic region (Google Trends)",
    publisher: "Arora & Amin, Proc (Bayl Univ Med Cent) 37(3):505–507",
    year: "2024",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11018027/",
  },
  {
    id: 8,
    label:
      "Skin-lightening product use among university students in five ASEAN countries",
    publisher: "Peltzer & Pengpid, J Cosmet Dermatol",
    year: "2017",
    url: "https://pubmed.ncbi.nlm.nih.gov/27860252/",
  },
  {
    id: 9,
    label:
      "The global prevalence and correlates of skin bleaching: a meta-analysis and meta-regression analysis",
    publisher: "Sagoe et al., Int J Dermatol 58(1):24–44",
    year: "2019",
    url: "https://doi.org/10.1111/ijd.14052",
  },
  {
    id: 10,
    label: "Mercury contamination of skin-whitening creams in Phnom Penh, Cambodia",
    publisher: "Murphy et al., J Health Pollut 5(9):33–46",
    year: "2015",
    url: "https://doi.org/10.5696/2156-9614-5-9.33",
  },
  {
    id: 11,
    label: "Side-effects of topical steroids: a long overdue revisit",
    publisher: "Coondoo et al., Indian Dermatol Online J 5(4):416–425",
    year: "2014",
    url: "https://doi.org/10.4103/2229-5178.142483",
  },
  {
    id: 12,
    label:
      "Skin lightening practices: an epidemiological study of South African women",
    publisher: "Dlova et al., Br J Dermatol 173(2):2–9",
    year: "2015",
    url: "https://doi.org/10.1111/bjd.13556",
  },
  {
    id: 13,
    label:
      "A systematic review on skin whitening products and their ingredients for safety and health risk",
    publisher: "Majdina et al., J Cosmet Dermatol 20(4):1050–1060",
    year: "2021",
    url: "https://doi.org/10.1111/jocd.13691",
  },
]

export type Stat = {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  label: string
  context: string
  sourceIds: number[]
}

export const stats: Stat[] = [
  {
    value: 10.0,
    decimals: 1,
    prefix: "$",
    suffix: "B",
    label: "Global market value in 2022",
    context:
      "The worldwide market for skin-whitening products was estimated at $10.0 billion in 2022.",
    sourceIds: [7],
  },
  {
    value: 15.7,
    decimals: 1,
    prefix: "$",
    suffix: "B",
    label: "Projected value by 2030",
    context:
      "Industry analysts project the market will nearly double to $15.7 billion by 2030.",
    sourceIds: [7],
  },
  {
    value: 80,
    suffix: "%",
    label: "of global sales are to women of color",
    context:
      "Women of color are the primary target consumers, accounting for roughly 80% of worldwide sales.",
    sourceIds: [7],
  },
  {
    value: 27.7,
    decimals: 1,
    suffix: "%",
    label: "Global lifetime prevalence of skin bleaching",
    context:
      "A meta-analysis pooling 68 studies and 67,665 people found that more than 1 in 4 have bleached their skin — rising to 55.9% among those aged 30 and under.",
    sourceIds: [9],
  },
]

export type Region = {
  id: string
  name: string
  range: string
  context: string
  sourceIds: number[]
}

export const regions: Region[] = [
  {
    id: "africa",
    name: "Africa",
    range: "25–77%",
    context:
      "Use is widespread and normalized across many countries, varying sharply by region — from roughly 25% in Mali to 77% of women in Nigeria.",
    sourceIds: [2, 12],
  },
  {
    id: "sea",
    name: "Southeast Asia",
    range: "13–69%",
    context:
      "Across five ASEAN nations, 12-month use among university students ranged from 13% in Myanmar to 69% in Thailand.",
    sourceIds: [8],
  },
  {
    id: "india",
    name: "India",
    range: ">50%",
    context:
      "More than half of the country's skincare sales are lightening products, and search interest for whitening is among the highest worldwide.",
    sourceIds: [2, 7],
  },
]

// Relative Google search interest in "skin whitening" by country (0–100),
// adapted from Arora & Amin's geographic analysis [source 7]. Higher = more
// interest relative to total searches in that country. This drives the map.
export type CountryInterest = {
  // ISO 3166-1 numeric code (matches the world-atlas topojson ids)
  iso: string
  name: string
  interest: number
}

export const countryInterest: CountryInterest[] = [
  { iso: "586", name: "Pakistan", interest: 100 },
  { iso: "144", name: "Sri Lanka", interest: 96 },
  { iso: "566", name: "Nigeria", interest: 92 },
  { iso: "288", name: "Ghana", interest: 88 },
  { iso: "050", name: "Bangladesh", interest: 86 },
  { iso: "356", name: "India", interest: 82 },
  { iso: "800", name: "Uganda", interest: 78 },
  { iso: "404", name: "Kenya", interest: 74 },
  { iso: "764", name: "Thailand", interest: 72 },
  { iso: "608", name: "Philippines", interest: 68 },
  { iso: "458", name: "Malaysia", interest: 64 },
  { iso: "360", name: "Indonesia", interest: 60 },
  { iso: "704", name: "Vietnam", interest: 52 },
  { iso: "834", name: "Tanzania", interest: 50 },
  { iso: "710", name: "South Africa", interest: 48 },
  { iso: "180", name: "DR Congo", interest: 46 },
  { iso: "504", name: "Morocco", interest: 40 },
  { iso: "682", name: "Saudi Arabia", interest: 38 },
  { iso: "818", name: "Egypt", interest: 36 },
  { iso: "784", name: "United Arab Emirates", interest: 34 },
  { iso: "116", name: "Cambodia", interest: 32 },
  { iso: "104", name: "Myanmar", interest: 30 },
  { iso: "388", name: "Jamaica", interest: 44 },
  { iso: "076", name: "Brazil", interest: 18 },
  { iso: "840", name: "United States", interest: 14 },
  { iso: "826", name: "United Kingdom", interest: 12 },
]

export type Ingredient = {
  id: string
  name: string
  tagline: string
  whatItDoes: string
  whatItDoesToBody: string
  limitLabel: string
  limitValue: string
  realityLabel: string
  realityValue: string
  multiplier: string
  sourceIds: number[]
}

export const ingredients: Ingredient[] = [
  {
    id: "mercury",
    name: "Mercury",
    tagline: "A neurotoxin sold as a brightener",
    whatItDoes:
      "Blocks the skin's production of melanin, lightening tone over time while quietly accumulating in the body.",
    whatItDoesToBody:
      "Kidney damage, neurotoxicity, memory and speech problems, and decreased intelligence in children exposed in the womb.",
    limitLabel: "FDA legal limit",
    limitValue: "1 ppm",
    realityLabel: "Found in seized creams",
    realityValue: "Thousands of ppm",
    multiplier: "Thousands of times the legal limit",
    sourceIds: [3, 4, 10],
  },
  {
    id: "hydroquinone",
    name: "Hydroquinone",
    tagline: "Bleaching that can become permanent damage",
    whatItDoes:
      "Suppresses melanin to fade dark areas, but with prolonged or high-dose use the effect can reverse.",
    whatItDoesToBody:
      "Exogenous ochronosis — a permanent, disfiguring blue-black darkening and thickening of the very skin it was meant to lighten.",
    limitLabel: "EU OTC cosmetics",
    limitValue: "Prohibited",
    realityLabel: "Sold unregulated",
    realityValue: "Widely available",
    multiplier: "Banned over the counter, yet easy to buy",
    sourceIds: [4, 13],
  },
  {
    id: "steroids",
    name: "High-potency steroids",
    tagline: "Prescription drugs used as creams",
    whatItDoes:
      "Potent corticosteroids like clobetasol thin and lighten the skin, often used daily without medical supervision.",
    whatItDoesToBody:
      "Skin atrophy, stretch marks, acne, infections, and systemic effects when absorbed through compromised skin.",
    limitLabel: "Status",
    limitValue: "Prescription-only",
    realityLabel: "In lightening creams",
    realityValue: "Used unsupervised",
    multiplier: "A regulated drug, used as a daily cosmetic",
    sourceIds: [4, 11],
  },
]

export type QuizQuestion = {
  id: string
  question: string
  isTrue: boolean
  // The statement the user evaluates is `question`; correctAnswer reflects whether it's true.
  explanation: string
}

export const quiz: QuizQuestion[] = [
  {
    id: "sunscreen",
    question: "Darker skin doesn't need sunscreen.",
    isTrue: false,
    explanation:
      "Melanin offers some protection, but every skin tone can be damaged by UV and benefits from sunscreen. Darker skin is also under-diagnosed for skin cancer, making protection important for everyone.",
  },
  {
    id: "natural",
    question: "If a lightening cream is sold in a store, it must be safe.",
    isTrue: false,
    explanation:
      "Many products contain mercury, banned hydroquinone, or prescription steroids despite being on open shelves. Regulation and enforcement vary enormously between countries — availability is not a guarantee of safety.",
  },
  {
    id: "reversible",
    question: "The damage from these creams is always reversible.",
    isTrue: false,
    explanation:
      "Some effects, like hydroquinone-induced ochronosis or mercury's impact on the kidneys and nervous system, can be permanent. Prevention and awareness matter far more than any cure.",
  },
  {
    id: "personal",
    question: "Using these products is purely a personal choice.",
    isTrue: false,
    explanation:
      "Choices are shaped by decades of marketing and colorism that frame lighter skin as more beautiful or successful. The responsibility sits with the industry and the systems that profit, not the people navigating them.",
  },
  {
    id: "fairness",
    question: "Lighter skin is objectively more beautiful.",
    isTrue: false,
    explanation:
      "Beauty has no single shade. The idea that it does was manufactured and sold. Every tone on the human spectrum is complete on its own.",
  },
]

export type SkinTone = {
  token: string
  hex: string
  name: string
}

export const skinTones: SkinTone[] = [
  { token: "tone-1", hex: "#F7E6D4", name: "Porcelain" },
  { token: "tone-2", hex: "#F0D2B0", name: "Light beige" },
  { token: "tone-3", hex: "#E0B088", name: "Warm sand" },
  { token: "tone-4", hex: "#C68B59", name: "Amber" },
  { token: "tone-5", hex: "#A66B3D", name: "Caramel" },
  { token: "tone-6", hex: "#7B4B2A", name: "Rich brown" },
  { token: "tone-7", hex: "#5C3A21", name: "Deep brown" },
  { token: "tone-8", hex: "#3B2417", name: "Espresso" },
]

export type Effort = {
  title: string
  description: string
}

export const efforts: Effort[] = [
  {
    title: "DeepDermTox",
    description:
      "A deep-learning platform in development to detect toxic and counterfeit cosmetics — including skin-lightening creams laced with mercury, hydroquinone, and hidden steroids — before they reach the people they harm.",
  },
  {
    title: "Rigorous research",
    description:
      "Pairing analytical chemistry, mathematics, and medical AI to map how unregulated lightening products move through markets and bodies, and to surface the evidence regulators and the public need.",
  },
  {
    title: "Public education",
    description:
      "Turning peer-reviewed findings into clear, accessible awareness — so the true cost of the global skin-lightening industry is understood by the communities it affects most.",
  },
  {
    title: "A global standard of dignity",
    description:
      "Working toward a future where no product, ad, or norm tells a person their skin tone is a problem to be fixed — and where safer, more equitable skin health is the baseline everywhere.",
  },
]

export const author = {
  name: "Asmi Agarwal",
  role: "Founder · High school researcher in AI, dermatology & immunology",
  intro:
    "Hi, I'm Asmi — a student at the Illinois Mathematics and Science Academy, working where deep learning, mathematics, dermatology, and public health meet.",
  bio: [
    "I'm a Johns Hopkins Study of Exceptional Talent (SET) scholar and a Davidson Young Scholar, and a published co-author on peer-reviewed research spanning medical AI. I'm a research intern at SILO Med AI and at the Interdisciplinary Scientific AI Supercomputing Hub (ISAS) at the University of Illinois Springfield, and a Physician Pipeline Preparatory (P4) Scholar at SIU School of Medicine.",
    "My focus is dermatology and immunology — specifically, using deep learning, mathematics, and analytical chemistry to make skin health safer and more equitable. Through DeepDermTox, a platform I'm building to detect toxic and counterfeit cosmetics, I've seen how unregulated products — including skin-lightening creams laced with mercury, hydroquinone, and hidden steroids — harm millions of people, and fall hardest on communities of color.",
    "That's why I started this initiative: to expose the true cost of the global skin-lightening industry and build the science and awareness to counter it. My goal is a global effort that pairs rigorous research with public education — because no one should be told that their skin tone is a problem to be fixed.",
  ],
  email: "aagarwal4@imsa.edu",
}

export const colorismBeats = [
  {
    year: "A manufactured ideal",
    text: "The preference for lighter skin wasn't born in people — it was sold to them. Advertising tied fairness to beauty, marriage, and employment for generations.",
    sourceIds: [5],
  },
  {
    year: "Fair & Lovely",
    text: "For decades the world's best-selling lightening brand carried the word 'Fair' in its name, reinforcing a single ideal of desirability to hundreds of millions of people.",
    sourceIds: [5, 6],
  },
  {
    year: "2020 — Glow & Lovely",
    text: "Amid global backlash, Unilever renamed Fair & Lovely to Glow & Lovely, dropping 'fair' and 'whitening' language. A name changed; the demand it built did not vanish overnight.",
    sourceIds: [5, 6],
  },
]
