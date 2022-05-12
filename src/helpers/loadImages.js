const loadImage = (category, type) => {
	const field = category[type]

	if (!field) return null

	return require(`../assets/images/category/${category.name.minify}/${category[type]}`)
}

export const loadCategoriesImages = categories => {
	return categories.map(category => {
		return {
			...category,
			image: loadImage(category, 'image'),
			icon: loadImage(category, 'icon'),
			bg: loadImage(category, 'bg'),
			productBG: loadImage(category, 'productBG'),
			attentionIcon: loadImage(category, 'attentionIcon')
		}
	})
}
