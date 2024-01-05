import { atom } from "recoil";

const experianceList = [
  {
    id: "46bf76ae-8915-4e5d-ae92-4151be80e75a",
    title: "Netzero web",
    info: "Discover the intersection of sustainability and technology in my collaboration with Net0. As the creative force behind the UI/UX design, I meticulously crafted a seamless and visually appealing user experience. Bringing this vision to life, I also spearheaded the frontend development, using React to construct an intuitive and efficient system for Net0. Immerse yourself in the synergy of eco-conscious practices and cutting-edge technology as we navigate towards a greener future, one React component at a time.",
    img: ["/img/net0_0.png", "/img/net0_1.png", "/img/net0_2.png"],
    tags: [
      "React",
      "Vite",
      "Figma",
      "Tailwind",
      "TypeScript",
      "Rest API",
      "Node.js",
      "Postgres",
    ],
    link: "https://www.net0.se",
  },
  {
    id: "55515a25-deb1-451c-bc7d-006d293f54aa",
    title: "Lets fly",
    info: "Letsfly is a website aimed at providing a platform for aviation-related services and information. Built on Next.js, a popular React framework, the website leverages its server-side rendering (SSR) capability to enhance performance and user experience. Tailwind was used as the CSS framework to quickly and efficiently create an attractive and responsive design. WordPress, a well-known Content Management System (CMS), was employed as the content management system to administer and publish content on the website. The reason for choosing WordPress was a client request; he was familiar with this system and wanted to be able to modify the content himself. GraphQL was selected as the API layer to enable efficient data management and flexible data queries between the frontend and backend.",
    img: ["/img/letsfly_1.png", "/img/letsfly_2.png", "/img/letsfly_3.png"],
    tags: ["React", "NextJS", "Wordpress", "GraphQL", "MySQL", "Tailwind"],
    link: "https://preview.letsfly.app/",
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
      "Postman API",
      "TablePlus",
      "Trello",
      "Figma",
    ],
  },
});
