import { FC } from "react";
import { View } from "react-native";
import { Image } from "react-native";
import { ThemedText } from "./text";
import ProgressCircleBar from "./progress";
import { Link } from "expo-router";

interface BookPreviewProps {
	author: string;
	name: string;
	progress: number;
	id: string;
	className?: string;
}

export const BookPreview: FC<BookPreviewProps> = ({
	author = "нет автора",
	name = "нет названия",
	progress = 60,
	className = "",
	id,
}) => {
	return (
		<Link href={`/books/${id}`}>
			<View className={`flex flex-col gap-2 w-[120px] ${className}`}>
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
					<ProgressCircleBar progress={progress} />
					<ThemedText weight="medium" className="text-white">
						{progress}%
					</ThemedText>
				</View>
			</View>
		</Link>
	);
};
