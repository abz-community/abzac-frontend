import { createFileRoute, Link } from "@tanstack/react-router";
import Settings from "@/icons/settings.svg?react";
import Upload from "@/icons/upload.svg?react";
import Achievements from "@/icons/achievements.svg?react";
import Chevron from "@/icons/chevron.svg?react";
import type { ReactNode } from "react";

export const Route = createFileRoute("/profile")({
	component: RouteComponent,
});

interface MenuItemType {
	name: string;
	icon: ReactNode;
	path: string;
}

const menuItems: MenuItemType[] = [
	// { name: "Выделенные цитаты", icon: <Quote />, path: "/profile/quotes" },
	{ name: "Достижения", icon: <Achievements />, path: "/profile/achievements" },
	{ name: "Загрузить книгу", icon: <Upload />, path: "/profile/upload" },
];

const MenuItem = ({ item }: { item: MenuItemType }) => {
	return (
		<Link to={item.path} className="h-[56px] flex items-center justify-between">
			<div className="flex items-center gap-4 text-[16px]">
				<div className="flex items-center justify-center bg-[#F5F2F2] w-10 h-10 rounded-[8px]">
					{item.icon}
				</div>
				{item.name}
			</div>

			<Chevron />
		</Link>
	);
};

function RouteComponent() {
	return (
		<div className="px-4 w-full">
			<div className="bg-gray-100 border border-gray-300 rounded-md p-3 mb-4 text-xs font-mono overflow-auto max-h-40">
				{/* <pre>{JSON.stringify(tgWebAppData, null, 2)}</pre> */}
			</div>
			<div className="w-full py-4 w-full flex justify-end ">
				<Link to="/profile/settings" className=" w-10 h-10 flex justify-end">
					<Settings />
				</Link>
			</div>

			<div className="flex flex-col gap-4 items-center justify-center">
				<img
					className="w-[128px] h-[128px] rounded-full overflow-hidden "
					alt="logo"
					// src={user?.photo_url}
				/>
				<div className="font-bold text-[22px] flex">
					<div className="mt-[3px]">@</div>
					{/* <div>{user?.username}</div> */}
				</div>
			</div>

			<div className="flex gap-3 py-3">
				<div className="h-[85px] border border-[#E3DEDE] flex-1/2 flex flex-col gap-2 p-3 rounded-[8px] items-center justify-center">
					<p className="font-bold text-[24px] ">15</p>
					<span className="text-[14px] text-red-second">Прочтено книг</span>
				</div>
				<div className="h-[85px] border border-[#E3DEDE] flex-1/2 flex flex-col gap-2 p-3 rounded-[8px] items-center justify-center">
					<p className="font-bold text-[24px] ">7</p>
					<span className="text-[14px] text-red-second">Дней подряд</span>
				</div>
			</div>
			<div>
				{menuItems.map((item) => (
					<MenuItem item={item} key={item.name} />
				))}
			</div>
		</div>
	);
}
