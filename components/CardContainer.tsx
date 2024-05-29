import { CardContainerProps } from "@types";
import Card from "./Card";

function CardContainer({
  array,
  heading,
  subHeading,
  width,
  flexAlign,
}: CardContainerProps) {
  return (
    <section className="w-full text-center flex flex-col items-center gap-8">
      {subHeading && <h2 className="text-site-yellow w-full">{heading}</h2>}
      {heading && <h3 className="text-site-blue w-full">{subHeading}</h3>}
      <div
        className={`w-full flex flex-col ${
          flexAlign && flexAlign
        } md:flex-row flex-wrap justify-between`}
      >
        {array.map((item) => (
          <Card key={item.title} {...item} width={width} />
        ))}
      </div>
    </section>
  );
}

export default CardContainer;
