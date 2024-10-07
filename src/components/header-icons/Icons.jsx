import { Mail, MenuIcon, Search, X } from "lucide-react";

export function SearchIcon() {
  return <Search className="hover:text-white duration-short cursor-pointer" />;
}

export function Message() {
  return <Mail className="hover:text-white duration-short cursor-pointer" />;
}

export function Menu() {
  return (
    <MenuIcon className="lg:hidden hover:text-white duration-short cursor-pointer" />
  );
}

export function CloseIcon() {
  return <X className="lg:hidden cursor-pointer" />;
}
