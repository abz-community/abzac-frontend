import { cloneElement, type ReactNode } from "react";
import Library from "@/icons/library.svg?react";
import MyBooks from "@/icons/open-book.svg?react";
import Profile from "@/icons/profile.svg?react";
import { Link, useLocation } from "@tanstack/react-router";

interface MenuItemType {
	name: string;
	icon: ReactNode;
	path: string;
}

const menuItems: MenuItemType[] = [
	{
		name: "Библиотека",
		icon: <Library />,
		path: "library",
	},
	{
		name: "Мои книги",
		icon: <MyBooks />,
		path: "books",
	},
	{
		name: "Профиль",
		icon: <Profile />,
		path: "profile",
	},
];

const FooterMenuItem = ({ item }: { item: MenuItemType }) => {
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<Link
			data-active={currentPath.includes(item.path)}
			to={item.path}
			className="flex items-center gap-2 flex-col flex-1/3  text-[#E66589]  data-[active=true]:text-black"
		>
			{item.icon} {item.name}
		</Link>
	);
};

export const FooterMenu = () => {
	return (
		<div className="flex justify-between px-0 items-center h-[75px] border-t border-[#F2E8E8]">
			{menuItems.map((item) => (
				<FooterMenuItem item={item} key={item.path} />
			))}
		</div>
	);
};
