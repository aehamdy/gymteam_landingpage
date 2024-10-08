/* eslint-disable react/prop-types */
function PrimaryButton({ text }) {
  return (
    <button className="w-full h-fit font-orbitron font-extrabold uppercase tracking-wide py-1.5 px-5 rounded-3xl text-black bg-accent hover:shadow-button-shadow duration-short cursor-pointer">
      {text}
    </button>
  );
}

export default PrimaryButton;
