import { homeServicesArray, homeSusListArray } from "@constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Sustainability() {
  return (
    <section className="w-full flex flex-col md:flex-row">
      <div className="overlay w-full md:w-1/2 px-8 xl:px-[10%] py-20 gap-8 bg-home-sustainability-l-bg bg_setup">
        <div className="flex flex-col gap-8 relative z-10">
          <p className="sub_heading text-site-yellow">Sustainability</p>
          <h2 className="text-white">
            Committed To Keep People Healthy & Safe
          </h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque in ipsum id orci porta dapibus.
          </p>
          <Link href="/contact" className="solid_btn mt-8">
            GET IN TOUCH
          </Link>
        </div>
      </div>
      <div className="overlay_yellow w-full md:w-1/2 px-8x xl:px-[10%] py-20 bg-home-sustainability-r-bg bg_setup">
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
    </section>
  );
}

export default Sustainability;
