import { atom } from "recoil";

const experianceList = [
  {
    id: "46bf76ae-8915-4e5d-ae92-4151be80e75a",
    title: "Netzero web",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing   elit. Beatae cumque laborum, placeat nobis fugit nemo ipsa voluptates error quo possimus ea velit quos voluptatum magnam id eius quam accusamus. Eum blanditiis aperiam minus inventore laboriosam, et vel ipsam perspiciatis a facilis cum, iure alias recusandae dolorem adipisci illum. Quo maxime nisi minus mollitia praesentium cumque, temporibus incidunt nulla culpa eligendi consequatur doloremque repudiandae aspernatur quas necessitatibus tenetur. ",
    img: [
      "/img/placeholder.png",
      "/img/placeholder.png",
      "/img/placeholder.png",
      "/img/placeholder.png",
    ],
    tags: ["react", "vite", "wordpress"],
    link: "https://www.net0.se",
  },
  {
    id: "55515a25-deb1-451c-bc7d-006d293f54aa",
    title: "Lets fly",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae cumque laborum, placeat nobis fugit nemo ipsa voluptates error quo possimus ea velit quos voluptatum magnam id eius quam accusamus. Eum blanditiis aperiam minus inventore laboriosam, et vel ipsam perspiciatis a facilis cum, iure alias recusandae dolorem adipisci illum. Quo maxime nisi minus mollitia praesentium cumque, temporibus incidunt nulla culpa eligendi consequatur doloremque repudiandae aspernatur quas necessitatibus tenetur. ",
    img: [
      "/img/placeholder.png",
      "/img/placeholder.png",
      "/img/placeholder.png",
      "/img/placeholder.png",
    ],
    tags: ["react", "vite", "shopify"],
    link: undefined,
  },
  {
    id: "e93a5d54-3442-4b19-b568-8ae550aa09fe",
    title: "Project 3",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae cumque laborum, placeat nobis fugit nemo ipsa voluptates error quo possimus ea velit quos voluptatum magnam id eius quam accusamus. Eum blanditiis aperiam minus inventore laboriosam, et vel ipsam perspiciatis a facilis cum, iure alias recusandae dolorem adipisci illum. Quo maxime nisi minus mollitia praesentium cumque, temporibus incidunt nulla culpa eligendi consequatur doloremque repudiandae aspernatur quas necessitatibus tenetur. Similique fuga rerum provident distinctio doloremque qui accusamus, sequi voluptate eveniet voluptatum autem odio placeat quasi temporibus quas nulla laborum sunt tenetur dolorum, incidunt error porro amet modi? Temporibus amet optio mollitia omnis?",
    img: [
      "/img/placeholder.png",
      "/img/placeholder.png",
      "/img/placeholder.png",
      "/img/placeholder.png",
    ],
    tags: ["react", "vite", "wordpress"],
    link: undefined,
  },
  {
    id: "cedeb531-0409-4e1f-b7e9-9668dcaa5e71",
    title: "Project 4",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae cumque laborum, placeat nobis fugit nemo ipsa voluptates error quo possimus ea velit quos voluptatum magnam id eius quam accusamus. Eum blanditiis aperiam minus inventore laboriosam, et vel ipsam perspiciatis a facilis cum, iure alias recusandae dolorem adipisci illum. Quo maxime nisi minus mollitia praesentium cumque, temporibus incidunt nulla culpa eligendi consequatur doloremque repudiandae aspernatur quas necessitatibus tenetur. Similique fuga rerum provident distinctio doloremque qui accusamus, sequi voluptate eveniet voluptatum autem odio placeat quasi temporibus quas nulla laborum sunt tenetur dolorum, incidunt error porro amet modi? Temporibus amet optio mollitia omnis?",
    img: [
      "/img/placeholder.png",
      "/img/placeholder.png",
      "/img/placeholder.png",
      "/img/placeholder.png",
    ],
    tags: ["react", "vite", "wordpress"],
    link: undefined,
  },
  {
    id: "5e2ea8b8-bb1e-4c9d-a723-42406bf7be72",
    title: "Project 5",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae cumque laborum, placeat nobis fugit nemo ipsa voluptates error quo possimus ea velit quos voluptatum magnam id eius quam accusamus. Eum blanditiis aperiam minus inventore laboriosam, et vel ipsam perspiciatis a facilis cum, iure alias recusandae dolorem adipisci illum. Quo maxime nisi minus mollitia praesentium cumque, temporibus incidunt nulla culpa eligendi consequatur doloremque repudiandae aspernatur quas necessitatibus tenetur. Similique fuga rerum provident distinctio doloremque qui accusamus, sequi voluptate eveniet voluptatum autem odio placeat quasi temporibus quas nulla laborum sunt tenetur dolorum, incidunt error porro amet modi? Temporibus amet optio mollitia omnis?",
    img: [
      "/img/placeholder.png",
      "/img/placeholder.png",
      "/img/placeholder.png",
      "/img/placeholder.png",
    ],
    tags: ["react", "vite", "wordpress"],
    link: undefined,
  },
];

export const projectsAtom = atom({ key: "projects", default: experianceList });
