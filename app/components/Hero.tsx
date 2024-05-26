import Link from "next/link";

function Hero() {
  return (
    <section className="parent">
      <div className="container">
        <h1>Build Your Dream</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada.
          Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget
          malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
          sem.
        </p>
        <span>
          <Link href="/services">OUR SERVICES</Link>
          <Link href="/contact">CONTACT US</Link>
        </span>
      </div>
    </section>
  );
}

export default Hero;
