import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { projectsAtom } from "../store";
import Tags from "../components/Tags";

function Experiance() {
  const experianceList = useRecoilValue(projectsAtom);

  const experianceListUI = experianceList.map((item, key) => {
    const even = key % 2;

    return (
      <section
        className={`flex-1 gap-4 mb-12 bg-[#f0f0f3] border shadow-box ${
          (even === 0 && "rounded-tl-3xl rounded-br-3xl") ||
          "rounded-tr-3xl rounded-bl-3xl"
        }`}
        key={item.id}
      >
        <div
          className={`flex pt-4 md:pt-14 flex-col ${
            even === 1 && "md:flex-row-reverse"
          }`}
        >
          <div className="  basis-5/12">
            <img className="w-full" src={item.previewImg} />
          </div>
          <div className="grow"></div>
          <div className="flex flex-col px-4 pt-4 pb-8 basis-3/12">
            <div>
              <h2 className="text-subTMiniPhone md:text-subTMini mb-4 font-ht">
                {item.title}
              </h2>
            </div>

            {/* <div className="text-base mb-6 line-clamp-3 md:line-clamp-6">
              <p>{item.info}</p>
            </div> */}
            <Tags listOfTags={item.tags} />
            <div className="grow"></div>
            <div className=" text-left">
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
        <h2 className=" text-subTPhone md:text-subT font-headline mb-6">
          Projects<span className=" text-highlight">.</span>
        </h2>
        <div className="py-4 flex flex-col md:flex-row  gap-10">
          {experianceListUI}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
