import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import { themeTokens } from "../theme-tokens";

export default function Layout() {
	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: themeTokens.color.red }}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Shopping List",
					tabBarIcon: ({ size, color }) => {
						return <Entypo name="list" size={size} color={color} />;
					},
				}}
			/>
			<Tabs.Screen
				name="counter"
				options={{
					title: "Counter",
					tabBarIcon: ({ color, size }) => {
						return <AntDesign name="clockcircleo" size={size} color={color} />;
					},
					headerShown: false,
				}}
			/>
		</Tabs>
	);
}
