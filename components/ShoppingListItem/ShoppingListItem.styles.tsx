import { StyleSheet } from "react-native";
import { themeTokens } from "../../theme-tokens";

export const ShoppingListItemStyles = StyleSheet.create({
	lineItem: {
		paddingHorizontal: themeTokens.spacing.size_16,
		paddingVertical: themeTokens.spacing.size_16,
		fontSize: themeTokens.spacing.size_20,
		alignItems: themeTokens.alignment.center,
		justifyContent: themeTokens.alignment.spaceBetween,
		flexDirection: themeTokens.global.flexRow,
		borderBottomColor: themeTokens.color.cerulean,
		borderBottomWidth: themeTokens.spacing.size_1,
	},
	deleteButton: {
		backgroundColor: themeTokens.color.black,
		padding: themeTokens.spacing.size_4,
		borderColor: themeTokens.color.black,
		borderWidth: themeTokens.spacing.size_1,
		borderRadius: themeTokens.borderRadius.size_4,
	},
	deleteButtonText: {
		color: themeTokens.color.white,
		letterSpacing: themeTokens.spacing.size_1,
		textTransform: themeTokens.textTransform.uppercase,
	},
});
