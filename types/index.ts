import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface NavLinkProp {
  path: string;
  title: string;
}

export interface StatProp {
  stat: number;
  info: string;
}

export interface CardProps {
  image: string;
  title: string;
  width?: string;
  paragraph?: string;
  delay?: string;
  animation?: string;
}

export interface CardContainerProps {
  array: CardProps[];
  width?: string;
  flexAlign?: string;
  heading?: string;
  subHeading?: string;
  delay?: string;
  animation?: string;
}

export interface AddressCardProps {
  country: string;
  address: string;
  delay?: string;
}

export interface BgImgCardProps {
  background: string;
  title: string;
  note: string;
  specs?: string;
  animation?: string;
  delay?: string;
}

export interface TestimonialsCardProps {
  image: string;
  occupation: string;
  clientName: string;
  animation: string;
}

export interface questionProps {
  question: string;
  id: number;
  open: number;
  handleOpen(id: number): void;
}

export interface StatItemProps {
  icon: IconDefinition;
  stat: number;
  note: string;
}
