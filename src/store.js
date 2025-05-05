import { atom } from "recoil";

const experianceList = [
  {
    id: "46bf76ae-8915-4e5d-ae92-4151be80e75a",
    title: "Netzero web",
    info: "Led UI/UX design and frontend development for Net0's sustainability platform. Built with React, creating an intuitive system that combines eco-conscious practices with modern technology.",
    img: ["/img/net0_0.png", "/img/net0_1.png", "/img/net0_2.png"],
    previewImg: "/img/mockup_net0.png",
    tags: [
      "React",
      "Vite",
      "Figma",
      "Tailwind",
      "TypeScript",
      "Rest API",
      "Node.js",
      "Postgres",
      "Prisma",
      "Javascript",
    ],
    link: "https://www.net0.se",
  },
  {
    id: "55515a25-deb1-451c-bc7d-006d293f54aa",
    title: "Lets fly",
    info: "Developed an aviation services platform using Next.js and WordPress. Implemented GraphQL for efficient data management and Tailwind for responsive design, with a focus on client-requested WordPress integration.",
    img: ["/img/letsfly_1.png", "/img/letsfly_2.png", "/img/letsfly_3.png"],
    tags: ["React", "NextJS", "Wordpress", "GraphQL", "MySQL", "Tailwind"],
    link: "https://preview.letsfly.app/",
    previewImg: "/img/mockup_net0.png",
  },
];

export const projectsAtom = atom({ key: "projects", default: experianceList });
export const skillsAtom = atom({
  key: "skills",
  default: {
    languages: ["JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
    frameworks: [
      "React",
      "Node.js",
      "Next.js",
      "Vite.js",
      "Apollo GraphQL",
      "Tailwind",
      "Material UI",
      "Chakra UI",
      "Axios & Fetch",
      "Framer Motion",
      "WordPress",
      "Shopify",
    ],
    tools: [
      "GIT",
      "MySQL",
      "Docker",
      "Visual Studio Code",
      "Rapid API",
      "TablePlus",
      "Trello",
      "Figma",
      "Blender",
    ],
  },
});
