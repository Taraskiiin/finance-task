export const checkProfit = (price: number, change: number) => {
	if (price - change > 0) {
		return true;
	}

	return false;
};
