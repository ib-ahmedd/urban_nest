import { TestimonialsCardProps } from "@types";

function TestimonialsCard({
  image,
  occupation,
  clientName,
}: TestimonialsCardProps) {
  return (
    <article className="w-full md:w-[49%] bg-site-blue border-b-8 border-site-yellow text-white p-8 md:p-12 flex flex-col gap-4 mb-4">
      <img src={image} alt="client" className="w-16" />
      <p className="font-monteserat font-bold text-2xl">{occupation}</p>
      <h4 className="font-monteserat font-bold text-2xl text-site-yellow">
        {clientName}
      </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
    </article>
  );
}

export default TestimonialsCard;
