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
        <ul className="lg:hidden flex flex-col absolute top-[100%] text-secondary-paragraph bg-[#141414] w-full rounded-lg text-center animate-fadeInDown">
          {navItems.map((item, i) => (
            <li
              key={i}
              className="py-3 font-medium hover:text-white cursor-pointer duration-short"
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
