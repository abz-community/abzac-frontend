import { View, ScrollView } from "react-native";
import { Header } from "components/index/header";
import { BookPreview } from "components/common/bookPreview";
import { ThemedText } from "components/common/text";
import { MaterialIcons } from "@expo/vector-icons";
import { BOOKS } from "utils/constants";

export default function Home() {
	return (
		<View className="bg-main-gray h-screen">
			<Header />

			<View className="mt-10">
				<View className="flex items-center flex-row mb-2">
					<ThemedText className="ml-6 text-[24px] text-white " weight="medium">
						Хиты всех времен
					</ThemedText>
					<MaterialIcons
						className="mt-1"
						name="chevron-right"
						size={36}
						color={"white"}
					/>
				</View>
				<ScrollView
					horizontal
					alwaysBounceVertical={false}
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{
						columnGap: 16,
						paddingHorizontal: 16,
						paddingVertical: 8,
					}}
				>
					{BOOKS.map((book) => (
						<BookPreview
							id={book.id.toString()}
							key={book.id}
							author={book.author}
							name={book.name}
							progress={book.progress}
						/>
					))}
				</ScrollView>
			</View>
		</View>
	);
}
