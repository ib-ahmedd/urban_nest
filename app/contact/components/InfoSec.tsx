import InfoContainer from "./InfoContainer";

function InfoSec() {
  return (
    <section className="width_parent flex-col mt-20 items-center">
      <h2 className="text-site-yellow mb-8">Our Branches</h2>
      <h3 className="text-site-blue">Contact Details</h3>
      <InfoContainer location="Abuja" />
      <InfoContainer location="Port Harcourt" />
      <InfoContainer location="Lagos" />
    </section>
  );
}

export default InfoSec;
