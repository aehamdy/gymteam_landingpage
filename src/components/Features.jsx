import { features } from "../constants";

function Features() {
  return (
    <section className="py-8 px-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {features.map((feature, i) => (
        <aritcle
          key={i}
          className="group flex flex-col items-start gap-3 py-8 px-6 bg-secondary-bg hover:bg-accent rounded-3xl duration-short"
        >
          <img src={feature.img} alt="" width="100" />
          <h4 className="font-orbitron font-extrabold group-hover:text-black uppercase duration-short">
            {feature.heading}
          </h4>
          <p className="text-secondary-paragraph group-hover:text-primary-paragraph tracking-wide duration-short">
            {feature.text}
          </p>
        </aritcle>
      ))}
    </section>
  );
}

export default Features;
