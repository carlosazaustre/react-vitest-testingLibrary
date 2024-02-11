export const changeOrderByPrice = (products) => {
	const sortedProducts = [...products].sort((a, b) => b.price - a.price);
	return sortedProducts;
};
