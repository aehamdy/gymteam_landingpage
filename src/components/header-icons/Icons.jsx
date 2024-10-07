import { Mail, MenuIcon, Search } from "lucide-react";

export function SearchIcon() {
  return <Search className="hover:text-white duration-short cursor-pointer" />;
}

export function Message() {
  return <Mail className="hover:text-white duration-short cursor-pointer" />;
}

export function Menu() {
  return (
    <MenuIcon className="md:hidden hover:text-white duration-short cursor-pointer" />
  );
}
