"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StatItemProps } from "@types";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function StatItem({ icon, stat, note }: StatItemProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();

  useEffect(() => {
    const statsInterval = setInterval(() => {
      if (count < stat && inView) {
        setCount((prev) => {
          if (stat === 25) return prev + 1;
          if (stat === 302) return prev + 3;
          if (stat === 525) return prev + 5;
          if (stat === 325) return prev + 3;
          return prev;
        });
      }
    }, 5);

    if (count === stat) return clearInterval(statsInterval);
    return () => {
      clearInterval(statsInterval);
    };
  }, [count, inView]);
  return (
    <article
      className="relative z-10 text-white flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 text-center md:text-left"
      ref={ref}
    >
      <div className="text-2xl bg-site-yellow rounded-full w-12 h-12 flex justify-center items-center shrink-0">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="flex flex-col gap-4">
        <h3>{count}</h3>
        <p>{note}</p>
      </div>
    </article>
  );
}

export default StatItem;
