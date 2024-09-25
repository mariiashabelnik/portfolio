import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { projectsAtom } from "../store";
import Tags from "../components/Tags";

function Experiance() {
  const experianceList = useRecoilValue(projectsAtom);

  const experianceListUI = experianceList.map((item, key) => {
    return (
      <section
        className="flex-1 gap-4 mb-12 bg-[#e0e0e0] border rounded-3xl shadow-box"
        key={item.id}
      >
        <div>
          <div className="p-4">
            <img className="rounded-3xl" src={item.img[0]} />
          </div>
          <div className="flex flex-col px-4 pt-4 pb-8">
            <div>
              <h2 className="text-subTMiniPhone md:text-subTMini mb-4 ">
                {item.title}
              </h2>
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
        </div>
      </section>
    );
  });

  return (
    <div className="relative">
      <div id="experience" className=" absolute -top-16 "></div>
      <div className=" min-h-screen">
        <h2 className=" text-subTPhone md:text-subT font-headline">
          Experience<span className=" text-highlight">.</span>
        </h2>
        <div className="py-4 flex flex-col md:flex-row gap-4">
          {experianceListUI}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
