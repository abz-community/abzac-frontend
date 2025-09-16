import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";

const ProgressCircleBar = ({ progress }: { progress: number }) => {
	const radius = 6;
	const strokeWidth = 2.5;
	const diameter = (radius + strokeWidth / 2) * 2;

	const circumference = 2 * Math.PI * radius;
	const strokeDasharray = circumference;
	const strokeDashoffset = circumference - (progress / 100) * circumference;

	const rotation = -90;

	return (
		<View style={[styles.container, { width: diameter, height: diameter }]}>
			<Svg
				width={diameter}
				height={diameter}
				viewBox={`0 0 ${diameter} ${diameter}`}
			>
				<Circle
					cx={diameter / 2}
					cy={diameter / 2}
					r={radius}
					stroke="#e6e6e6"
					strokeWidth={strokeWidth}
					fill="none"
					rotation={rotation}
					originX={diameter / 2}
					originY={diameter / 2}
				/>
				<Circle
					cx={diameter / 2}
					cy={diameter / 2}
					r={radius}
					stroke="#F03A52"
					strokeWidth={strokeWidth}
					fill="none"
					strokeDasharray={strokeDasharray}
					strokeDashoffset={strokeDashoffset}
					strokeLinecap="round"
					rotation={rotation}
					originX={diameter / 2}
					originY={diameter / 2}
				/>
			</Svg>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
	},
});

export default ProgressCircleBar;
