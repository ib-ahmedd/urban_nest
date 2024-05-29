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
  paragraph?: string;
}

export interface CardContainerProps {
  array: CardProps[];
  heading?: string;
  subHeading?: string;
}

export interface AddressCardProps {
  country: string;
  address: string;
}

export interface BgImgCardProps {
  specs?: string;
  background: string;
  title: string;
  note: string;
}

export interface TestimonialsCardProps {
  image: string;
  occupation: string;
  clientName: string;
}

export interface questionProps {
  question: string;
  id: number;
  open: number;
  handleOpen(id: number): void;
}

export interface StatItemProps {
  icon: IconDefinition;
  title: string;
  note: string;
}
