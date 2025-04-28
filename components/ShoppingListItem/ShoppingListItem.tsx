import { Alert, Pressable, Text, TouchableOpacity, View } from "react-native";
import { TShoppingListItemProps } from "../../interfaces";
import { ShoppingListItemStyles } from "./ShoppingListItem.styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { themeTokens } from "../../theme-tokens";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Animated, {
	Easing,
	FadeIn,
	FadeOut,
	LinearTransition,
	SlideInLeft,
} from "react-native-reanimated";

export default function ShoppingListItem(props: TShoppingListItemProps) {
	const handleDelete = () => {
		Alert.alert("Are you sure?", `${props.name} will be deleted for good.`, [
			{
				text: "Yes",
				onPress: () => props.onDelete(),
				style: "destructive",
			},
			{
				text: "Cancel",
				style: "cancel",
			},
		]);
	};

	return (
		<Animated.View
			layout={LinearTransition.springify()}
			entering={FadeIn}
			exiting={FadeOut}>
			<Pressable
				onPress={() => props.onToggle()}
				style={[
					ShoppingListItemStyles.LINE_ITEM.lineItem,
					props.isCompleted
						? ShoppingListItemStyles.LINE_ITEM.lineItemCompleted
						: undefined,
				]}>
				<View style={ShoppingListItemStyles.LINE_ITEM.lineItemText}>
					<EvilIcons
						name={props.isCompleted ? "check" : "chevron-right"}
						size={themeTokens.spacing.size_30}
						color={
							props.isCompleted
								? themeTokens.color.gray
								: themeTokens.color.cerulean
						}
					/>
					<Text
						style={[
							ShoppingListItemStyles.LINE_ITEM.itemText,
							props.isCompleted
								? ShoppingListItemStyles.LINE_ITEM.itemTextCompleted
								: undefined,
						]}>
						{props.name}
					</Text>
				</View>

				<TouchableOpacity onPress={handleDelete}>
					<AntDesign
						name="closecircle"
						size={themeTokens.spacing.size_24}
						color={
							props.isCompleted ? themeTokens.color.gray : themeTokens.color.red
						}
					/>
				</TouchableOpacity>
			</Pressable>
		</Animated.View>
	);
}
