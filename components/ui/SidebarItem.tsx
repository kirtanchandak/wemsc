"use client";
import Link from "next/link";

interface MenuItem {
  name: string;
  icon: React.ComponentType<{ size: number }>;
  activeIcon: React.ComponentType<{ size: number }>;
}

interface SidebarItemProps {
  handleItemClick: (name: string) => void;
  activeItem: string;
  menuItems: MenuItem[];
}

const SidebarItem: React.FC<SidebarItemProps> = ({ handleItemClick, activeItem, menuItems }) => {
  return (
    <div>
      {menuItems.map((item, index) => (
        <Link
          href="#"
          key={index}
          onClick={() => handleItemClick(item.name)}
          className={`flex gap-5 mt-3 ${
            activeItem === item.name ? "text-blue-500" : ""
          }`}
        >
          {activeItem === item.name ? <item.activeIcon size={25} /> : <item.icon size={25} />}
          <p className="font-semibold text-lg">{item.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default SidebarItem;
