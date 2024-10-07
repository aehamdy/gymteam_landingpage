import { Menu, Message, SearchIcon } from "./header-icons/Icons";

function HeaderIcons() {
  return (
    <div className="flex gap-6">
      <SearchIcon />
      <Message />
      <Menu />
    </div>
  );
}

export default HeaderIcons;
