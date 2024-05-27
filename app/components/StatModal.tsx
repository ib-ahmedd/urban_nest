"use client";
import { statsArray } from "@constants";
import Link from "next/link";
import Stat from "./Stat";

function StatsModal() {
  return (
    <article className="flex flex-col md:flex-row xl:-mt-40 w-full xl:w-4/5">
      <div className="md:flex-1 flex flex-col gap-8 p-8 md:p-12 shrink bg-site-yellow z-20">
        <p className="sub_heading">Build Your Dream</p>
        <p className="font-bold text-3xl md:text-5xl text-site-blue">
          25 Years Of Undefeated Success
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget
          consectetur sed, convallis .
        </p>
        <Link
          href="/contact"
          className="text-white bg-site-blue w-52 py-3 text-center transition duration-200 hover:bg-white hover:text-site-blue"
        >
          WORK WITH US
        </Link>
      </div>
      <div className="md:flex-1 flex flex-wrap flex-col sm:flex-row shrink-0 z-20">
        {statsArray.map((item) => (
          <Stat key={item.stat} {...item} />
        ))}
      </div>
    </article>
  );
}

export default StatsModal;
