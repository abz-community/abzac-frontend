import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Profile() {
	return (
		<View className=" bg-main-gray h-screen">
			<Text className="text text-xl">Profile screen</Text>
			<Link href="/likes">
				<Text className="text-main-brand t-4">Go to Profile</Text>
			</Link>
		</View>
	);
}
