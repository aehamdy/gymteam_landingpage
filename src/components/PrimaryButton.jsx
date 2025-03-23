/* eslint-disable react/prop-types */
function PrimaryButton({ text, href }) {
  const styles =
    "w-fit h-fit font-orbitron font-extrabold uppercase tracking-wide py-1.5 px-5 rounded-3xl text-black bg-accent hover:shadow-button-shadow duration-short cursor-pointer";

  const handleClick = (e) => {
    e.preventDefault();
    const section = document.getElementById(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return href ? (
    <a href={href} onClick={handleClick} className={styles}>
      {text}
    </a>
  ) : (
    <button className={styles}>{text}</button>
  );
}

export default PrimaryButton;
