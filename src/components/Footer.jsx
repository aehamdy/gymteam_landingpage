import { footerMenus } from "../constants";
import Logo from "./logo/Logo";

const instagramIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-instagram"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const facebookIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-facebook"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const linkedinIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-linkedin"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const icons = [facebookIcon, linkedinIcon, instagramIcon];

function Footer() {
  return (
    <footer className="py-section-spacing">
      <div className="flex flex-col md:flex-row justify-between gap-8 px-section-horizontal-padding">
        <div className="flex flex-col gap-8 md:w-1/3">
          <Logo />
          <p className="md:w-3/4 text-secondary-paragraph">
            Lorem Ipsum is simply dummy text for the printing and typsetting
          </p>
          <div className="flex gap-3">
            {icons.map((icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 border border-accent rounded-full"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
          {footerMenus.map((menu, i) => (
            <div key={i} className="">
              <h3 className="text-xl text-accent mb-3">{menu.heading}</h3>
              <ul className="flex flex-col gap-3">
                {menu.list.map((item, i) => (
                  <li key={i} className="w-fit text-lg hover:text-white">
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
