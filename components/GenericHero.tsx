function GenericHero({ title }: { title: string }) {
  return (
    <section className="generic_hero">
      <h1 className="generic_heading" data-aos="zoom-in">
        {title}
      </h1>
    </section>
  );
}

export default GenericHero;
