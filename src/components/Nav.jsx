/* eslint-disable react/prop-types */
import { navItems } from "../constants";
// sm: 640px =>
// md: tablet 768px =>
function Nav({ isExpanded }) {
  return (
    <>
      <ul
        className={`hidden lg:flex justify-between gap-8 text-secondary-paragraph`}
      >
        {navItems.map((item, i) => (
          <li
            key={i}
            className="text-center py-3 font-medium hover:text-white cursor-pointer duration-short"
          >
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
      {isExpanded && (
        <ul className="lg:hidden flex flex-col items-center absolute w-full left-0 top-[100%] text-secondary-paragraph rounded-lg text-center animate-fadeInDown">
          {navItems.map((item, i) => (
            <li
              key={i}
              className="w-full py-3 font-medium hover:text-primary-bg bg-secondary-bg hover:bg-accent cursor-pointer duration-short"
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Nav;
