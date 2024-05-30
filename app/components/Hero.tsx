import Link from "next/link";

function Hero() {
  return (
    <section className="overlay width_parent h-fit pb-12 md:pb-0 md:h-screen xl:h-[120vh] bg-home-hero-bg bg-cover bg-center bg-no-repeat">
      <div className="width_container h-full flex flex-col gap-12 md:gap-12 mt-32 md:mt-52 xl:mt-64 z-10">
        <h2 className="text-site-yellow build" data-aos="fade-right">
          Build Your Dream
        </h2>
        <h1 data-aos="zoom-in">Vision Got Larger</h1>
        <p
          className="text-white w-full lg:w-7/12 text-sm sm:text-base"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada.
          Nulla porttitor accumsan tincidunt. Donec rutrum congue leo egetx
          malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
          sem.
        </p>
        <span className="flex flex-col md:flex-row gap-4 md:gap-20">
          <Link
            href="/services"
            className="solid_btn"
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-offset="-100"
          >
            OUR SERVICES
          </Link>
          <Link
            href="/contact"
            className="text-white border border-white w-52 py-3 text-center transition duration-200 hover:bg-site-yellow hover:text-site-blue hover:border-site-yellow"
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-offset="-100"
          >
            CONTACT US
          </Link>
        </span>
      </div>
    </section>
  );
}

export default Hero;
