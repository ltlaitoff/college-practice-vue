export const loadPageBG = categoryMinifyName => {
	return require('@/assets/images/category/' + categoryMinifyName + '/bg.jpg')
}

export const loadProductsImages = (category, products) => {
	return products.map(product => ({
		...product,
		image: require('@/assets/images/category/' +
			category +
			'/products/' +
			product.image)
	}))
}
