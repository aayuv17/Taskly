import {
	FlatList,
	LayoutAnimation,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import { themeTokens } from "../theme-tokens";
import ShoppingListItem from "../components/ShoppingListItem/ShoppingListItem";
import { useEffect, useState } from "react";
import { TShoppingListItem } from "../interfaces";
import { getItemFromStorage, setItemInStorage } from "../utils/storage";

export default function App() {
	const [value, setValue] = useState("");
	const [shoppingList, setShoppingList] = useState<TShoppingListItem[]>([]);
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const initialize = async () => {
			const storedData = await getItemFromStorage();
			if (storedData) {
				setShoppingList(storedData);
			}
		};

		initialize();
	}, []);

	const handleSubmit = () => {
		if (value.length > 0) {
			const itemId = value + counter;
			const updatedShoppingList = [
				...shoppingList,
				{
					itemId: itemId,
					name: value,
					isCompleted: false,
				},
			];
			LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
			setShoppingList(updatedShoppingList);
			setValue("");
			setCounter(counter + 1);
			setItemInStorage(updatedShoppingList);
		}
	};

	const handleDelete = (id: string) => {
		const updatedShoppingList = shoppingList.filter(
			(item) => item.itemId !== id,
		);
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		setShoppingList(updatedShoppingList);
		setItemInStorage(updatedShoppingList);
	};

	const handleToggle = (id: string) => {
		const updatedShoppingList = shoppingList.map((item) => {
			return item.itemId === id
				? {
						...item,
						completedAtTimestamp: item.isCompleted ? undefined : Date.now(),
						isCompleted: !item.isCompleted,
					}
				: item;
		});
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		setShoppingList(updatedShoppingList);
		setItemInStorage(updatedShoppingList);
	};

	const sortItems = (): TShoppingListItem[] => {
		const sortedShoppingList = shoppingList.sort((a, b) => {
			const timestampA = a.completedAtTimestamp ?? 0;
			const timestampB = b.completedAtTimestamp ?? 0;
			return timestampA - timestampB;
		});
		return sortedShoppingList;
	};

	return (
		<View
			style={[
				StyleSheet.absoluteFill,
				styles.container,
				styles.contentContainer,
			]}>
			<TextInput
				placeholder="E.g. Coffee"
				style={styles.textInput}
				value={value}
				submitBehavior="submit"
				onChangeText={setValue}
				keyboardAppearance="light"
				keyboardType="default"
				returnKeyType="done"
				onSubmitEditing={handleSubmit}></TextInput>
			<FlatList
				data={sortItems()}
				contentContainerStyle={styles.itemList}
				keyExtractor={(item) => item.itemId}
				renderItem={({ item }) => (
					<ShoppingListItem
						key={item.itemId}
						itemId={item.itemId}
						name={item.name}
						isCompleted={item.isCompleted}
						completedAtTimestamp={item.completedAtTimestamp}
						onDelete={() => handleDelete(item.itemId)}
						onToggle={() => handleToggle(item.itemId)}
					/>
				)}
				ListEmptyComponent={() => {
					return (
						<View style={styles.emptyListContainer}>
							<Text>The list is currently empty</Text>
						</View>
					);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: themeTokens.color.white,
		paddingVertical: themeTokens.spacing.size_16,
	},
	contentContainer: {
		paddingHorizontal: themeTokens.spacing.size_16,
		paddingVertical: themeTokens.spacing.size_24,
	},
	textInput: {
		borderColor: themeTokens.color.gray,
		borderWidth: themeTokens.spacing.size_2,
		borderRadius: themeTokens.borderRadius.size_50,
		marginVertical: themeTokens.spacing.size_16,
		padding: themeTokens.spacing.size_8,
		backgroundColor: themeTokens.color.white,
		fontSize: themeTokens.fontSize.size_18,
	},
	itemList: {
		paddingVertical: themeTokens.spacing.size_8,
	},
	emptyListContainer: {
		alignItems: themeTokens.alignment.center,
	},
});
