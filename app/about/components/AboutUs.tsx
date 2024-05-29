import { aboutArray } from "@constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutUs() {
  return (
    <section className="width_parent py-20">
      <div className="width_container flex flex-col md:flex-row justify-between">
        <div className="flex flex-col w-full md:w-1/2 gap-8 mb-12">
          <h2 className="text-site-yellow">About Us</h2>
          <h3>We Are Leading International Company In The World</h3>
          <div className="flex flex-col gap-8 text-site-gray">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <p>
              Cras ultricies ligula sed magna dictum porta. Curabitur non nulla
              sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Curabitur arcu erat,
              accumsan id imperdiet et, porttitor at sem.
            </p>
          </div>
          <button className="solid_btn">OUR SERVICES</button>
        </div>

        <div className="h-full flex flex-col gap-8 justify-center w-full md:w-[45%]">
          {aboutArray.map((item) => (
            <div
              key={item.heading}
              className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8 md:mb-0"
            >
              <div className="bg-site-yellow text-3xl h-14 w-14 shrink-0 text-white rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <div>
                <h4 className="font-monteserat font-bold text-2xl text-site-blue">
                  {item.heading}
                </h4>
                <p className="text-site-gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
