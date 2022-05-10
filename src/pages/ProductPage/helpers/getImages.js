export const getCategoryImages = category => {
	const attentionIcon = category.attentionIcon
		? require(`@/assets/icons/${category.attentionIcon}`)
		: null

	const productBG = category.productBG
		? require(`@/assets/icons/${category.productBG}`)
		: null

	return {
		...category,
		attentionIcon: attentionIcon,
		productBG: productBG
	}
}

export const getProductImages = product => {
	const image = product.image
		? require(`@/assets/images/${product.image}.jpg`)
		: null

	return {
		...product,
		image: image
	}
}
