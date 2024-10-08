import { features } from "../constants";
import SecondaryButton from "./SecondaryButton";
import SectionHeading from "./SectionHeading";

function Features() {
  return (
    <section className="py-section-spacing px-4">
      <SectionHeading text="Why choose us" />
      <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature, i) => (
          <aritcle
            key={i}
            className="group flex flex-col items-start gap-3 py-5 px-5 bg-secondary-bg hover:bg-accent rounded-3xl duration-short"
          >
            <img src={feature.img} alt="" width="100" />
            <h4 className="font-orbitron font-extrabold group-hover:text-black uppercase duration-short">
              {feature.heading}
            </h4>
            <p className="text-secondary-paragraph group-hover:text-primary-paragraph tracking-wide duration-short">
              {feature.text}
            </p>
            <div className="w-full flex justify-between">
              <SecondaryButton
                text="learn more"
                color="text-white"
                hover="text-black"
              />
              <span className="p-1 font-light text-black group-hover:text-accent bg-accent group-hover:bg-black rounded-full duration-short">
                {feature.icon}
              </span>
            </div>
          </aritcle>
        ))}
      </div>
    </section>
  );
}

export default Features;
