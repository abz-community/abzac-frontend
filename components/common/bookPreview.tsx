import { FC } from "react";
import { View } from "react-native";
import { Image } from "react-native";
import { ThemedText } from "./text";
import ProgressCircleBar from "./progress";

interface BookPreviewProps {
	author: string;
	name: string;
	progress: number;
}

export const BookPreview: FC<BookPreviewProps> = ({
	author = "нет автора",
	name = "нет автора",
	progress = 60,
}) => {
	return (
		<View className="flex flex-col gap-2 w-[120px]">
			<Image
				source={require("../../assets/book.jpg")}
				style={{ width: 120, height: 175 }}
				className="rounded-xl"
				resizeMode="cover"
			/>
			<View className="flex flex-col gap-1 w-full">
				<ThemedText
					className="text-[12px] text-main-textSecond w-full"
					numberOfLines={1}
					ellipsizeMode="tail"
					weight="semibold"
				>
					{author}
				</ThemedText>
				<ThemedText
					className="text-[14px] whitespace-nowrap truncate text-white w-full"
					numberOfLines={1}
					ellipsizeMode="tail"
					weight="medium"
				>
					{name}
				</ThemedText>
			</View>
			<View className="flex flex-row gap-2 items-center">
				<ProgressCircleBar percent={50} />
				<ThemedText weight="medium" className="text-white">
					{progress}%
				</ThemedText>
			</View>
		</View>
	);
};
