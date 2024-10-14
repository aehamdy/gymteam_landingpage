import { coaches } from "../constants";
import SectionHeading from "./SectionHeading";

function Coaches() {
  return (
    <section className="py-section-spacing px-section-horizontal-padding-sm md:px-section-horizontal-padding-md lg:px-section-horizontal-padding-lg bg-secondary-bg">
      <SectionHeading text="our best coaches" />
      <p className="mb-4 text-secondary-paragraph">
        Lorem ipsum dolor sit amet consectetur. Sit proin a ultrices sit.
        <br />
        Pharetra enim sed neque dolor viverra.
      </p>
      <div className="grid grid-col-1 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 lg:gap-16">
        {coaches.map((coach, i) => (
          <article key={i} className="flex flex-col gap-2 w-[200px]">
            <div className="rounded-xl overflow-hidden">
              <img
                src={coach.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="">
              <h3 className="font-bold tracking-wide">{coach.name}</h3>
              <p className="text-secondary-paragraph">{coach.type}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Coaches;
