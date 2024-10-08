/* eslint-disable react/prop-types */
import { CloseIcon, Menu, Message, SearchIcon } from "./header-icons/Icons";

function HeaderIcons({ setIsExpanded, isExpanded }) {
  const toggleNavbar = () => {
    setIsExpanded((prevValue) => !prevValue);
  };
  return (
    <div className="flex gap-6">
      <SearchIcon />
      <Message />
      <button onClick={toggleNavbar} className="lg:hidden">
        {isExpanded ? <CloseIcon /> : <Menu />}
      </button>
    </div>
  );
}

export default HeaderIcons;
