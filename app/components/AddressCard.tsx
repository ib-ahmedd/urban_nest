import { AddressCardProps } from "@types";

function AddressCard({ country, address, delay }: AddressCardProps) {
  return (
    <article
      className="w-full md:w-1/3 border border-light-gray p-6 md:p-12 flex flex-col gap-4"
      data-aos="fade-right"
      data-aos-delay={delay}
    >
      <h4 className="font-monteserat font-bold text-2xl">{country}</h4>
      <p className="text-site-gray">{address}</p>

      <p className="text-site-blue hover:cursor-pointer hover:text-site-yellow mt-8">
        DIRECTION
      </p>
    </article>
  );
}

export default AddressCard;
