import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const Avatar = () => {
	return (
		<View className="rounded-full bg-[#43464A] w-10 h-10 flex items-center justify-center">
			<MaterialIcons name="person" size={20} color={"#8E959C"} />
		</View>
	);
};
