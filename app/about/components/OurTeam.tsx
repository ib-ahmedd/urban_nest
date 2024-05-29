import { CardContainer } from "@components";
import { ourTeamArray } from "@constants";

function OurTeam() {
  return (
    <section className="width_parent my-12 md:my-20">
      <div className="width_container flex justify-center">
        <CardContainer
          array={ourTeamArray}
          heading="The Team"
          subHeading="Our Experts"
          width="md:w-[24%]"
          flexAlign="items-center"
        />
      </div>
    </section>
  );
}

export default OurTeam;
