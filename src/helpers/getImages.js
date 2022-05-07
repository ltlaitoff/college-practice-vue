export default (products, { prefix, suffix }) => {
	if (prefix === undefined) prefix = ''
	if (suffix === undefined) suffix = ''

	return products.map(item => {
		return {
			...item,
			categoryImage: require(`@/assets/images/${prefix}${item.categoryImage}${suffix}.jpg`)
		}
	})
}
