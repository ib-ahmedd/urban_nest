import { CardContainerProps } from "@types";
import Card from "./Card";

function CardContainer({ array, heading, subHeading }: CardContainerProps) {
  return (
    <section className="text-center flex flex-col items-start gap-8">
      {subHeading && <h2 className="text-site-yellow w-full">{heading}</h2>}
      {heading && <h3 className="text-site-blue w-full">{subHeading}</h3>}
      <div className="flex flex-col md:flex-row flex-wrap justify-between">
        {array.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

export default CardContainer;
