import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { projectsAtom } from "../store";
import Tags from "../components/Tags";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Experiance() {
  const experianceList = useRecoilValue(projectsAtom);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const experianceListUI = experianceList.map((item, key) => {
    const even = key % 2;

    return (
      <motion.article
        ref={ref}
        variants={itemVariants}
        className={`flex-1 gap-4 mb-12 bg-[#f0f0f3] border shadow-box ${
          (even === 0 && "rounded-tl-3xl rounded-br-3xl") ||
          "rounded-tr-3xl rounded-bl-3xl"
        }`}
        key={item.id}
      >
        <div className={`flex pt-4 md:pt-14 flex-col `}>
          <div className="px-4 mb-4">
            <h3 className="text-subTMiniPhone md:text-subTMini font-ht">
              {item.title}
            </h3>
          </div>
          <figure className="basis-5/12">
            <img
              className="w-full"
              src={item.img[0]}
              alt={`Preview of ${item.title} project`}
            />
          </figure>
          <div className="grow"></div>
          <div className="flex flex-col px-4 pt-4 pb-8 basis-3/12">
            <div className="mb-4">
              <Tags listOfTags={item.tags} />
            </div>

            <div className="text-base mb-6">
              <p>{item.info}</p>
            </div>
          </div>
        </div>
      </motion.article>
    );
  });

  return (
    <section className="relative" aria-labelledby="projects-heading">
      <div
        id="experience"
        className="absolute -top-16"
        aria-hidden="true"
      ></div>
      <div className="min-h-screen">
        <h2
          id="projects-heading"
          className="text-subTPhone md:text-subT font-headline mb-6"
        >
          Projects and experience<span className="text-highlight">.</span>
        </h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="py-4 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {experianceListUI}
        </motion.div>
      </div>
    </section>
  );
}

export default Experiance;
