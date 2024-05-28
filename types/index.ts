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
