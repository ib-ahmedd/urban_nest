import Link from "next/link";

function Hero() {
  return (
    <section className="hero width_parent h-screen xl:h-[120vh] bg-home-hero-bg bg-cover bg-center bg-no-repeat">
      <div className="width_container h-full flex flex-col gap-12 md:gap-12 mt-32 md:mt-64 z-10">
        <p className="text-site-yellow font-monteserat font-bold text-2xl">
          Build Your Dream
        </p>
        <h1>Vision Got Larger</h1>
        <p className="text-white w-full lg:w-7/12 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada.
          Nulla porttitor accumsan tincidunt. Donec rutrum congue leo egetx
          malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
          sem.
        </p>
        <span className="flex flex-col md:flex-row gap-4 md:gap-20">
          <Link href="/services" className="solid_btn">
            OUR SERVICES
          </Link>
          <Link
            href="/contact"
            className="text-white border border-white w-52 py-3 text-center"
          >
            CONTACT US
          </Link>
        </span>
      </div>
    </section>
  );
}

export default Hero;
