import { CircleCheck } from "lucide-react";
import { plans } from "../constants";
import SectionHeading from "./SectionHeading";
import PrimaryButton from "./PrimaryButton";

function Plans() {
  return (
    <section className="py-section-spacing">
      <div className="px-section-horizontal-padding">
        <SectionHeading text="our gym passes" />
        <div className="flex flex-col items-center">
          <div className="w-full flex flex-wrap justify-center md:justify-between">
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
      </div>
    </section>
  );
}

export default Plans;
