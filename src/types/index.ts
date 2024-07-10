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
