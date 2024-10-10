import { Quote } from "lucide-react";
import { reviews } from "../constants";
import SectionHeading from "./SectionHeading";

function Reviews() {
  return (
    <section className="my-section-spacing px-section-horizontal-padding overflow-hidden">
      <SectionHeading text="review from clients" />
      <div className="w-full flex justify-end items-end h-[350px] py-4 px-5 bg-[url('./assets/reviews.jpg')] bg-cover bg-center bg-no-repeat rounded-3xl">
        <div className="w-full md:w-1/2 py-4 px-2 rounded-xl bg-accent">
          {reviews.map((review, i) => (
            <article
              key={i}
              className="flex flex-col gap-3 py-3 px-3 font-orbitron uppercase font-extrabold text-black"
            >
              <Quote />
              <p>{review.text}</p>
              <div>
                <div>
                  <h3 className="text-sm">{review.name}</h3>
                  <span className="font-sans font-normal">
                    {review.profession}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
