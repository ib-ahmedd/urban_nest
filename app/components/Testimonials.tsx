import { homeTestimonialsArray } from "@constants";
import TestimonialsCard from "./TestimonialsCard";

function Testimonials() {
  return (
    <section className="width_parent flex-col items-center mt-20">
      <div className="w-full text-center">
        <h2 className="mb-6">What Our Clients Say</h2>
        <h3>Testimonials</h3>
      </div>
      <div className="width_container flex flex-col md:flex-row flex-wrap justify-between mt-20">
        {homeTestimonialsArray.map((item) => (
          <TestimonialsCard {...item} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
