import { BgImgCardProps } from "@types";

function BgImgCard({
  specs,
  background,
  title,
  note,
  animation,
  delay,
}: BgImgCardProps) {
  return (
    <article
      className={`${specs} bg-center bg-cover bg-no-repeat flex flex-col justify-end p-8 md:p-12 relative`}
      style={{ backgroundImage: `url('${background}')` }}
      data-aos={animation}
      data-aos-delay={delay}
    >
      <div className="h-1/2 w-full left-0 bottom-0 absolute bg-gradient-to-t from-site-blue via-site-blue to-transparent opacity-50" />
      <h4 className="text-white font-monteserat font-bold text-2xl z-10">
        {title}
      </h4>
      <p className="text-white z-10">{note}</p>
    </article>
  );
}

export default BgImgCard;
