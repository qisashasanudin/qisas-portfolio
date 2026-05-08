import { asset } from "../utils/asset";

export type ExperienceLink = {
  label: string;
  href: string;
  description: string;
};

export type ExperienceScreenshot = {
  src: string;
  title: string;
  description: string;
};

export type ExperienceHighlight = {
  title: string;
  copy: string;
};

export type ExperienceDetail = {
  eyebrow: string;
  title: string;
  intro: string;
  chips: string[];
  highlights: ExperienceHighlight[];
  hero?: ExperienceScreenshot;
  heroVariant?: "full" | "phone";
  screenshots?: ExperienceScreenshot[];
  links?: ExperienceLink[];
  impact?: string[];
};

export type Experience = {
  slug: string;
  company: string;
  role: string;
  period: string;
  location: string;
  teaser: string;
  logoSrc?: string;
  detail: ExperienceDetail;
};

const virusMediaScreenshots: ExperienceScreenshot[] = [
  {
    src: asset("/virus-media/virus-media-12.png"),
    title: "Login screen",
    description: "Split-screen authentication page with Virus Media branding.",
  },
  {
    src: asset("/virus-media/virus-media-25.png"),
    title: "Campaign detail",
    description:
      "Campaign profile, platform requirements, KOL criteria, and influencer performance cards.",
  },
  {
    src: asset("/virus-media/virus-media-24.png"),
    title: "Campaign report",
    description:
      "Compact reporting card for cost per reach, reach, and impression performance.",
  },
  {
    src: asset("/virus-media/virus-media-20.png"),
    title: "Campaign list",
    description:
      "Campaign management table with filtering, pagination, and edit actions.",
  },
  {
    src: asset("/virus-media/virus-media-19.png"),
    title: "Client database",
    description:
      "Client records with brand identity, contact details, and access credentials.",
  },
  {
    src: asset("/virus-media/virus-media-28.png"),
    title: "Administrator list",
    description:
      "User administration with role, KOL creation totals, and account metadata.",
  },
];

const robotBiruScreenshots: ExperienceScreenshot[] = [
  {
    src: asset("/robot-biru/image 1.png"),
    title: "Super app menu",
    description:
      "Main navigation surface with quick access to ticketing, top-up, and utility features.",
  },
  {
    src: asset("/robot-biru/image 2.png"),
    title: "Train ticket booking",
    description: "Railway booking flow with route and travel date setup.",
  },
  {
    src: asset("/robot-biru/image 3.png"),
    title: "Flight ticket booking",
    description:
      "Airplane ticket purchase flow designed for rapid trip planning.",
  },
  {
    src: asset("/robot-biru/image 4.png"),
    title: "Balance top-up",
    description: "Robot Biru wallet balance top-up screen for account funding.",
  },
  {
    src: asset("/robot-biru/image 5.png"),
    title: "Cellular and e-money top-up",
    description:
      "Recharge flow for phone balance, data plans, and e-money products.",
  },
  {
    src: asset("/robot-biru/image 6.png"),
    title: "Electricity token purchase",
    description:
      "Electricity token top-up screen for prepaid utility use cases.",
  },
  {
    src: asset("/robot-biru/image 7.png"),
    title: "Payment confirmation",
    description: "Checkout and confirmation state in the purchase journey.",
  },
  {
    src: asset("/robot-biru/image 8.png"),
    title: "Transaction completion",
    description:
      "Success state communicating transaction completion and summary.",
  },
];

export const experiences: Experience[] = [
  {
    slug: "ey",
    company: "EY Indonesia",
    role: "Senior Technology Consultant",
    period: "Jul 2024 - Present",
    location: "Jakarta, Indonesia",
    teaser:
      "Handling multiple client engagements across different fields and industries as both a consultant and a developer.",
    logoSrc: asset("/logos/ey.png"),
    detail: {
      eyebrow: "Experience",
      title: "EY Indonesia",
      intro:
        "Handling multiple client engagements across different fields and industries, currently working on a major transformation project for one of the biggest automotive companies in Indonesia.",
      chips: ["Technology consulting", "React", "PWA", "RBAC"],
      highlights: [
        {
          title: "Role",
          copy: "Senior technology consultant focused on product delivery and frontend implementation.",
        },
        {
          title: "Scope",
          copy: "Multiple client contexts, including back-office platforms, mobile applications, and role-based product access for a flagship automotive transformation program.",
        },
        {
          title: "Focus",
          copy: "Translate business operations into clear, reliable software for production teams.",
        },
      ],
      impact: [
        "Built React frontend experiences with PWA capabilities and role-based access control.",
        "Translated complex client operations into reliable product flows for service and back-office teams.",
        "Worked closely with multidisciplinary teams to keep feature delivery aligned with business goals.",
      ],
    },
  },
  {
    slug: "henan",
    company: "Henan Asset Management",
    role: "Software Engineer",
    period: "Mar 2022 - Jul 2024",
    location: "Jakarta, Indonesia",
    teaser:
      "Shipped public web platforms plus internal software solutions, dashboards, and integrations.",
    logoSrc: asset("/logos/henan.png"),
    detail: {
      eyebrow: "Experience",
      title: "Henan Asset Management",
      intro:
        "Worked as a software engineer delivering public web platforms and internal software solutions, partnering with business stakeholders to turn requirements into reliable, maintainable web experiences.",
      chips: ["Public website", "Product marketing", "Web delivery"],
      highlights: [
        {
          title: "Role",
          copy: "Software engineer responsible for delivery across public websites and internal systems, including implementation, iteration, and production support.",
        },
        {
          title: "Scope",
          copy: "Corporate web presence, retail-facing marketing/onboarding flows, plus back-office tools and integrations.",
        },
        {
          title: "Focus",
          copy: "Fast iteration with clean UX, dependable integrations, and stable deployments that hold up in production.",
        },
      ],
      links: [
        {
          label: "hpam.co.id",
          href: "https://hpam.co.id/",
          description:
            "Corporate website shipped as part of the public web presence workstream.",
        },
        {
          label: "myhero.id",
          href: "https://myhero.id/",
          description:
            "Retail-facing marketing and onboarding experience shipped as part of the public product web workstream.",
        },
      ],
      impact: [
        "Managed two part-time engineers while delivering multiple web projects.",
        "Developed back-office systems for customer and transaction management.",
        "Integrated OCR, payment gateway, email, and other third-party services using a MERN-oriented stack.",
      ],
    },
  },
  {
    slug: "virus-media",
    company: "Virus Media",
    role: "Fullstack Developer Intern",
    period: "Jan 2022 - Apr 2022",
    location: "Jakarta, Indonesia",
    teaser:
      "Built a KOL campaign dashboard covering administration, setup, reporting, and influencer tracking.",
    logoSrc: asset("/logos/virus-media.png"),
    detail: {
      eyebrow: "Experience",
      title: "Virus Media",
      intro:
        "Contributed as a full-stack developer intern working with UI/UX teammates to deliver end-to-end dashboard features, from data and authentication flows to operational screens and reporting views.",
      chips: ["React.js", "MERN Stack", "CoreUI", "Bootstrap", "Dashboard UI"],
      highlights: [
        {
          title: "Role",
          copy: "Full-stack developer intern collaborating with UI/UX teammates.",
        },
        {
          title: "Scope",
          copy: "Authentication, database management screens, campaign setup, KOL data, and reporting views.",
        },
        {
          title: "Focus",
          copy: "Operational clarity for teams managing influencer marketing campaigns.",
        },
      ],
      hero: virusMediaScreenshots[0],
      screenshots: virusMediaScreenshots,
      impact: [
        "Delivered dashboard functionality using React.js, MERN stack, CoreUI, and Bootstrap.",
      ],
    },
  },
  {
    slug: "edumatic",
    company: "Edumatic International",
    role: "Mobile Application Developer Intern",
    period: "Jan 2021 - Feb 2021",
    location: "Bandung, Indonesia",
    teaser:
      "Led a mobile super-app internship team focused on ticket booking and utility payment flows.",
    logoSrc: asset("/logos/edumatic.png"),
    detail: {
      eyebrow: "Experience",
      title: "Edumatic International",
      intro:
        "Positioned as a mobile application developer intern and as an internship team lead, coordinating delivery of multiple Flutter app flows within a super-app named 'Robot Biru' and ensuring consistent UX across booking, top-up, and utility payment journeys.",
      chips: ["Flutter", "Dart", "Mobile App", "Ticketing", "Top-up"],
      highlights: [
        {
          title: "Role",
          copy: "Mobile application developer intern and team lead during the internship program.",
        },
        {
          title: "Scope",
          copy: "Train and Airplane ticket booking flows, balance top-up, cellular/e-money recharge, and utility payments.",
        },
        {
          title: "Focus",
          copy: "Clear end-user transaction journeys with reliable form and checkout experiences.",
        },
      ],
      hero: robotBiruScreenshots[0],
      heroVariant: "phone",
      screenshots: robotBiruScreenshots,
      impact: [
        "Coordinated four interns and shipped Flutter-based app features across mobile workflows.",
      ],
    },
  },
];
