import { navItems } from "../constants";
// sm: 640px =>
// md: tablet 768px =>
function Nav() {
  return (
    <ul className="absolute md:relative flex flex-col md:flex-row md:gap-8 lg:gap-14 top-[100%] md:top-auto w-full md:w-fit text-secondary-paragraph">
      {navItems.map((item, i) => (
        <li
          key={i}
          className="text-center py-3 font-medium hover:text-white cursor-pointer duration-short"
        >
          <a href={item.href}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
