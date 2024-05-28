function Clients() {
  return (
    <section className="w-full flex flex-col gap-6 items-center mt-12 md:mt-20">
      <h2 className="text-site-yellow">Trust and Worth</h2>
      <h3 className="text-site-blue">Our Clients</h3>
      <div className="width_container flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 py-12 pb-20">
        <img
          src="/images/our-clients/logo-1.svg"
          alt="client logo"
          className="w-2/5 md:w-[unset]"
        />
        <img
          src="/images/our-clients/logo-2.svg"
          alt="client logo"
          className="w-2/5 md:w-[unset]"
        />
        <img
          src="/images/our-clients/logo-3.svg"
          alt="client logo"
          className="w-2/5 md:w-[unset]"
        />
        <img
          src="/images/our-clients/logo-4.svg"
          alt="client logo"
          className="w-2/5 md:w-[unset]"
        />
      </div>
    </section>
  );
}

export default Clients;
