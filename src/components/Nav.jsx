import { navItems } from "../constants";

function Nav() {
  return (
    <ul className="flex gap-14 text-secondary-paragraph">
      {navItems.map((item, i) => (
        <li key={i} className="font-medium hover:text-white duration-short">
          <a href={item.href} className="">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
