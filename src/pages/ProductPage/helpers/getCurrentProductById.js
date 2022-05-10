export default (id, category) => {
	return category.products.filter(product => product.id === Number(id))[0]
}
