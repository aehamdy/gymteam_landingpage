import { navItems } from "../constants";

function Nav() {
  return (
    <ul className="flex gap-6 text-secondary-paragraph">
      {navItems.map((item, i) => (
        <li key={i}>
          <a href={item.href}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
