import { aboutStatsArray } from "@constants";
import StatItem from "./StatItem";

function AboutStats() {
  return (
    <section className="overlay width_parent py-12 md:py-24 bg-about-stats-bg bg_setup">
      <div className="width_container flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {aboutStatsArray.map((item) => (
          <StatItem key={item.stat} {...item} />
        ))}
      </div>
    </section>
  );
}

export default AboutStats;
