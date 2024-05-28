import BgImgCard from "@components/BgImgCard";
import { foundersCardsArray } from "@constants";
import Link from "next/link";

function Founders() {
  return (
    <section className="w-full flex flex-col gap-20 items-center">
      <div className="w-full md:w-1/2 px-4 md:px-0 text-center">
        <h2 className="text-site-blue">About Founders</h2>
        <h3>
          We Are Leading International
          <br className="hidden md:block" /> Company In The World
        </h3>
      </div>
      <div className="width_parent py-14 md:py-28 flex flex-col gap-14 items-center relative">
        <div className="w-1/2 h-full absolute left-0 top-0 bg-light-gray" />
        <div className="width_container flex flex-col md:flex-row gap-4 z-10">
          {foundersCardsArray.map((item) => (
            <BgImgCard specs="w-full md:w-1/3 h-[30em]" {...item} />
          ))}
        </div>
        <Link href="/about" className="z-10 solid_btn">
          ABOUT US
        </Link>
      </div>
    </section>
  );
}

export default Founders;
