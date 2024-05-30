import {
  faAward,
  faBuilding,
  faBuildingColumns,
  faClock,
  faDiagramProject,
  faDisplay,
  faDollar,
  faHouse,
  faPenRuler,
  faRecycle,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  AddressCardProps,
  BgImgCardProps,
  CardProps,
  NavLinkProp,
  StatItemProps,
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
  {
    image: "/images/home/services/img-2.jpg",
    title: "Building Staffs",
    delay: "100",
  },
  {
    image: "/images/home/services/img-3.jpg",
    title: "Material Supply",
    delay: "200",
  },
  { image: "/images/home/services/img-4.jpg", title: "Conslutancy" },
  {
    image: "/images/home/services/img-5.jpg",
    title: "Architecture",
    delay: "100",
  },
  {
    image: "/images/home/services/img-6.jpg",
    title: "Crane Service",
    delay: "200",
  },
];

export const homeSusListArray = [
  { icon: faRecycle, title: "Sustainablility", delay: "0" },
  { icon: faClock, title: "Project On Time", delay: "50" },
  { icon: faDisplay, title: "Modern Technology", delay: "100" },
  { icon: faPenRuler, title: "Latest Designs", delay: "150" },
];

export const addressCardArray: AddressCardProps[] = [
  { country: "Canada", address: "4446 Noble Rd, Cortes Island", delay: "0" },
  {
    country: "United States",
    address: "2367 Speers Road, Brampton",
    delay: "50",
  },
  {
    country: "Australia",
    address: "3851 49th Avenue, Kugluktuk",
    delay: "100",
  },
];

export const foundersCardsArray: BgImgCardProps[] = [
  {
    title: "Steven Marks",
    note: "CEO",
    background: "/images/home/founders/bg-1.jpg",
    delay: "0",
  },
  {
    title: "Lara Smith",
    note: "CTO",
    background: "/images/home/founders/bg-2.jpg",
    delay: "100",
  },
  {
    title: "John Doe",
    note: "COO",
    background: "/images/home/founders/bg-3.jpg",
    delay: "200",
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
    delay: "200",
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
    delay: "200",
  },
];

export const homeTestimonialsArray: TestimonialsCardProps[] = [
  {
    image: "/images/home/testimonials/profile-1.png",
    occupation: "Engineering Manager",
    clientName: "Alice Howard",
    animation: "fade-up",
  },
  {
    image: "/images/home/testimonials/profile-2.png",
    occupation: "Interior Designer",
    clientName: "Nathan Marshall",
    animation: "fade-up",
  },
  {
    image: "/images/home/testimonials/profile-3.png",
    occupation: "Architect",
    clientName: "Ema Romero",
    animation: "fade-down",
  },
  {
    image: "/images/home/testimonials/profile-4.png",
    occupation: "Manager",
    clientName: "Ann Smith",
    animation: "fade-down",
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
    animation: "fade-right",
    delay: "0",
  },
  {
    title: "Long Gate Bridge",
    note: "Malmo, SE",
    background: "/images/projects/latest-work/img-2.jpg",
    animation: "fade-right",
    delay: "100",
  },
  {
    title: "Enix Lawyer Building",
    note: "Toronto, CA",
    background: "/images/projects/latest-work/img-3.jpg",
    animation: "fade-right",
    delay: "200",
  },
  {
    title: "Deep Sea Bridge",
    note: "Athens, GR",
    background: "/images/projects/latest-work/img-4.jpg",
    animation: "fade-right",
    delay: "300",
  },
  {
    title: "Car Tech Building",
    note: "Denver, USA",
    background: "/images/projects/latest-work/img-5.jpg",
    animation: "fade-left",
    delay: "0",
  },
  {
    title: "Nctech Building",
    note: "Texas, USA",
    background: "/images/projects/latest-work/img-6.jpg",
    animation: "fade-left",
    delay: "100",
  },
  {
    title: "Vax Tech Building",
    note: "Ontario, CA",
    background: "/images/projects/latest-work/img-7.jpg",
    animation: "fade-left",
    delay: "200",
  },
  {
    title: "Food Lab Building",
    note: "Athens, GR",
    background: "/images/projects/latest-work/img-8.jpg",
    animation: "fade-left",
    delay: "200",
  },
];

export const servicesPageArray: CardProps[] = [
  { image: "/images/services/img-1.jpg", title: "Land Minning", delay: "0" },
  {
    image: "/images/services/img-2.jpg",
    title: "Building Staffs",
    delay: "100",
  },
  {
    image: "/images/services/img-3.jpg",
    title: "Material Supply",
    delay: "200",
  },
  { image: "/images/services/img-4.jpg", title: "Conslutancy", delay: "0" },
  { image: "/images/services/img-5.jpg", title: "Architecture", delay: "100" },
  { image: "/images/services/img-6.jpg", title: "Crane Service", delay: "200" },
];

export const aboutArray = [
  { icon: faBuilding, heading: "Building Staffs" },
  { icon: faBuildingColumns, heading: "History Emphasis" },
  { icon: faHouse, heading: "Economic Outcomes" },
];

export const aboutStatsArray: StatItemProps[] = [
  { icon: faDollar, stat: 325, note: "Revenue in 2017 (Million)" },
  { icon: faUsers, stat: 525, note: "Collaegues & Counting" },
  { icon: faDiagramProject, stat: 302, note: "Successfully Project" },
  { icon: faAward, stat: 25, note: "Year of experience" },
];

export const ourTeamArray: CardProps[] = [
  {
    image: "/images/about/workers/worker-1.jpeg",
    title: "Mike Rich",
    paragraph: "Lead Architect",
    delay: "0",
  },
  {
    image: "/images/about/workers/worker-2.jpeg",
    title: "Jenny Smith",
    paragraph: "Head Engineer (US)",
    delay: "100",
  },
  {
    image: "/images/about/workers/worker-3.jpeg",
    title: "George Doe",
    paragraph: "Head Engineer (CN)",
    delay: "200",
  },
  {
    image: "/images/about/workers/worker-4.jpeg",
    title: "Maria Jay",
    paragraph: "Head Engineer (AU)",
    delay: "300",
  },
];
