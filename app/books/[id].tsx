import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import {
	Feather,
	MaterialCommunityIcons,
	MaterialIcons,
} from "@expo/vector-icons";
import { BOOKS } from "utils/constants";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ThemedText } from "components/common/text";
import { useState } from "react";
import { ProgressBar } from "components/common/progressBar";

export default function BookDetail() {
	const router = useRouter();
	const { id } = useLocalSearchParams<{ id: string }>();
	const book = BOOKS.find((item) => item.id.toString() === id);

	return (
		<View className="bg-main-gray flex-1 ">
			<ScrollView
				contentContainerStyle={{ paddingBottom: 80 }}
				className="bg-main-gray"
			>
				<View className=" flex items-center pb-10">
					<View className="flex flex-row w-full justify-between pl-3 px-6">
						<MaterialIcons
							name="chevron-left"
							size={32}
							color={"white"}
							onTouchEnd={() => router.back()}
						/>
						<Feather className="mt-1" name="search" size={24} color={"white"} />
					</View>
					<View className="mt-4 flex flex-col items-center gap-6">
						<Image
							source={require("../../assets/book.jpg")}
							style={{
								width: 120,
								height: 175,
								borderRadius: 12,
							}}
							resizeMode="cover"
						/>
						<View className="text-center items-center">
							<ThemedText className="text-white text-[24px]" weight="medium">
								{book?.name}
							</ThemedText>
							<ThemedText weight="medium" className="text-white text-[16px]">
								{book?.author}
							</ThemedText>
						</View>

						<View className="flex flex-row gap-6">
							<TouchableOpacity className="flex items-center flex-col gap-2">
								<View className="bg-[#0000004D] w-[54px] h-[54px]  rounded-full flex items-center justify-center">
									<Feather name="heart" size={24} color={"white"} />
								</View>
								<ThemedText className="text-[12px] text-white" weight="medium">
									В избранное
								</ThemedText>
							</TouchableOpacity>

							<TouchableOpacity className="flex items-center flex-col gap-2">
								<View className="bg-main-brand w-[54px] h-[54px]  rounded-full flex items-center justify-center">
									<Feather name="book-open" size={24} color={"white"} />
								</View>
								<ThemedText className="text-[12px] text-white" weight="medium">
									Читать
								</ThemedText>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<BottomPart description={book?.description} />
			</ScrollView>
		</View>
	);
}

const BottomPart = ({ description }: { description?: string }) => {
	const [mode, setMode] = useState<"book" | "progress">("book");

	return (
		<View className="h-full">
			<View
				className="rounded-t-[24px] 
            border-t-2 border-l border-r 
            border-[#3E4043]"
			>
				<ThemedText></ThemedText>
			</View>

			<View className="w-full flex flex-row -mt-3">
				<TouchableOpacity
					className="w-[50%] items-center py-3"
					onPress={() => setMode("book")}
				>
					<View
						className={`${
							mode === "book" ? "border-b-2 p-1 border-b-main-brand " : ""
						}`}
					>
						<ThemedText
							weight="medium"
							className={`text-center  text-[16px] ${mode === "book" ? "text-white" : "text-main-graySecond"}`}
						>
							О книге
						</ThemedText>
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					className="w-[50%] items-center py-3"
					onPress={() => setMode("progress")}
				>
					<View
						className={`${
							mode === "progress" ? "border-b-2  p-1 border-b-main-brand" : ""
						}`}
					>
						<ThemedText
							weight="medium"
							className={`text-center  text-[16px] ${mode === "progress" ? "text-white" : "text-main-graySecond"}`}
						>
							Прогресс
						</ThemedText>
					</View>
				</TouchableOpacity>
			</View>

			{mode === "book" && (
				<ThemedText
					className="text-white px-6 text-[14px]"
					weight="medium"
					style={{ lineHeight: 18 }}
				>
					{description}
				</ThemedText>
			)}
			{mode === "progress" && (
				<View className="px-6 flex flex-col gap-8">
					<View className=" flex flex-col gap-3">
						<View className="flex flex-col gap-2">
							<View className="flex flex-row  justify-between">
								<ThemedText
									className="text-main-textSecond text-[14px]"
									weight="medium"
								>
									Страница{" "}
									<ThemedText className="text-main-brand" weight="medium">
										289
									</ThemedText>{" "}
									из 590
								</ThemedText>
								<ThemedText
									className="text-main-textSecond text-[14px]"
									weight="medium"
								>
									64%
								</ThemedText>
							</View>
							<ProgressBar progress={64} />
						</View>
					</View>

					<View className="flex flex-col gap-3">
						<View className="flex flex-row gap-2 items-center">
							<MaterialCommunityIcons name="fire" color={"#FF6600"} size={22} />
							<ThemedText className="text-[16px] text-white" weight="medium">
								Дней подряд: 0
							</ThemedText>
						</View>
						<View className="flex flex-row gap-2 items-center">
							<MaterialCommunityIcons
								name="clock"
								color={"#1CB0F6"}
								size={22}
							/>
							<ThemedText className="text-[16px] text-white" weight="medium">
								Время за чтением: 0 ч
							</ThemedText>
						</View>
						<View className="flex flex-row gap-2 items-center">
							<MaterialCommunityIcons
								name="calendar"
								color={"#C82EC0"}
								size={24}
							/>
							<ThemedText className="text-[16px] text-white" weight="medium">
								Закончишь примерно: -
							</ThemedText>
						</View>
					</View>
				</View>
			)}
		</View>
	);
};
