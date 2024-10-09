import { Quote } from "lucide-react";
import { reviews } from "../constants";

function Reviews() {
  return (
    <section className="relative w-full h-[450px] bg-[url('./assets/reviews.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute bottom-8 end-8 w-1/2 py-4 px-2 rounded-xl bg-accent">
        {reviews.map((review, i) => (
          <article
            key={i}
            className="flex flex-col gap-3 py-3 px-3 font-orbitron uppercase font-extrabold text-black"
          >
            <Quote />
            <p>{review.text}</p>
            <div>
              <div className="w-full h-[100px]">
                <img
                  src={review.img}
                  alt="person"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
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
