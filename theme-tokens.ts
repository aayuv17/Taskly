import { Styles } from "./constants";

export const themeTokens = {
	global: {
		fullDimension: Styles.fullDimension,
		flexRow: Styles.flexRow,
	},
	color: {
		white: "#FFFFFF",
		cerulean: "#007BA7",
		black: "#000000",
		lightGray: "#F6F3F5",
		beige: "#EDEDD4",
		gray: "#E5DCE2",
		red: "#EF3E36",
	},
	alignment: {
		center: Styles.alignment.center,
		flexStart: Styles.alignment.flexStart,
		spaceBetween: Styles.alignment.spaceBetween,
	},
	spacing: {
		size_1: 1,
		size_2: 2,
		size_4: 4,
		size_8: 8,
		size_16: 16,
		size_20: 20,
		size_24: 24,
		size_30: 30,
		size_36: 36,
	},
	fontSize: {
		size_16: 16,
		size_18: 18,
		size_20: 20,
	},
	textTransform: {
		uppercase: Styles.textTransform.upperCase,
	},
	borderRadius: {
		size_4: 4,
		size_50: 50,
	},
	textDecoration: {
		lineThrough: Styles.textDecoration.lineThrough,
	},
};
