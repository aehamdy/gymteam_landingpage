import { plans } from "../constants";
import SectionHeading from "./SectionHeading";
import Plan from "./Plan";
import { useState } from "react";
import ToggleButton from "./ToggleButton";

function Plans() {
  const [isToggled, setIsToggled] = useState(false);

  const handleChange = () => {
    setIsToggled((prevValue) => !prevValue);
  };

  return (
    <section className="flex flex-col items-center py-section-spacing px-section-horizontal-padding-sm md:px-section-horizontal-padding-md lg:px-section-horizontal-padding-lg">
      <SectionHeading text="our gym passes" />
      <div className="flex flex-col items-center gap-6 border-b-2 border-b-[#252525] pb-12">
        <div className="flex flex-col items-center gap-6 text-slate-500">
          <div className="flex gap-2">
            <span className={`${isToggled ? "text-gray-400" : "text-white"}`}>
              Monthly
            </span>
            <span>/</span>
            <span className={`${isToggled ? "text-white" : "text-gray-400"}`}>
              Yearly
            </span>
          </div>
          <ToggleButton handleChange={handleChange} isToggled={isToggled} />
        </div>
        <div className="w-full flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-14 md:gap-24">
          {plans.map((plan, i) => (
            <Plan key={i} plan={plan} isToggled={isToggled} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Plans;
