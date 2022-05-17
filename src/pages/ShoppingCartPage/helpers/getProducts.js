import API from '@/api'

export const getProducts = cart => {
	const newCart = {}
	const keys = Object.keys(cart)

	if (keys.length === 0) {
		return {}
	}

	keys.forEach(key => {
		newCart[key] = API.getProductsByIdArray(key, cart[key])
	})

	return newCart
}
