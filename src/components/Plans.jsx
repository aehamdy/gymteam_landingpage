import { CircleCheck } from "lucide-react";
import { plans } from "../constants";
import SectionHeading from "./SectionHeading";
import PrimaryButton from "./PrimaryButton";

function Plans() {
  return (
    <section className="flex flex-col items-center py-section-spacing px-section-horizontal-padding-sm md:px-section-horizontal-padding-md lg:px-section-horizontal-padding-lg">
      <SectionHeading text="our gym passes" />
      <div className="flex flex-col items-center border-b-2 border-b-[#252525] pb-12">
        <div className="w-full flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-14 md:gap-24">
          {plans.map((plan, i) => (
            <article key={i} className="flex flex-col items-center gap-6">
              <h3 className="font-orbitron font-extrabold text-2xl tracking-wide uppercase">
                {plan.type}
              </h3>
              <div className="flex">
                <h2 className="font-orbitron font-bold text-6xl">
                  {plan.price}
                  {plan.currency}
                </h2>
                <span className="inline-flex items-end text-xl">
                  {plan.monthly.toUpperCase()}
                </span>
              </div>
              <ul className="flex flex-col gap-5">
                {plan.features.map((feat, i) => (
                  <div key={i}>
                    <li className="flex items-center gap-3 text-secondary-paragraph">
                      <CircleCheck />
                      <p className="">{feat}</p>
                    </li>
                  </div>
                ))}
              </ul>
              <PrimaryButton text="purchase now" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Plans;
