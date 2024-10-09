import { blogs } from "../constants";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import SectionHeading from "./SectionHeading";

function Blog() {
  return (
    <section className="py-section-spacing px-4 bg-secondary-bg">
      <div className="mx-auto w-fit text-center">
        <SectionHeading text="blog & news" />
        <p className="mb-4 text-secondary-paragraph">
          Lorem ipsum dolor sit amet consectetur. Sit proin a ultrices sit.
          <br />
          Pharetra enim sed neque dolor viverra.
        </p>
      </div>
      {/* <div className="flex flex-col md:flex-row items-center mt-10"> */}
      <div className="grid grid-col-1 place-items-center md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, i) => (
          <article key={i} className="flex flex-col gap-4 w-fit">
            <div className="rounded-xl overflow-hidden">
              <img
                src={blog.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <PrimaryButton text={blog.buttonText} />
            <p className="w-3/4 md:w-full text-secondary-paragraph">
              {blog.text}
            </p>
            <div className="w-fit">
              <SecondaryButton text="read more" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog;
