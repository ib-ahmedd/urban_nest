import { CardProps } from "@types";

function Card({ image, title, paragraph }: CardProps) {
  return (
    <article className="w-fit md:w-[32%] mb-8 flex flex-col gap-4">
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
