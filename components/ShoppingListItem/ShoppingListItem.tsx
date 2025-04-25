import { Alert, Text, TouchableOpacity, View } from "react-native";
import { ShoppingListItemProps } from "../../interfaces";
import { ShoppingListItemStyles } from "./ShoppingListItem.styles";

export default function ShoppingListItem(props: ShoppingListItemProps) {
	const handleDelete = () => {
		Alert.alert("Are you sure?", `${props.name} will be deleted for good.`, [
			{
				text: "Yes",
				onPress: () => console.log(`Deleting ${props.name}`),
				style: "destructive",
			},
			{
				text: "Cancel",
				style: "cancel",
			},
		]);
	};

	return (
		<View style={ShoppingListItemStyles.lineItem}>
			<Text>{props.name}</Text>
			<TouchableOpacity
				onPress={handleDelete}
				style={ShoppingListItemStyles.deleteButton}>
				<Text style={ShoppingListItemStyles.deleteButtonText}>Delete</Text>
			</TouchableOpacity>
		</View>
	);
}
