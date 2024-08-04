import { MenuItemProps } from "@/types/types";
import Link from "next/link";



const SidebarItem: React.FC<MenuItemProps> = ({ handleItemClick, activeItem, menuItems }) => {
  return (
    <div>
      {menuItems.map((item, index) => (
        <Link
          href="#"
          key={index}
          onClick={() => handleItemClick(item.name)}
          className={`flex gap-5 mt-3 items-center transition-colors duration-500 ${
            activeItem === item.name
              ? "text-blue-500 animate-pop"
              : "hover:animate-pop"
          }`}
        >
          {activeItem === item.name ? (
            <item.activeIcon size={25}  />
          ) : (
            <item.icon size={25}  />
          )}
          <p
            className={`font-semibold text-lg transition-opacity duration-500 ${
              activeItem === item.name ? "animate-pop" : "opacity-50"
            }`}
          >
            {item.name}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default SidebarItem;
