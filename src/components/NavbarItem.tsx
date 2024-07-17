import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  label: string;
  href: string;
}

const NavbarItem: React.FC<SidebarItemProps> = ({
  href,

  label,
}) => {
  const location = useLocation();
  const isActive =
    href === location.pathname || location.pathname.startsWith(`${href}/`);

  return (
    <Link
      to={href}
      className={cn(
        "flex w-full flex-col items-center px-6 py-4 sm:px-6 sm:py-1 text-center text-nowrap text-black-0 sm:text-white rounded-xl ",
        isActive &&
          "bg-black-0 bg-opacity-[0.1]  sm:hover:bg-opacity-[0.1] sm:bg-opacity-[0.1] sm:bg-white",
      )}
    >
      {label}
    </Link>
  );
};

export default NavbarItem;
