import { Quote } from "lucide-react";
import { reviews } from "../constants";

function Reviews() {
  return (
    <section className="flex justify-end md:justify-start items-end w-full h-[450px] my-section-spacing py-4 px-5 bg-[url('./assets/reviews.jpg')] bg-cover bg-bottom bg-no-repeat">
      <div className="w-full md:w-2/3 py-4 px-2 rounded-xl bg-accent">
        {reviews.map((review, i) => (
          <article
            key={i}
            className="flex flex-col gap-3 py-3 px-3 font-orbitron uppercase font-extrabold text-black"
          >
            <Quote />
            <p>{review.text}</p>
            <div>
              <div>
                <h3>{review.name}</h3>
                <span className="font-sans font-normal">
                  {review.profession}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
