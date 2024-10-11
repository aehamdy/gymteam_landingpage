import { Zap } from "lucide-react";

import feature1 from "../assets/features-1.png";
import feature2 from "../assets/features-2.png";
import feature3 from "../assets/features-3.png";
import about1 from "../assets/about-1.jpg";
import about2 from "../assets/about-2.jpg";
import coach1 from "../assets/coach-1.jpg";
import coach2 from "../assets/coach-2.jpg";
import coach3 from "../assets/coach-3.jpg";
import coach4 from "../assets/coach-4.jpg";
import blog1 from "../assets/blogs-1.jpg";
import blog2 from "../assets/blogs-2.jpg";
import blog3 from "../assets/blogs-3.jpg";

export const navItems = [
  { label: "Home", href: "#" },
  { label: "Shop", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
];

export const features = [
  {
    img: feature1,
    heading: "muscles building",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum at ut ad.",
    icon: <Zap />,
  },
  {
    img: feature2,
    heading: "muscles building",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum at ut ad.",
    icon: <Zap />,
  },
  {
    img: feature3,
    heading: "muscles building",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum at ut ad.",
    icon: <Zap />,
  },
];

export const aboutImages = [{ img: about1 }, { img: about2 }];

export const coaches = [
  {
    img: coach1,
    name: "Jane Cooper",
    type: "Corssfit Coach",
  },
  {
    img: coach2,
    name: "Brooklyn Simmons",
    type: "Corssfit Coach",
  },
  {
    img: coach3,
    name: "Savannah Nguyen",
    type: "Corssfit Coach",
  },
  {
    img: coach4,
    name: "Kathryn Murphy",
    type: "Corssfit Coach",
  },
];

export const plans = [
  {
    type: "crossfit",
    price: "120",
    currency: "$",
    monthly: "/mo",
    yearly: "/yr",
    features: [
      "Lorem Ipsum is simply dummy text",
      "Contrary to popular ballof. Lorem Ipsum is",
      "Contrary to popular ballof. Lorem Ipsum",
      "Lorem Ipsum is simply dummy text",
    ],
  },
  {
    type: "open gym",
    price: "109",
    currency: "$",
    monthly: "/mo",
    yearly: "/yr",
    features: [
      "Lorem Ipsum is simply dummy text",
      "Contrary to popular ballof. Lorem Ipsum is",
      "Contrary to popular ballof. Lorem Ipsum",
      "Lorem Ipsum is simply dummy text",
    ],
  },
];

export const reviews = [
  {
    text: "lorem ipsum is simply dummy text of the printing and typsetting industry",
    name: "albert flores",
    profession: "Profi coach",
  },
];

export const blogs = [
  {
    img: blog1,
    buttonText: "new zone",
    text: "Lorem Ipsum is simply dummy text of the printing and typsetting industry",
  },
  {
    img: blog2,
    buttonText: "personal",
    text: "Lorem Ipsum is simply dummy text of the printing and typsetting industry",
  },
  {
    img: blog3,
    buttonText: "personal",
    text: "Lorem Ipsum is simply dummy text of the printing and typsetting industry",
  },
];

export const footerMenus = [
  {
    heading: "About",
    list: ["About us", "Blog", "Contact", "Vacancy"],
  },
  {
    heading: "Services",
    list: ["How to work", "Works", "Price"],
  },
  {
    heading: "Support",
    list: ["Contact us", "Our channel", "Instagram", "Telegram"],
  },
  {
    heading: "FAQ",
    list: ["Payment", "Monthly pay", "Work time", "More"],
  },
];
