import {
  addressCardArray,
  homeServicesArray,
  homeSusListArray,
} from "@constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import AddressCard from "./AddressCard";

function Sustainability() {
  return (
    <section className="w-full flex flex-col gap-20">
      <div className="w-full flex flex-col md:flex-row">
        <div className="overlay w-full md:w-1/2 px-8 xl:px-[10%] py-20 gap-8 bg-home-sustainability-l-bg bg_setup">
          <div className="flex flex-col gap-8 relative z-10">
            <h2 className="sub_heading text-site-yellow">Sustainability</h2>
            <h3 className="text-white">
              Committed To Keep People Healthy & Safe
            </h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque in ipsum id orci porta dapibus.
            </p>
            <Link href="/contact" className="solid_btn mt-8">
              GET IN TOUCH
            </Link>
          </div>
        </div>
        <div className="overlay_yellow w-full md:w-1/2 px-8 xl:px-[10%] py-20 bg-home-sustainability-r-bg bg_setup">
          <div className="flex flex-col gap-8 relative z-10">
            <h3 className="sub_heading">We Follow Best Practices</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque in ipsum id orci porta dapibus.
            </p>
            <ul>
              {homeSusListArray.map((item) => (
                <li
                  key={item.title}
                  className="text-xl font-bold text-site-blue my-4"
                >
                  <span className="mr-4">
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

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
