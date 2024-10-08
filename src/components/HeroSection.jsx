function HeroSection() {
  return (
    <section className="relative grid place-items-center before:content[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/[0.8] h-dvh bg-[url('/src/assets/hero-section.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="absolute flex flex-col gap-4 w-3/4 text-center">
        <h2 className="font-semibold text-6xl text-white uppercase">
          work with
          <br />
          professionals
        </h2>
        <p className=" mx-auto text-secondary-paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          laboriosam
          <br />
          ratione aut dicta vero voluptatum consectetur.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
