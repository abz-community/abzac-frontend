import { Avatar } from "components/common/avatar";
import { Text } from "components/common/text";
import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export const Header = () => {
	return (
		<View className="flex flex-row  justify-between">
			<View className="flex flex-row  items-center gap-2">
				<Avatar />
				<View className="flex flex-col gap-2">
					<Text className="text-white text-[14px]" weight="medium">
						Привет, username
					</Text>
					<Text className="text-[#A29F9F] text-[10px]">
						Добро пожаловать в{" "}
						<Text className="text-main-brand " weight="medium">
							Абзац
						</Text>
					</Text>
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
