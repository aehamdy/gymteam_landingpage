import about from "../assets/about.jpg";
import { aboutImages } from "../constants";
import SectionHeading from "./SectionHeading";

const texts = {
  highlighted: "Lorem ipsum",
  heading: "dolor sit amet",
  text: "Lorem ipsum dolor sit amet consectetur. Sit proin a ultrices sit. Pharetra enim sed",
};

function About() {
  return (
    <section className="py-section-spacing px-4">
      <SectionHeading text="about our gym" />
      <div className="flex flex-col gap-6">
        <div className="h-[400px] rounded-xl overflow-hidden">
          <img
            src={about}
            alt="a man workouts"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-between items-center gap-4 w-full">
          <p className="w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            expedita quisquam quibusdam unde, amet quidem mollitia iusto nulla
            eaque ab quae ullam corrupti ut veniam neque enim odio vero debitis.
            Laboriosam, fugiat voluptas ad sint dolorum.
          </p>
          <span className="font-orbitron font-extrabold uppercase text-center text-primary-paragraph bg-accent rounded-lg py-2 px-6">
            10 years
          </span>
        </div>
        <div className="flex gap-6">
          <div className="flex gap-2">
            {aboutImages.map((image, i) => (
              <div
                key={i}
                style={{ borderRadius: "50%" }}
                className={`w-[150px] h-[150px] p-2 border-4 border-accent  ${
                  i === 0 ? "border-r-transparent" : "border-r-transparent"
                } rounded-full overflow-hidden`}
              >
                <img
                  src={image.img}
                  alt="workout"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            {Array(2)
              .fill(texts)
              .map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <h4 className="font-bold text-xl tracking-wider">
                    <span className="text-red-400">{item.highlighted} </span>
                    {item.heading}
                  </h4>
                  <p className="text-secondary-paragraph">{item.text}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
