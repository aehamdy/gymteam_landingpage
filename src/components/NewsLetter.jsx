import newsLetterImg from "../assets/news-letter.jpg";
import SectionHeading from "./SectionHeading";

function NewsLetter() {
  return (
    <section
      id="contact"
      className="relative w-full h-[500px] py-section-spacing bg-cover bg-fixed bg-center bg-no-repeat before:absolute before:content[''] before:top-0 before:start-0 before:w-full before:h-full before:bg-black/[0.7]"
      style={{ backgroundImage: `url(${newsLetterImg})` }}
    >
      <div className="px-section-horizontal-padding absolute flex flex-col justify-center items-center gap-8 w-full h-full mx-auto">
        <div className="mx-auto w-fit text-center">
          <SectionHeading text="get your first trial visit" />
          <p className="mb-4 text-secondary-paragraph">
            Lorem ipsum dolor sit amet consectetur. Sit proin a ultrices sit.
            <br />
            Pharetra enim sed neque dolor viverra.
          </p>
        </div>
        <div className="md:relative flex flex-col md:flex-row md:items-center gap-5 md:gap-0 w-3/4 md:w-1/2 h-fit">
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full h-11 py-2 px-4 rounded-3xl bg-[#4f4f4f]"
          />
          <button className="md:absolute md:end-0 h-auto px-4 font-orbitron py-2 text-black font-extrabold uppercase rounded-3xl bg-accent hover:shadow-button-shadow duration-short">
            submit
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
