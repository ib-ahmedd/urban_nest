import BgImgCard from "@components/BgImgCard";
import { projectsArray } from "@constants";

function ProjectsSec() {
  return (
    <section className="flex flex-col items-center mt-12 md:mt-20 gap-8">
      <h2 className="text-site-yellow">Our Project</h2>
      <h3>Latest Works</h3>
      <div className="w-full flex flex-wrap px-4 md:px-0">
        {projectsArray.map((item) => (
          <BgImgCard specs="w-full md:w-1/4 h-[30em]" {...item} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSec;
