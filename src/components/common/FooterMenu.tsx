import type { ReactNode } from "react";
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
			className="flex items-center gap-2 flex-col justify-center  data-[active=true]:bg-accent  text-white rounded-full w-[54px] h-[54px]"
		>
			{item.icon}
		</Link>
	);
};

export const FooterMenu = () => {
	return (
		<div className="absolute w-[92%] mx-[4%] bottom-6  flex justify-between px-2 items-center h-[65px] bg-gray-second-main rounded-full">
			{menuItems.map((item) => (
				<FooterMenuItem item={item} key={item.path} />
			))}
		</div>
	);
};
