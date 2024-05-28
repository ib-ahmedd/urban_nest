import {
  faBuilding,
  faBuildingColumns,
  faClock,
  faDisplay,
  faHouse,
  faPenRuler,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";
import {
  AddressCardProps,
  BgImgCardProps,
  CardProps,
  NavLinkProp,
  StatProp,
  TestimonialsCardProps,
} from "@types";

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

export const homeSusListArray = [
  { icon: faRecycle, title: "Sustainablility" },
  { icon: faClock, title: "Project On Time" },
  { icon: faDisplay, title: "Modern Technology" },
  { icon: faPenRuler, title: "Latest Designs" },
];

export const addressCardArray: AddressCardProps[] = [
  { country: "Canada", address: "4446 Noble Rd, Cortes Island" },
  { country: "United States", address: "2367 Speers Road, Brampton" },
  { country: "Australia", address: "3851 49th Avenue, Kugluktuk" },
];

export const foundersCardsArray: BgImgCardProps[] = [
  {
    title: "Steven Marks",
    note: "CEO",
    background: "/images/home/founders/bg-1.jpg",
  },
  {
    title: "Lara Smith",
    note: "CTO",
    background: "/images/home/founders/bg-2.jpg",
  },
  {
    title: "John Doe",
    note: "COO",
    background: "/images/home/founders/bg-3.jpg",
  },
];

export const homeProjectsArray: BgImgCardProps[] = [
  {
    title: "Science Lab Building",
    note: "New York, USA",
    background: "/images/home/latest/img-1.jpg",
  },
  {
    title: "Long Gate Bridge",
    note: "Malmo, SE",
    background: "/images/home/latest/img-2.jpg",
  },
  {
    title: "Enix Lawyer Building",
    note: "Toronto, CA",
    background: "/images/home/latest/img-3.jpg",
  },
  {
    title: "Deep Sea Bridge",
    note: "Athens, GR",
    background: "/images/home/latest/img-4.jpg",
  },
];

export const homeTestimonialsArray: TestimonialsCardProps[] = [
  {
    image: "/images/home/testimonials/profile-1.png",
    occupation: "Engineering Manager",
    clientName: "Alice Howard",
  },
  {
    image: "/images/home/testimonials/profile-2.png",
    occupation: "Interior Designer",
    clientName: "Nathan Marshall",
  },
  {
    image: "/images/home/testimonials/profile-3.png",
    occupation: "Architect",
    clientName: "Ema Romero",
  },
  {
    image: "/images/home/testimonials/profile-4.png",
    occupation: "Manager",
    clientName: "Ann Smith",
  },
];

export const FAQsArray = [
  {
    id: 1,
    question: "1. How to create cities and communites that solve?",
  },
  { id: 2, question: "2. Construction of the winning $45 milion?" },
  {
    id: 3,
    question: "3. How to create cities and communites that solve?",
  },
];

export const projectsArray: BgImgCardProps[] = [
  {
    title: "Science Lab Building",
    note: "New York, USA",
    background: "/images/projects/latest-work/img-1.jpg",
  },
  {
    title: "Long Gate Bridge",
    note: "Malmo, SE",
    background: "/images/projects/latest-work/img-2.jpg",
  },
  {
    title: "Enix Lawyer Building",
    note: "Toronto, CA",
    background: "/images/projects/latest-work/img-3.jpg",
  },
  {
    title: "Deep Sea Bridge",
    note: "Athens, GR",
    background: "/images/projects/latest-work/img-4.jpg",
  },
  {
    title: "Car Tech Building",
    note: "Denver, USA",
    background: "/images/projects/latest-work/img-5.jpg",
  },
  {
    title: "Nctech Building",
    note: "Texas, USA",
    background: "/images/projects/latest-work/img-6.jpg",
  },
  {
    title: "Vax Tech Building",
    note: "Ontario, CA",
    background: "/images/projects/latest-work/img-7.jpg",
  },
  {
    title: "Food Lab Building",
    note: "Athens, GR",
    background: "/images/projects/latest-work/img-8.jpg",
  },
];

export const servicesPageArray: CardProps[] = [
  { image: "/images/services/img-1.jpg", title: "Land Minning" },
  { image: "/images/services/img-2.jpg", title: "Building Staffs" },
  { image: "/images/services/img-3.jpg", title: "Material Supply" },
  { image: "/images/services/img-4.jpg", title: "Conslutancy" },
  { image: "/images/services/img-5.jpg", title: "Architecture" },
  { image: "/images/services/img-6.jpg", title: "Crane Service" },
];

export const aboutArray = [
  { icon: faBuilding, heading: "Building Staffs" },
  { icon: faBuildingColumns, heading: "History Emphasis" },
  { icon: faHouse, heading: "Economic Outcomes" },
];
