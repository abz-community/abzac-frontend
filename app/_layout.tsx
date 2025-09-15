import { View, TouchableOpacity, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

import { MaterialIcons, Feather } from "@expo/vector-icons";

export default function RootLayout() {
	return (
		<SafeAreaView className="bg-main-gray flex-1">
			<Stack screenOptions={{ headerShown: false, animation: "fade" }} />

			<View className="absolute bottom-10 left-0 right-0 mx-6 px-6 py-2 rounded-full bg-main-graySecond ">
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{ alignItems: "center" }}
					className=""
				>
					<TouchableOpacity
						onPress={() => console.log("Home")}
						className="w-14 h-14 items-center justify-center rounded-full bg-red-500 mb-1"
					>
						<MaterialIcons name="home" size={20} color="white" />
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => console.log("Likes")}
						className="w-14 h-14 items-center justify-center rounded-full bg-transparent mb-1"
					>
						<Feather name="heart" size={20} color="#9ca3af" />
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => console.log("Gallery")}
						className="w-14 h-14 items-center justify-center rounded-full bg-transparent mb-1"
					>
						<MaterialIcons name="photo-library" size={20} color="#9ca3af" />
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => console.log("Profile")}
						className="w-14 h-14 items-center justify-center rounded-full bg-transparent mb-1"
					>
						<MaterialIcons name="person" size={20} color="#9ca3af" />
					</TouchableOpacity>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

export const Tabs = () => {
	return <div></div>;
};
