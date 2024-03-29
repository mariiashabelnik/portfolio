import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { projectsAtom } from "../store";
import ImageGallery from "react-image-gallery";
import Tags from "../components/Tags";
import { IoChevronBackOutline as BackButton } from "react-icons/io5";

function ExperianceDetail() {
  const { id } = useParams();
  const experianceList = useRecoilValue(projectsAtom);
  const navigate = useNavigate();

  //shorter variant of Find function with IF-sats
  const myProject = experianceList.find((item) => item.id === id);

  if (myProject === undefined) {
    return (
      <div className="container mx-auto my-10 px-6">
        404 the project does not exists
      </div>
    );
  }

  const projectImg = myProject.img.map((item) => {
    return { original: item, thumbnail: item };
  });

  let linkUI = <></>;

  if (myProject.link !== undefined) {
    linkUI = (
      <a href={myProject.link} target="_blank">
        Visit page
      </a>
    );
  }

  return (
    <div className="container mx-auto my-10 px-6">
      <button
        className="text-4xl "
        aria-label="Back"
        onClick={() => {
          navigate(-1);
        }}
      >
        <BackButton />
      </button>
      <div className="flex flex-col">
        <div className="flex-1">
          <h1 className=" text-subTPhone md:text-subT">
            Project: {myProject.title}
          </h1>
        </div>
        <div className="flex-1 mt-2 mb-6">
          <Tags listOfTags={myProject.tags} />
        </div>{" "}
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <ImageGallery
            showThumbnails={false}
            showBullets={true}
            autoPlay={true}
            slideDuration={1000}
            slideInterval={4000}
            items={projectImg}
          />
        </div>
        <div className="flex-1 text-base">
          {myProject.info}
          <div className=" drop-shadow-doublelight hover:drop-shadow-light my-2 text-end">
            {linkUI}
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
4;

export default ExperianceDetail;
