import { View, Text, DimensionValue } from "react-native";

interface ProgressBarProps {
	progress: number;
	color?: string;
	backgroundColor?: string;
	height?: number;
	radius?: number;
	showPercentage?: boolean;
}

export const ProgressBar = ({
	progress,
	color = "#F03A52",
	backgroundColor = "#495057",
	height = 8,
	radius = 6,
	showPercentage = false,
}: ProgressBarProps) => {
	const percentage = Math.min(100, Math.max(0, progress));
	const fillWidth: DimensionValue = `${percentage}%`;

	return (
		<View className="items-center w-full">
			<View
				className="w-full overflow-hidden"
				style={{
					backgroundColor,
					height,
					borderRadius: radius,
				}}
			>
				<View
					style={{
						width: fillWidth,
						height: "100%",
						backgroundColor: color,
						borderRadius: radius,
					}}
				/>
			</View>

			{showPercentage && (
				<Text className="text-white text-[14px] mt-2">
					{Math.round(percentage)}%
				</Text>
			)}
		</View>
	);
};
