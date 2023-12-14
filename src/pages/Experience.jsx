import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { projectsAtom } from "../store";
import Tags from "../components/Tags";

function Experiance() {
  const experianceList = useRecoilValue(projectsAtom);

  const experianceListUI = experianceList.map((item, key) => {
    const position = key % 2;

    const imgClasses = ["flex-1", "hidden", "md:block"];

    if (position === 1) {
      imgClasses.push("md:order-last");
    }

    return (
      <section className="flex flex-col md:flex-row gap-4 mb-12" key={item.id}>
        <div className={imgClasses.join(" ")}>
          <img className="rounded-md" src={item.img[0]} />
        </div>
        <div className="flex-1 flex flex-col">
          <div>
            <h2 className="text-2xl mb-4"> {item.title}</h2>
          </div>
          <div>
            <img
              className="block md:hidden mb-4 rounded-md"
              src={item.img[0]}
            />
          </div>
          <div className="text-sm">
            <p>{item.info}</p>
          </div>
          <div className=" text-right mt-4">
            <Link
              className=" drop-shadow-doublelight hover:drop-shadow-light "
              to={`/experience/${item.id}`}
            >
              read more
            </Link>
          </div>
          <div className="">
            <Tags listOfTags={item.tags} />
          </div>
        </div>
      </section>
    );
  });

  return (
    <div className="container mx-auto my-10 px-6">
      <h1>Welcome to Experiance</h1>
      <div className="py-4">{experianceListUI}</div>
    </div>
  );
}

export default Experiance;
