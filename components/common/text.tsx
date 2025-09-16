import { Text as DefaultText, TextProps } from "react-native";
import { useColorScheme } from "react-native";

export type ThemedTextProps = TextProps & {
	lightColor?: string;
	darkColor?: string;
	className?: string;
	weight?: "regular" | "medium" | "semibold" | "bold" | "extrabold" | "black";
	italic?: boolean;
};

export function ThemedText({
	style,
	lightColor,
	darkColor,
	className,
	weight = "medium",
	italic = false,
	...rest
}: ThemedTextProps) {
	const colorScheme = useColorScheme();
	const color = colorScheme === "dark" ? darkColor : lightColor;

	const getFontFamily = () => {
		if (italic) {
			switch (weight) {
				case "regular":
					return "Rubik-Italic";
				case "medium":
					return "Rubik-MediumItalic";
				case "semibold":
					return "Rubik-SemiBoldItalic";
				case "bold":
					return "Rubik-BoldItalic";
				case "extrabold":
					return "Rubik-ExtraBoldItalic";
				case "black":
					return "Rubik-BlackItalic";
				default:
					return "Rubik-Italic";
			}
		} else {
			switch (weight) {
				case "regular":
					return "Rubik-Regular";
				case "medium":
					return "Rubik-Medium";
				case "semibold":
					return "Rubik-SemiBold";
				case "bold":
					return "Rubik-Bold";
				case "extrabold":
					return "Rubik-ExtraBold";
				case "black":
					return "Rubik-Black";
				default:
					return "Rubik-Regular";
			}
		}
	};

	return (
		<DefaultText
			style={[{ fontFamily: getFontFamily() }, color ? { color } : null, style]}
			className={className}
			{...rest}
		/>
	);
}
