import SectionHeading from "./SectionHeading";

function NewsLetter() {
  return (
    <section className="flex flex-col justify-center items-center gap-8 w-full h-[500px] py-section-spacing px-4 bg-[url('./assets/news-letter.jpg')] bg-cover bg-center bg-no-repeat">
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
          className="w-full h-11 py-2 px-4 rounded-3xl"
        />
        <button className="md:absolute md:end-0 h-auto px-4 font-orbitron py-2 text-black font-extrabold uppercase rounded-3xl bg-accent hover:shadow-button-shadow duration-short">
          submit
        </button>
      </div>
    </section>
  );
}

export default NewsLetter;
