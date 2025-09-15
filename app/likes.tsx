import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Likes() {
	return (
		<View className=" bg-main-gray h-screen">
			<Text className="text text-xl">Likes screen</Text>
			<Link href="/likes">
				<Text className="font-rubik " style={{ fontFamily: "Rubick" }}>
					Go to Profile
				</Text>
			</Link>
		</View>
	);
}
