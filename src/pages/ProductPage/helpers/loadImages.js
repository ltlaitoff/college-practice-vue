export const loadLeftArrow = () => {
	return require('@/assets/images/icons/arrow-left.svg')
}

export const loadPDFIcon = () => {
	return require('@/assets/images/icons/pdf.svg')
}

export const loadProductImages = (category, product) => {
	return {
		...product,
		image: product.image
			? require('@/assets/images/category/' +
					category +
					'/products/' +
					product.image)
			: null
	}
}

const loadCategoryImage = (category, type) => {
	const field = category[type]

	if (!field) return null

	console.log(
		'@/assets/images/category/' + category.name.minify + '/' + category[type]
	)

	return require('@/assets/images/category/' +
		category.name.minify +
		'/' +
		category[type])
}

export const loadCategoryImages = category => {
	return {
		...category,
		image: loadCategoryImage(category, 'image'),
		icon: loadCategoryImage(category, 'icon'),
		bg: loadCategoryImage(category, 'bg'),
		productBG: loadCategoryImage(category, 'productBG'),
		attentionIcon: loadCategoryImage(category, 'attentionIcon')
	}
}
