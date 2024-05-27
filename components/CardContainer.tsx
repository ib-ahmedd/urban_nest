import { CardContainerProps } from "@types";
import Card from "./Card";

function CardContainer({ array, heading, subHeading }: CardContainerProps) {
  return (
    <section>
      {subHeading && <h4>{subHeading}</h4>}
      {heading && <h2>{heading}</h2>}
      <div className="flex flex-col md:flex-row flex-wrap justify-between">
        {array.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

export default CardContainer;
