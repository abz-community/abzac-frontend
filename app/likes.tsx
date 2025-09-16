import { BookPreview } from "components/common/bookPreview";
import { ProgressBar } from "components/common/progressBar";
import { ThemedText } from "components/common/text";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { BOOKS } from "utils/constants";

export default function Likes() {
	const book = BOOKS[1];
	return (
		<ScrollView className=" bg-main-gray h-screen p-6">
			<View className="border border-[#3E4043] p-4 rounded-[12px] flex flex-row gap-4">
				<Image
					source={require("../assets/book.jpg")}
					style={{
						width: 90,
						height: 125,
						borderRadius: 12,
					}}
					resizeMode="cover"
				/>
				<View className="flex-1 flex flex-col justify-between">
					<View>
						<View className="flex flex-col gap-1">
							<ThemedText className="text-white text-[14px]" weight="medium">
								Дизайн обложки книги
							</ThemedText>
							<ThemedText
								className="text-main-textSecond text-[12px]"
								weight="medium"
							>
								Татьяна Даева
							</ThemedText>
						</View>
						<View
							className="rounded-md w-full "
							style={{
								alignSelf: "flex-start",
								flexShrink: 1,
							}}
						>
							<ThemedText
								className="text-main-textSecond text-[12px] ml-auto mb-1"
								weight="medium"
							>
								64%
							</ThemedText>
							<ProgressBar progress={64} />
						</View>
					</View>

					<TouchableOpacity
						className="bg-main-brand py-1 px-3 rounded-full"
						style={{ alignSelf: "flex-start" }}
					>
						<ThemedText className="text-white text-[14px]" weight="medium">
							Продолжить
						</ThemedText>
					</TouchableOpacity>
				</View>
			</View>
			<View className="mt-6 flex flex-col gap-2">
				<ThemedText className="text-white text-[16px]" weight="medium">
					Избранное
				</ThemedText>
				<BookPreview
					author={book.author}
					id={book.id.toString()}
					name={book.name}
					progress={40}
				/>
			</View>
		</ScrollView>
	);
}
