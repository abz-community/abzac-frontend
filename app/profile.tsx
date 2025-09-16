import { FlatList, ScrollView, View } from "react-native";
import { Avatar } from "components/common/avatar";
import { ThemedText } from "components/common/text";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const MENU_ITEMS = [
	{
		text: "Цитаты",
		icon: (
			<MaterialCommunityIcons
				color={"white"}
				name="format-quote-close"
				size={24}
			/>
		),
	},
	{
		text: "Достижения",

		icon: (
			<MaterialCommunityIcons color={"white"} name="star-circle" size={24} />
		),
	},
	{
		text: "Загрузка книги",
		icon: <MaterialCommunityIcons color={"white"} name="plus" size={28} />,
	},
	{
		text: "Настройки",
		icon: <MaterialIcons color={"white"} name="settings" size={24} />,
	},
];

export default function Profile() {
	return (
		<ScrollView className=" bg-main-gray h-screen p-4">
			<View className="flex items-center gap-2">
				<Avatar size="large" />
				<ThemedText className="text-white text-[22px]" weight="medium">
					username
				</ThemedText>
			</View>
			<View className="flex flex-row mt-6 ">
				<View className="w-[33%] flex items-center">
					<ThemedText className="text-main-brand text-[20px]" weight="bold">
						0
					</ThemedText>
					<ThemedText
						className="text-main-textSecond text-[12px]"
						weight="bold"
					>
						Книг прочтено
					</ThemedText>
				</View>
				<View className=" w-[33%] flex items-center border-r border-l border-[#3E4043]">
					<ThemedText className="text-main-brand text-[20px]" weight="bold">
						0
					</ThemedText>
					<ThemedText
						className="text-main-textSecond text-[12px]"
						weight="bold"
					>
						Дней подряд
					</ThemedText>
				</View>
				<View className="  w-[33%] flex items-center">
					<ThemedText className="text-main-brand text-[20px]" weight="bold">
						0
					</ThemedText>
					<ThemedText
						className="text-main-textSecond text-[12px]"
						weight="bold"
					>
						Абзацев
					</ThemedText>
				</View>
			</View>
			<Menu />
		</ScrollView>
	);
}

const Menu = () => {
	return (
		<View className="mt-6">
			{MENU_ITEMS.map((item) => (
				<View
					key={item.text}
					className="py-3 flex flex-row items-center justify-between"
				>
					<View className="flex items-center flex-row gap-4">
						<View className="w-10 h-10 bg-main-brand rounded-[8px] flex items-center justify-center">
							{item.icon}
						</View>
						<ThemedText className="text-white text-[15px]">
							{item.text}
						</ThemedText>
					</View>
					<MaterialIcons name="chevron-right" size={32} color={"white"} />
				</View>
			))}
		</View>
	);
};
