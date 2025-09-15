import { View } from "react-native";
import { Header } from "components/index/header";
import { BookPreview } from "components/common/bookPreview";

export default function Home() {
	return (
		<View className=" bg-main-gray h-screen px-4">
			<Header />

			<View className="mt-10">
				<BookPreview
					author="Татьяна Даева"
					name="Дизайн обложки книги"
					progress={60}
				/>
			</View>
		</View>
	);
}
