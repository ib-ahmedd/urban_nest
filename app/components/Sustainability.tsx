import { addressCardArray } from "@constants";
import Link from "next/link";
import AddressCard from "./AddressCard";
import { SustainabilityBgs } from "@components";

function Sustainability() {
  return (
    <section className="mt-12 md:mt-20 w-full flex flex-col gap-12 md:gap-20">
      <SustainabilityBgs />

      <div className="width_parent">
        <div className="width_container flex flex-col gap-8">
          <h2 className="sub_heading">Sustainability</h2>
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between">
            <h3 className="w-full md:w-1/2">
              Transform Communities <br className="hidden lg:block" /> Across
              the Globe
            </h3>
            <p className="w-full md:w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,
              lacinia eget consectetur sed, convallis at tellus.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 my-4">
            {addressCardArray.map((item) => (
              <AddressCard key={item.country} {...item} />
            ))}
          </div>
          <Link href="/contact" className="solid_btn self-center my-4">
            VIEW OUR OFFICES
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Sustainability;
