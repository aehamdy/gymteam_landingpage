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
