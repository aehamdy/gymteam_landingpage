import PrimaryButton from "./PrimaryButton";
import HorizontalTextScroll from "./HorizontalTextScroll";
import SecondaryButton from "./SecondaryButton";

function HeroSection() {
  return (
    <section className="relative grid place-items-center z-40 mt-[-3.5rem] lg:mt-[-4.6rem] before:absolute before:content[''] before:top-0 before:start-0 before:w-full before:h-full before:bg-black/[0.8] h-dvh bg-[url('/src/assets/hero-section.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="absolute flex flex-col gap-7 md:gap-5 w-3/4 md:1/2 text-center">
        <h2 className="w-fit mx-auto font-orbitron font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase text-center tracking-wider">
          work with professionals
        </h2>
        <p className="w-fit md:w-3/4 lg:w-1/2 mx-auto text-secondary-paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing. laboriosam
          ratione aut dicta vero.
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mx-auto">
          <PrimaryButton text="start now" />
          <SecondaryButton text="learn more" hover="text-white" />
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <HorizontalTextScroll />
      </div>
    </section>
  );
}

export default HeroSection;
