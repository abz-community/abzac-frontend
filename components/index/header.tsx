import { Avatar } from "components/common/avatar";
import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ThemedText } from "components/common/text";

export const Header = () => {
	return (
		<View className="flex flex-row  justify-between">
			<View className="flex flex-row  items-center gap-4">
				<Avatar />
				<View className="flex flex-col gap-2">
					<ThemedText className="text-white text-[16px]" weight="medium">
						Привет, username
					</ThemedText>
					<ThemedText className="text-[#A29F9F] text-[12px]">
						Добро пожаловать в{" "}
						<ThemedText className="text-main-brand " weight="medium">
							Абзац
						</ThemedText>
					</ThemedText>
				</View>
			</View>
			<View>
				<TouchableOpacity className="bg-main-graySecond w-10 h-10 rounded-full flex items-center justify-center">
					<Feather name="search" size={20} color={"white"} />
				</TouchableOpacity>
			</View>
		</View>
	);
};
