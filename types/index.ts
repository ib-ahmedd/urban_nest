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
