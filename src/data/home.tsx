import type { ReactNode } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";

export type Contact = {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
};

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const programmingLanguages = ["C", "C++", "C#", "Python", "Java", "JavaScript", "TypeScript", "Go", "Dart"];

export function calculateCompletedYears(startDate: string) {
  const start = new Date(startDate);
  const today = new Date();
  let years = today.getFullYear() - start.getFullYear();
  const hasNotReachedAnniversary =
    today.getMonth() < start.getMonth() ||
    (today.getMonth() === start.getMonth() && today.getDate() < start.getDate());

  if (hasNotReachedAnniversary) {
    years -= 1;
  }

  return Math.max(years, 0);
}

export const skillGroups = [
  {
    title: "Programming",
    items: ["JavaScript", "TypeScript", "React.js", "Node.js", "Go", "Python", "Java", "C", "C++", "C#", "Flutter"],
  },
  {
    title: "Backend & Data",
    items: ["Express.js", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Sequelize", "Firebase", "REST APIs"],
  },
  {
    title: "Product & Delivery",
    items: ["Agile", "Scrum", "Jira", "Confluence", "Trello", "Notion", "Postman", "Leadership"],
  },
  {
    title: "Languages",
    items: ["English", "Indonesian", "Sundanese"],
  },
];

export const contacts: Contact[] = [
  {
    label: "Email",
    value: "qisas.hasanudin@gmail.com",
    href: "mailto:qisas.hasanudin@gmail.com",
    icon: <MailOutlineIcon />,
  },
  {
    label: "Phone",
    value: "+62 878 1571 0719",
    href: "tel:+6287815710719",
    icon: <PhoneIcon />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/qisashasanudin",
    href: "https://www.linkedin.com/in/qisashasanudin/",
    icon: <LinkedInIcon />,
  },
  {
    label: "GitHub",
    value: "github.com/qisashasanudin",
    href: "https://github.com/qisashasanudin",
    icon: <GitHubIcon />,
  },
];

export function getHomeStats() {
  return [
    { label: "Years of experience", value: `${calculateCompletedYears("2021-01-01")}+` },
    { label: "Programming languages", value: String(programmingLanguages.length) },
    { label: "Languages", value: "3" },
    { label: "Repositories", value: "17" },
  ];
}

