import { StyleSheet, View } from "react-native";
import { themeTokens } from "./theme-tokens";
import ShoppingListItem from "./components/ShoppingListItem/ShoppingListItem";

export default function App() {
	return (
		<View style={styles.container}>
			<View
				style={[
					StyleSheet.absoluteFill,
					{ backgroundColor: themeTokens.color.violet },
				]}
			/>
			<ShoppingListItem name="Coffee" />
			<ShoppingListItem name="Tea" />
			<ShoppingListItem name="Sugar" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: themeTokens.color.white,
		justifyContent: themeTokens.alignment.center,
	},
});
