import { View, ViewProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FC } from "react";

type AvatarSize = "small" | "medium" | "large";

interface AvatarProps extends ViewProps {
	size?: AvatarSize;
}

const sizeMap = {
	small: 24,
	medium: 40,
	large: 128,
};

export const Avatar: FC<AvatarProps> = ({ size = "medium", ...props }) => {
	const pixelSize = sizeMap[size];
	const iconSize = pixelSize * 0.5;

	return (
		<View
			{...props}
			style={[
				{
					width: pixelSize,
					height: pixelSize,
					borderRadius: pixelSize / 2,
					backgroundColor: "#43464A",
					alignItems: "center",
					justifyContent: "center",
				},
				props.style,
			]}
		>
			<MaterialIcons name="person" size={iconSize} color={"#8E959C"} />
		</View>
	);
};
