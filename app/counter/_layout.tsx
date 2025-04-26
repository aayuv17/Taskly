import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";
import { themeTokens } from "../../theme-tokens";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function Counter() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					title: "Counter",
					headerRight: () => {
						return (
							<Link href={"/counter/history"} asChild>
								<Pressable hitSlop={themeTokens.spacing.size_8}>
									<FontAwesome5
										name="history"
										size={themeTokens.spacing.size_24}
										color={themeTokens.color.black}
									/>
								</Pressable>
							</Link>
						);
					},
				}}
			/>
			<Stack.Screen
				name="history"
				options={{
					title: "History",
				}}
			/>
		</Stack>
	);
}
