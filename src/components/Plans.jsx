import { plans } from "../constants";
import SectionHeading from "./SectionHeading";
import Plan from "./Plan";

function Plans() {
  return (
    <section className="flex flex-col items-center py-section-spacing px-section-horizontal-padding-sm md:px-section-horizontal-padding-md lg:px-section-horizontal-padding-lg">
      <SectionHeading text="our gym passes" />
      <div className="flex flex-col items-center border-b-2 border-b-[#252525] pb-12">
        <div></div>
        <div className="w-full flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-14 md:gap-24">
          {plans.map((plan, i) => (
            <Plan key={i} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Plans;
