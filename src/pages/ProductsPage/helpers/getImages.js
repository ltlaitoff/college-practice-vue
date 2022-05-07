export default products => {
	return products.map(item => {
		return {
			...item,
			categoryImage: require(`@/assets/images/${item.categoryImage}CategoryImage.jpg`)
		}
	})
}
