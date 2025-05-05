import { useRecoilValue } from "recoil";
import Tags from "../components/Tags";
import { skillsAtom } from "../store";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const skills = useRecoilValue(skillsAtom);
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

  return (
    <section className="relative" aria-labelledby="about-heading">
      <div id="about" className="absolute"></div>
      <div className="min-h-screen flex items-center">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            id="about-heading"
            className="mb-6 text-subTPhone md:text-subT font-headline"
          >
            About me<span className="text-highlight">.</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6">
            <motion.article variants={itemVariants} className="basis-6/12 text-base font-body">
              <p>
                "I'm a Stockholm-based developer passionate about building
                innovative, secure digital experiences with a focus on both
                frontend and backend technologies. With expertise in JavaScript,
                React, TypeScript, and a keen eye for web design, I create
                solutions that combine functionality with creativity. I use
                Node.js for backend development and SQL for database management,
                ensuring my applications are both robust and scalable. I also
                have a deep passion for 3D design, which adds a unique,
                immersive dimension to my work. I thrive in collaborative
                environments that encourage continuous learning and value
                creative problem-solving. Let's collaborate to push the
                boundaries of digital innovation!"
                {/* As a prospective Frontend Developer, I seek a challenging career
                opportunity in the IT industry, where I can collaborate with a
                dynamic team, continually learn, and foster innovation. My
                dedication lies in transforming design concepts into
                user-friendly experiences and achieving organizational goals
                through creativity and teamwork. I aspire to engage in work that
                allows the utilization of technical and creative skills to
                contribute effectively to the growth of an organization. If you
                think you've got an opening that I might like, let's connect 🔗 */}
              </p>
            </motion.article>
            <motion.figure variants={itemVariants} className="border">
              <img
                className="rounded-3xl"
                src="/img/ProfileMe.jpg"
                alt="Mariia Shabelnik's profile photo"
              />
            </motion.figure>
            <motion.aside variants={itemVariants} className="basis-1/3" aria-labelledby="skills-heading">
              <h2 id="skills-heading" className="sr-only">
                Skills and Technologies
              </h2>
              <section aria-labelledby="languages-heading">
                <h3 id="languages-heading" className="mb-2 text-subTMini">
                  Languages:
                </h3>
                <Tags listOfTags={skills.languages} />
              </section>
              <section aria-labelledby="frameworks-heading">
                <h3 id="frameworks-heading" className="my-2 text-subTMini">
                  Frameworks:
                </h3>
                <Tags listOfTags={skills.frameworks} />
              </section>
              <section aria-labelledby="tools-heading">
                <h3 id="tools-heading" className="my-2 text-subTMini">
                  Tools I use:
                </h3>
                <Tags listOfTags={skills.tools} />
              </section>
            </motion.aside>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
