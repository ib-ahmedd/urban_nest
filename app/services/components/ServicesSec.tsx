import { CardContainer } from "@components";
import { servicesPageArray } from "@constants";

function ServicesSec() {
  return (
    <section className="width_parent mt-12 md:mt-20">
      <div className="width_container">
        <CardContainer
          array={servicesPageArray}
          heading="Our Services"
          subHeading="Quality Services"
          animation="zoom-in"
        />
      </div>
    </section>
  );
}

export default ServicesSec;
