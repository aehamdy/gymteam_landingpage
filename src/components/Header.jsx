import { useState } from "react";
import HeaderIcons from "./HeaderIcons";
import Logo from "./logo/Logo";
import Nav from "./Nav";

function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <header className="relative flex justify-between items-center py-6">
      <Logo />
      <Nav isExpanded={isExpanded} />
      <HeaderIcons setIsExpanded={setIsExpanded} isExpanded={isExpanded} />
    </header>
  );
}

export default Header;
