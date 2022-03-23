export interface IHeader {
  navigations?: string[];
  title: string;
  subTitle?: string;
  src?: string;
}

export interface ITab {
  name: string;
  href: string;
  current: boolean;
}
