import { StatProp } from "@types";
import { useEffect, useState } from "react";

function Stat({ stat, info }: StatProp) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const statsInterval = setInterval(() => {
      if (count < stat) {
        setCount((prev) => prev + 1);
      }
    }, 0.1);

    if (count === stat) return clearInterval(statsInterval);
    return () => {
      clearInterval(statsInterval);
    };
  }, [count]);
  return (
    <div className="sm:w-1/2 shrink-0 flex flex-col p-8 sm:p-14 bg-white border border-light-gray text-left">
      <p className="font-bold text-site-blue text-2xl sm:text-4xl lg:text-5xl">
        {count}+
      </p>
      <p>{info}</p>
    </div>
  );
}

export default Stat;
