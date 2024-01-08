import { useRecoilValue } from "recoil";
import Tags from "../components/Tags";
import { skillsAtom } from "../store";

function About() {
  const skills = useRecoilValue(skillsAtom);
  console.log(skills);
  return (
    <div className="relative">
      <div id="about" className=" absolute -top-16 "></div>
      <h2 className="mb-2 text-subTPhone md:text-subT font-headline">
        About<span className=" text-highlight">.</span>
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="basis-2/3 text-base">
          <p>
            As a prospective Frontend Developer, I seek a challenging career
            opportunity in the IT industry, where I can collaborate with a
            dynamic team, continually learn, and foster innovation. My
            dedication lies in transforming design concepts into user-friendly
            experiences and achieving organizational goals through creativity
            and teamwork. I aspire to engage in work that allows the utilization
            of technical and creative skills to contribute effectively to the
            growth of an organization. If you think you've got an opening that I
            might like, let's connect 🔗
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
  );
}

export default About;
