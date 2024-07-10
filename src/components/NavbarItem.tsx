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
        "flex w-full flex-col items-center px-6 py-1  text-center text-nowrap text-white rounded-xl fon",
        isActive && "bg-white  hover:bg-opacity-[0.1] bg-opacity-[0.1]",
      )}
    >
      {label}
    </Link>
  );
};

export default NavbarItem;
