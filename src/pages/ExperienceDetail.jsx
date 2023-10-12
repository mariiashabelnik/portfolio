import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { projectsAtom } from "../store";
import ImageGallery from "react-image-gallery";
import Tags from "../components/Tags";

function ExperianceDetail() {
  const { id } = useParams();
  const experianceList = useRecoilValue(projectsAtom);

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
      <div className="flex">
        <div className="flex-1">
          <h1>Project: {myProject.title}</h1>
        </div>

        <Tags listOfTags={myProject.tags} />
      </div>
      {linkUI}
      <div className="py-4 mb-8">{myProject.info}</div>
      <div className="">
        <ImageGallery
          showThumbnails={false}
          showBullets={true}
          autoPlay={true}
          slideDuration={1000}
          slideInterval={4000}
          items={projectImg}
        />
      </div>
    </div>
  );
}

export default ExperianceDetail;
