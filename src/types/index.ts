export interface RouteItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: RouteItem[];
}
export enum Page {
  home = "/",
  about = "/about",
  service = "/service",
  product = "/product",
  industry = "/industry",
  news = "/news",
  career = "/career",
  portfolio = "/portfolio",
}
export enum TagColors {
  magenta = "magenta",
  red = "red",
  volcano = "volcano",
  orange = "orange",
  gold = "gold",
  lime = "lime",
  green = "green",
  cyan = "cyan",
  blue = "blue",
  geekblue = "geekblue",
  purple = "purple",
}

export interface tagItems {
  value: string;
  type: string;
  color: string;
}
