import { atom } from "recoil";

const experianceList = [
  {
    id: "46bf76ae-8915-4e5d-ae92-4151be80e75a",
    title: "Netzero web",
    subtitle: "Lead UI/UX Designer & Frontend Developer",
    info: "As the lead UI/UX designer and frontend developer for Net0's sustainability platform, I spearheaded the creation of an intuitive system that seamlessly integrates eco-conscious practices with modern technology. Built with React and TypeScript, the platform features a comprehensive dashboard for tracking carbon emissions, implementing sustainable practices, and generating detailed reports. I collaborated closely with the backend team to ensure smooth integration with the Node.js and PostgreSQL infrastructure, while maintaining a strong focus on user experience and accessibility throughout the development process.",
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
    sortOrder: 2
  },
  {
    id: "55515a25-deb1-451c-bc7d-006d293f54aa",
    title: "Lets fly",
    subtitle: "Full Stack Developer",
    info: "Developed a comprehensive aviation services platform using Next.js and WordPress, focusing on creating a seamless experience for both service providers and clients. Implemented GraphQL for efficient data management and real-time updates, while utilizing Tailwind CSS for responsive and modern design. The platform features a sophisticated booking system, real-time availability tracking, and integrated payment processing. I worked closely with the client to ensure the WordPress integration met their specific requirements while maintaining high performance and security standards throughout the development process.",
    img: ["/img/letsfly_1.png", "/img/letsfly_2.png", "/img/letsfly_3.png"],
    tags: ["React", "NextJS", "Wordpress", "GraphQL", "MySQL", "Tailwind"],
    link: "https://preview.letsfly.app/",
    previewImg: "/img/mockup_net0.png",
    sortOrder: 3
  },
  {
    id: 4,
    title: "DataTjej",
    subtitle: "Board Member & Web Developer",
    info: "As a board member of DataTjej, I'm actively involved in shaping the future of this non-profit organization that supports women and non-binary individuals in tech. Currently leading the development of a new website using Next.js and Tailwind CSS, focusing on creating a modern, accessible platform. The project includes automating connections to various solutions like our podcast and event management systems, streamlining our digital presence and member engagement.",
    img: ["/images/datatjej-placeholder.jpg"],
    previewImg: "/images/datatjej-placeholder.jpg",
    tags: ["Next.js", "Tailwind CSS", "Board Member", "Web Development", "Automation"],
    link: "https://datatjej.se",
    sortOrder: 1
  },
  {
    id: 5,
    title: "DataTjej",
    subtitle: "IT Support & User Management",
    info: "As part of the DataTjej board, I manage user access and IT support for our growing community of over 6000 members. I handle user permissions, group management, and ensure secure access to our various platforms. This includes setting up and maintaining appropriate access levels for different user groups, troubleshooting technical issues, and implementing security best practices. I also work on automating user management processes and maintaining our IT infrastructure using Google Cloud services to support our community's needs.",
    img: ["/images/datatjej-it-placeholder.jpg"],
    previewImg: "/images/datatjej-it-placeholder.jpg",
    tags: ["User Management", "IT Support", "Access Control", "Security", "Automation", "Community Management", "Google Cloud"],
    link: "https://datatjej.se",
    sortOrder: 4
  }
];

// Sort the list by sortOrder
const sortedExperianceList = [...experianceList].sort((a, b) => a.sortOrder - b.sortOrder);

export const projectsAtom = atom({ key: "projects", default: sortedExperianceList });
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
