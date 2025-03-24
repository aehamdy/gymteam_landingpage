import { useRef } from "react";
import { coaches } from "../constants";
import SectionHeading from "./SectionHeading";

function Coaches() {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 300;
      containerRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-section-spacing px-section-horizontal-padding-sm md:px-section-horizontal-padding-md lg:px-section-horizontal-padding-lg bg-secondary-bg">
      <SectionHeading text="our best coaches" />
      <p className="mb-4 text-secondary-paragraph">
        Lorem ipsum dolor sit amet consectetur. Sit proin a ultrices sit.
        <br />
        Pharetra enim sed neque dolor viverra.
      </p>

      <div className="lg:hidden flex justify-between items-center w-full">
        <button
          onClick={() => scroll("prev")}
          className="flex py-1 px-2 text-black hover:text-accent bg-accent hover:bg-black rounded-md duration-150"
        >
          &#x23F4;
        </button>
        <button
          onClick={() => scroll("next")}
          className="flex py-1 px-2 text-black hover:text-accent bg-accent hover:bg-black rounded-md duration-150"
        >
          &#x23F5;
        </button>
      </div>

      <div
        ref={containerRef}
        className="relative flex items-center gap-4 mt-3 snap-x lg:snap-none snap-mandatory lg:snap-mandatory overflow-x-scroll overflow-y-hidden lg:overflow-x-visible scrollbar-hide"
      >
        {coaches.map((coach, i) => (
          <article
            key={i}
            className="flex flex-col gap-2 snap-start shrink-0 w-[calc(100%/2)] md:w-[calc(100%/3)] lg:w-[calc(100%/4)]"
          >
            <div className="rounded-xl overflow-hidden">
              <img
                src={coach.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="">
              <h3 className="font-bold text-sm tracking-wide">{coach.name}</h3>
              <p className="text-secondary-paragraph">{coach.type}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Coaches;
