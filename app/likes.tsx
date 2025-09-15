import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Likes() {
	return (
		<View className="bg-main-gray h-screen">
			<Text>Likes screen</Text>
			<Link href="/">
				<Text className="text-red-700 mt-4">Go to index</Text>
			</Link>
		</View>
	);
}
