import { CardProps, NavLinkProp, StatProp } from "@types";

export const navLinksArray: NavLinkProp[] = [
  { path: "/", title: "Home" },
  { path: "/projects", title: "Projects" },
  { path: "/services", title: "Services" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact Us" },
];

export const statsArray: StatProp[] = [
  { stat: 512, info: "Successfully Project Finished." },
  { stat: 25, info: "Years of experience with proud" },
  { stat: 1120, info: "Revenue in 2017 investment" },
  { stat: 1520, info: "Colleagues & counting more daily" },
];

export const homeServicesArray: CardProps[] = [
  { image: "/images/home/services/img-1.jpg", title: "Land Minning" },
  { image: "/images/home/services/img-2.jpg", title: "Building Staffs" },
  { image: "/images/home/services/img-3.jpg", title: "Material Supply" },
  { image: "/images/home/services/img-4.jpg", title: "Conslutancy" },
  { image: "/images/home/services/img-5.jpg", title: "Architecture" },
  { image: "/images/home/services/img-6.jpg", title: "Crane Service" },
];
