import HeaderIcons from "./HeaderIcons";
import Logo from "./logo/Logo";
import Nav from "./Nav";

function Header() {
  return (
    <header className="flex justify-between items-center py-6">
      <Logo />
      <Nav />
      <HeaderIcons />
    </header>
  );
}

export default Header;
