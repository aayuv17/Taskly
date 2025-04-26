export type TShoppingListItem = {
	itemId: string;
	name: string;
	isCompleted: boolean;
	completedAtTimestamp?: number;
};

export type TShoppingListItemProps = TShoppingListItem & {
	onDelete(): void;
	onToggle(): void;
};
