import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { projectsAtom } from "../store";
import Tags from "../components/Tags";

function Experiance() {
  const experianceList = useRecoilValue(projectsAtom);

  const experianceListUI = experianceList.map((item, key) => {
    const position = key % 2;

    const imgClasses = ["basis-1/3", "hidden", "md:block"];

    if (position === 1) {
      imgClasses.push("md:order-last");
    }

    return (
      <section className="flex flex-col md:flex-row gap-4 mb-12" key={item.id}>
        <div className={imgClasses.join(" ")}>
          <img className="rounded-md" src={item.img[0]} />
        </div>
        <div className="basis-2/3 flex flex-col">
          <div>
            <h2 className="text-subTMiniPhone md:text-subTMini mb-4 ">
              {item.title}
            </h2>
          </div>
          <div>
            <img
              className="block md:hidden mb-4 rounded-md"
              src={item.img[0]}
            />
          </div>
          <div className="text-base mb-6 line-clamp-3 md:line-clamp-6">
            <p>{item.info}</p>
          </div>
          <Tags listOfTags={item.tags} />
          <div className="grow"></div>
          <div className=" text-right">
            <Link
              className=" drop-shadow-doublelight hover:drop-shadow-light "
              to={`/experience/${item.id}`}
            >
              read more
            </Link>
          </div>
        </div>
      </section>
    );
  });

  return (
    <div className="relative">
      <div id="experience" className=" absolute -top-16 "></div>
      <div className=" h-screen">
        <h2 className=" text-subTPhone md:text-subT font-headline">
          Experience<span className=" text-highlight">.</span>
        </h2>
        <div className="py-4">{experianceListUI}</div>
      </div>
    </div>
  );
}

export default Experiance;
