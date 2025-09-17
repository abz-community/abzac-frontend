import {
	FlatList,
	View,
	Dimensions,
	TouchableOpacity,
	NativeSyntheticEvent,
	NativeScrollEvent,
} from "react-native";

import { ThemedText } from "components/common/text";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SparklesIcon } from "assets/icons-components/sparkles";
import { useState, useRef } from "react";
import { SwipeButton } from "components/common/swipeButton";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

function estimateChunkSize(
	fontSize = 18,
	lineHeight = 24,
	padding = 32,
	headerHeight = 60,
) {
	const availableHeight = SCREEN_HEIGHT - headerHeight - padding;

	const linesPerScreen = Math.floor(availableHeight / lineHeight);

	const charsPerLine = Math.floor(SCREEN_WIDTH / (fontSize * 1));

	return linesPerScreen * charsPerLine;
}

function splitTextIntoChunks(text: string, chunkSize: number = 1000) {
	const chunks: string[] = [];
	let start = 0;

	while (start < text.length) {
		let end = Math.min(start + chunkSize, text.length);

		if (end < text.length) {
			const lastSpace = text.lastIndexOf(" ", end);
			if (lastSpace > start) {
				end = lastSpace;
			}
		}

		chunks.push(text.slice(start, end).trim());
		start = end;
	}

	return chunks;
}

const text =
	"Ветер шёлестел в верхушках сосен, словно кто-то невидимый играл на струнах огромной арфы. Дорога, покрытая сухой хвоей, вела к старому дому, который давно покинули хозяева. Окна были забиты досками, крыша кое-где провалилась, но дом продолжал стоять, будто упрямо сопротивляясь времени. Каждый шаг по тропинке отдавался лёгким эхом в пустоте леса, и казалось, что сам воздух затаил дыхание. Алексей остановился у ворот и прислушался. Тишина. Только где-то вдалеке кричала одинокая птица. Он толкнул створку, и она с протяжным скрипом открылась. Во дворе росли бурьяны, а посреди них виднелась старая колодезная журавль-колонка, покосившаяся, но всё ещё державшаяся на честном слове. Дом манил и пугал одновременно. Алексей шагнул внутрь, и запах сырости и пыли ударил в нос. Солнечные лучи пробивались сквозь щели и выхватывали из темноты обломки мебели, поломанные стулья, пожелтевшие газеты. На стене висели часы без стрелок — будто время здесь остановилось много лет назад. Он сделал ещё шаг и заметил на полу детскую игрушку — маленького деревянного коня. Алексей наклонился, поднял его и провёл пальцем по гладкой поверхности. Сколько лет прошло с тех пор, как эта игрушка радовала ребёнка? Кто был этот ребёнок, где он сейчас?";

export default function Reader() {
	const router = useRouter();
	const [isSwiping, setIsSwiping] = useState(false);
	const [isReaded, setIsReaded] = useState(false);

	const flatListRef = useRef<FlatList>(null);

	const chunkSize = estimateChunkSize(18, 26);
	const chunks = splitTextIntoChunks(text, chunkSize);

	const [currentIndex, setCurrentIndex] = useState(0);

	const onViewableItemsChanged = ({ viewableItems }: any) => {
		if (viewableItems.length > 0) {
			setCurrentIndex(viewableItems[0].index);
		}
	};

	const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
		const offsetY = e.nativeEvent.contentOffset.y;
		const maxOffset = (chunks.length - 1) * SCREEN_HEIGHT;
		if (currentIndex === chunks.length - 1 && offsetY > maxOffset) {
			flatListRef.current?.scrollToOffset({
				offset: maxOffset,
				animated: false,
			});
		}
	};

	return (
		<View className="flex-1 bg-main-gray flex-row">
			<View style={{ flex: 1 }}>
				<View className="p-4 flex flex-row items-center justify-between">
					<TouchableOpacity className="w-8 h-8 flex items-center justify-center bg-main-brand rounded-[8px] ">
						<SparklesIcon size={22} />
					</TouchableOpacity>

					<ThemedText className="text-white text-[16px]" weight="bold">
						Название книги
					</ThemedText>
					<TouchableOpacity onPress={() => router.back()}>
						<MaterialIcons name="close" size={32} color={"white"} />
					</TouchableOpacity>
				</View>

				<View className="flex flex-row">
					<View className="items-center justify-center px-2">
						{chunks.map((_, idx) => (
							<View
								key={`dot-${idx + 1}`}
								style={{
									width: 6,
									height: 6,
									borderRadius: 4,
									marginVertical: 4,
									backgroundColor: idx === currentIndex ? "#F03A52" : "#606364",
								}}
							/>
						))}
					</View>
					<FlatList
						ref={flatListRef}
						data={chunks}
						renderItem={({ item, index }) => (
							<View style={{ height: SCREEN_HEIGHT }} className="pr-4">
								<ThemedText className="text-white text-[18px] leading-relaxed border border-[#3E4043] p-5 rounded-[24px]">
									{item}
								</ThemedText>
								{index === chunks.length - 1 && isReaded === false && (
									<SwipeButton
										className="mt-6"
										text="Отметить прочитанным"
										onSwipe={() => setIsReaded(true)}
										onPanResponderMove={() => setIsSwiping(true)}
										onPanResponderRelease={() => setIsSwiping(false)}
									/>
								)}
								{index === chunks.length - 1 && isReaded === true && (
									<TouchableOpacity className="w-full h-[64px] bg-main-brand rounded-full mt-6 flex items-center justify-center">
										<ThemedText className="text-white text-[16px]">
											Следующий абзац
										</ThemedText>
									</TouchableOpacity>
								)}
							</View>
						)}
						keyExtractor={(_, index) => `chunk-${index}`}
						pagingEnabled
						showsVerticalScrollIndicator={false}
						snapToInterval={SCREEN_HEIGHT}
						decelerationRate="fast"
						onViewableItemsChanged={onViewableItemsChanged}
						viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
						onScroll={handleScroll}
						scrollEventThrottle={16}
						scrollEnabled={!isSwiping}
					/>
				</View>
			</View>
		</View>
	);
}
