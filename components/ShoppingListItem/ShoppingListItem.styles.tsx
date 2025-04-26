import { StyleSheet } from "react-native";
import { themeTokens } from "../../theme-tokens";

const LineItem = StyleSheet.create({
	lineItem: {
		paddingHorizontal: themeTokens.spacing.size_16,
		paddingVertical: themeTokens.spacing.size_16,
		fontSize: themeTokens.fontSize.size_20,
		alignItems: themeTokens.alignment.center,
		justifyContent: themeTokens.alignment.spaceBetween,
		flexDirection: themeTokens.global.flexRow,
		borderBottomColor: themeTokens.color.cerulean,
		borderBottomWidth: themeTokens.spacing.size_1,
	},
	lineItemCompleted: {
		borderBottomColor: themeTokens.color.gray,
		backgroundColor: themeTokens.color.lightGray,
	},
	lineItemText: {
		flexDirection: "row",
		gap: themeTokens.spacing.size_8,
	},
	itemText: {
		fontSize: themeTokens.fontSize.size_20,
	},
	itemTextCompleted: {
		textDecorationColor: themeTokens.color.gray,
		color: themeTokens.color.gray,
		textDecorationLine: themeTokens.textDecoration.lineThrough,
	},
});

export const ShoppingListItemStyles = {
	LINE_ITEM: LineItem,
};
