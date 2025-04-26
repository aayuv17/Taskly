import { useRouter } from "expo-router";

import { Text, TouchableOpacity, View } from "react-native";

export default function Counter() {
	const router = useRouter();
	return (
		<View>
			<TouchableOpacity onPress={() => router.navigate("/counter/history")}>
				<Text>Go to History</Text>
			</TouchableOpacity>
		</View>
	);
}
