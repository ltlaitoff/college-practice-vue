export const loadProductsImages = cart => {
	let newCart = {}

	Object.keys(cart).map(category => {
		newCart = {
			...newCart,
			[category]: cart[category].map(product => {
				return {
					...product,
					image: require('@/assets/images/category/' +
						category +
						'/products/' +
						product.image)
				}
			})
		}
	})

	return newCart
}
