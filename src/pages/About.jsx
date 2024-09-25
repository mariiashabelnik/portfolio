import { useRecoilValue } from "recoil";
import Tags from "../components/Tags";
import { skillsAtom } from "../store";

function About() {
  const skills = useRecoilValue(skillsAtom);

  return (
    <div className="relative">
      <div id="about" className=" absolute -top-16   "></div>
      <div className=" min-h-screen flex items-center">
        <div>
          <h2 className="mb-2 text-subTPhone md:text-subT font-headline">
            About<span className=" text-highlight">.</span>
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="basis-2/3 text-base">
              <p>
                "I’m Mariia Shabelnik, a Stockholm-based developer passionate
                about building innovative, secure digital experiences with a
                focus on both frontend and backend technologies. With expertise
                in JavaScript, React, TypeScript, and a keen eye for web design,
                I create solutions that combine functionality with creativity. I
                use Node.js for backend development and SQL for database
                management, ensuring my applications are both robust and
                scalable. I also have a deep passion for 3D design, which adds a
                unique, immersive dimension to my work. I thrive in
                collaborative environments that encourage continuous learning
                and value creative problem-solving. Let’s collaborate to push
                the boundaries of digital innovation!"
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
            </div>
            <div className=" basis-1/3">
              <h4 className="mb-2 text-subTMini">Languages:</h4>
              <Tags listOfTags={skills.languages} />
              <h4 className="my-2 text-subTMini">Frameworks:</h4>{" "}
              <Tags listOfTags={skills.frameworks} />
              <h4 className="my-2 text-subTMini">Tools I use:</h4>{" "}
              <Tags listOfTags={skills.tools} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
