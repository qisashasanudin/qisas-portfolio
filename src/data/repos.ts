export type Repo = {
  name: string;
  description: string;
  stack: string[];
  url: string;
  homepage?: string;
};

export const repos: Repo[] = [
  {
    name: "go-micro",
    description:
      "A Go-based microservices learning project that reflects backend architecture practice and service-oriented development.",
    stack: ["Go", "Microservices", "Backend"],
    url: "https://github.com/qisashasanudin/go-micro",
  },
  {
    name: "vdi-todo-app",
    description:
      "A TypeScript frontend project for a todo application, paired with a separate Go API service.",
    stack: ["TypeScript", "Frontend", "API Client"],
    url: "https://github.com/qisashasanudin/vdi-todo-app",
  },
  {
    name: "vdi-todo-api",
    description:
      "A Go API project that complements the todo app and demonstrates service design beyond the browser.",
    stack: ["Go", "REST API", "Backend"],
    url: "https://github.com/qisashasanudin/vdi-todo-api",
  },
  {
    name: "react-movies",
    description:
      "A movie browsing web app that shows React fundamentals, data-driven UI, and deployed web experience.",
    stack: ["React", "JavaScript", "Vercel"],
    url: "https://github.com/qisashasanudin/react-movies",
    homepage: "https://sedih-mdb.vercel.app",
  },
  {
    name: "kurir_kopi",
    description:
      "A Dart mobile project shaped around delivery and ordering flows, showing comfort outside the web stack.",
    stack: ["Dart", "Flutter", "Mobile"],
    url: "https://github.com/qisashasanudin/kurir_kopi",
  },
  {
    name: "bangunin_id",
    description:
      "A Flutter project from an early product-building phase, focused on practical app workflows and mobile UI.",
    stack: ["Dart", "Flutter", "Product"],
    url: "https://github.com/qisashasanudin/bangunin_id",
  },
];

