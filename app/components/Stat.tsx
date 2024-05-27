import { StatProp } from "@types";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function Stat({ stat, info }: StatProp) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();
  useEffect(() => {
    const statsInterval = setInterval(() => {
      if (count < stat && inView) {
        setCount((prev) => {
          if (stat === 25) return prev + 1;
          if (stat === 512) return prev + 5;
          if (stat === 1120) return prev + 10;
          if (stat === 1520) return prev + 10;
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
    <div
      className="sm:w-1/2 shrink-0 flex flex-col p-8 sm:p-14 bg-white border border-light-gray text-left"
      ref={ref}
    >
      <p className="font-bold text-site-blue text-2xl sm:text-4xl lg:text-5xl">
        {count}+
      </p>
      <p>{info}</p>
    </div>
  );
}

export default Stat;
