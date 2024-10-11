/* eslint-disable react/prop-types */
import { CircleCheck } from "lucide-react";
import PrimaryButton from "./PrimaryButton";

function Plan({ plan, i }) {
  return (
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
  );
}

export default Plan;
