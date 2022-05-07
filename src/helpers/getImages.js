export const getProductsImages = products => {
	return products.map(item => {
		return {
			...item,
			categoryImage: require(`@/assets/images/${item.categoryImage}CategoryImage.jpg`)
		}
	})
}

export const getCategoryProductsImages = products => {
	return products.map(item => {
		return {
			...item,
			image: require(`@/assets/images/${item.image}.jpg`)
		}
	})
}
