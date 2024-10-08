/* eslint-disable react/prop-types */
import { ArrowUpRight } from "lucide-react";

function SecondaryButton({ text, color, hover }) {
  return (
    <button
      className={`group font-semibold uppercase ${color} hover:${hover} duration-short`}
    >
      <a href="#" className={`flex gap-1 group-hover:${hover} duration-short`}>
        {text.toUpperCase()}
        <ArrowUpRight />
      </a>
    </button>
  );
}

export default SecondaryButton;
