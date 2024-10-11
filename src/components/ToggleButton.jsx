/* eslint-disable react/prop-types */
function ToggleButton({ handleChange, isToggled }) {
  return (
    <button
      onClick={handleChange}
      className={`toggle-button ${isToggled ? "on" : "off"}`}
    ></button>
  );
}

export default ToggleButton;
