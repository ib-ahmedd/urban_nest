import Link from "next/link";
import StatsModal from "./StatModal";
import { CardContainer } from "@components";
import { homeServicesArray } from "@constants";

function WorkWIthUs() {
  return (
    <section className="width_parent flex flex-col gap-20 items-center">
      <StatsModal />
      <div className="width_container flex flex-col gap-4">
        <p className="build text-site-blue">Build Your Dream</p>
        <span className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between mb-8">
          <h2 className="text-site-blue">Quality Services</h2>
          <Link
            href="/services"
            className="text-site-blue underline hover:text-site-yellow"
          >
            VIEW ALL
          </Link>
        </span>
        <CardContainer array={homeServicesArray} />
      </div>
    </section>
  );
}

export default WorkWIthUs;
