import { CardProps } from "@types";

function Card({ image, title, paragraph, width, delay, animation }: CardProps) {
  return (
    <article
      className={`w-fit ${
        width ? width : "md:w-[32%]"
      } mb-8 flex flex-col gap-4`}
      data-aos={animation}
      data-aos-delay={delay}
    >
      <img src={image} alt={title} className="w-full" />
      <h3 className="text-site-blue font-monteserat font-bold text-2xl">
        {title}
      </h3>
      <p className="text-site-gray">
        {paragraph
          ? paragraph
          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum."}
      </p>
    </article>
  );
}

export default Card;
