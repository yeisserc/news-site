export interface NavItem {
  title: string;
  to: string;
}

export const navItems: NavItem[] = [
  {
    title: "Categories",
    to: "/categories"
  },
  {
    title: "Recent News",
    to: "/recentNews"
  },
  {
    title: "Top rated",
    to: "/topRated"
  }
];