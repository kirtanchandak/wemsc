import {
    AiOutlineHome,
    AiFillHome,
    AiOutlineCompass,
    AiFillCompass,
    AiOutlineHeart,
    AiFillHeart,
    AiOutlineFolder,
    AiFillFolder,
    AiOutlineFile,
    AiFillFile,
} from "react-icons/ai";

export const menuItems = [
    {
        name: "Home",
        icon: AiOutlineHome,
        activeIcon: AiFillHome,
    },
    {
        name: "Discover",
        icon: AiOutlineCompass,
        activeIcon: AiFillCompass,
    },
    {
        name: "Collections",
        icon: AiOutlineFolder,
        activeIcon: AiFillFolder,
    },
];

export const libraryItems = [
    {
        name: "Downloads",
        icon: AiOutlineFile,
        activeIcon: AiFillFile,
    },
    {
        name: "Favourites",
        icon: AiOutlineHeart,
        activeIcon: AiFillHeart,
    },
    {
        name: "Local Files",
        icon: AiOutlineFile,
        activeIcon: AiFillFile,
    },
];
