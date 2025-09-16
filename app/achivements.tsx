import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedText } from "components/common/text";
import { ProgressBar } from "components/common/progressBar";

export default function Achivements() {
	return (
		<View className=" bg-main-gray h-screen p-6 flex flex-col gap-9">
			<View className="flex flex-col gap-2">
				<View>
					<ThemedText
						className="text text-xl text-white text-[16px]"
						weight="medium"
					>
						Задания сентября
					</ThemedText>

					<View className="flex flex-row items-center gap-1">
						<MaterialCommunityIcons name="clock" color={"#8E959C"} size={16} />
						<ThemedText
							className="text  text-main-textSecond text-[14px]"
							weight="medium"
						>
							19 дней
						</ThemedText>
					</View>
				</View>

				<View className="border  border-[#3E4043] p-4 rounded-[12px] flex flex-col gap-4">
					<ThemedText className="text-white text-[14px]" weight="medium">
						Выполни 30 ежедневных заданий
					</ThemedText>

					<View className="relative">
						<ProgressBar progress={64} height={16} />
						<ThemedText
							className="text-white absolute bottom-[0px]  w-full text-center"
							weight="medium"
						>
							24/30
						</ThemedText>
					</View>
				</View>
			</View>
			<DailyAchivements />
		</View>
	);
}

const DailyAchivements = () => {
	return (
		<View className="flex flex-col gap-4">
			<View className="flex flex-row justify-between">
				<ThemedText className="uppercase text-main-textSecond " weight="medium">
					ежедневные задания
				</ThemedText>
				<View className="flex flex-row items-center gap-1">
					<MaterialCommunityIcons name="clock" color={"#1CB0F6"} size={16} />
					<ThemedText
						className="text  text-[#1CB0F6] text-[14px]"
						weight="medium"
					>
						3 ч
					</ThemedText>
				</View>
			</View>

			<View className="flex flex-col gap-4">
				<View className="flex flex-col gap-2">
					<ThemedText className="text-white">Продли серию</ThemedText>
					<View className="relative">
						<ProgressBar progress={0} height={16} />

						<ThemedText
							className="text-white absolute bottom-[0px]  w-full text-center"
							weight="medium"
						>
							0 / 1
						</ThemedText>
					</View>
				</View>

				<View className="flex flex-col gap-2">
					<ThemedText className="text-white">Прочти 20 абзацев</ThemedText>
					<View className="relative">
						<ProgressBar progress={0} height={16} />

						<ThemedText
							className="text-white absolute bottom-[0px]  w-full text-center"
							weight="medium"
						>
							0 / 20
						</ThemedText>
					</View>
				</View>
			</View>
		</View>
	);
};
