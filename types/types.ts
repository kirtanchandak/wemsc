import { StaticImageData } from "next/image";

interface RecentlyPlayedItem {
    id: number;
    name: string;
    img: string | StaticImageData;
    artist: string;
  }
  
export interface RecentlyPlayedItemProps {
    recentlyPlayed: RecentlyPlayedItem[];
    isLoading: boolean; 
  }

interface MenuItem {
    name: string;
    icon: React.ComponentType<{ size: number }>;
    activeIcon: React.ComponentType<{ size: number }>;
  }
  
export interface MenuItemProps {
    handleItemClick: (name: string) => void;
    activeItem: string;
    menuItems: MenuItem[];
  }

interface Album {
    id: number;
    name: string;
    img: string | StaticImageData;
    artist: string;
  }
  
export interface SongItemProps {
    albums: Album[];
    isLoading: boolean; 
  }
  