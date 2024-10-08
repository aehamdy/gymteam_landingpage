import { ArrowUpRight } from "lucide-react";

function SecondaryButton() {
  return (
    <button className="flex gap-1 font-semibold uppercase hover:text-white duration-short">
      <a href="#">learn more</a>
      <ArrowUpRight />
    </button>
  );
}

export default SecondaryButton;
