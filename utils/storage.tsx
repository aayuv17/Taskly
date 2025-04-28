import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { Storage } from "../constants";
import { TShoppingListItem } from "../interfaces";

const asyncStorage = useAsyncStorage(Storage.storageKey);

export const getItemFromStorage = async (): Promise<
	TShoppingListItem[] | null
> => {
	try {
		const data = await asyncStorage.getItem();
		return data ? JSON.parse(data) : null;
	} catch {
		return null;
	}
};

export const setItemInStorage = (value: TShoppingListItem[]) => {
	try {
		asyncStorage.setItem(JSON.stringify(value));
	} catch {
		return null;
	}
};
