import { useState } from "react";
import HeaderIcons from "./HeaderIcons";
import Logo from "./logo/Logo";
import Nav from "./Nav";

function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <header className="absolute w-full top-0 z-50 py-3 px-4 md:px-6 lg:px-12 backdrop-blur-lg flex justify-between items-center">
      <Logo />
      <Nav isExpanded={isExpanded} />
      <HeaderIcons setIsExpanded={setIsExpanded} isExpanded={isExpanded} />
    </header>
  );
}

export default Header;
