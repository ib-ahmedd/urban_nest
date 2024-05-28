import { homeProjectsArray } from "@constants";
import BgImgCard from "./BgImgCard";

function ProjectsContainer() {
  return (
    <div className="flex flex-wrap">
      {homeProjectsArray.map((item) => (
        <BgImgCard specs="w-full md:w-1/4 h-[30em]" {...item} />
      ))}
    </div>
  );
}

export default ProjectsContainer;
