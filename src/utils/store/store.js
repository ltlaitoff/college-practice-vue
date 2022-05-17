/* eslint-disable */
import { isValueExists, isValueNotExists } from '../helpers'

import {
	getData as localStoragegetData,
	addProduct as localStorageAddProduct,
	removeProduct as localStorageRemoveProduct,
	clearAll as localStorageClearAll,
	getArrayAsData as localStorageGetArrayAsData
} from '../localstorage'

class Store {
	constructor(cartDefaultFunction) {
		this.store = {
			cart: cartDefaultFunction()
		}
	}

	/* Cart */
	getCart() {
		return this.store.cart
	}

	setCart(cart) {
		this.store.cart = cart
	}

	addProductInCart(categoryName, productId) {
		localStorageAddProduct(categoryName, productId)

		if (isValueExists(this.store.cart, categoryName, productId)) {
			return false
		}

		if (this.store.cart[categoryName]) {
			this.store.cart[categoryName].push(productId)
			return true
		}

		this.store.cart[categoryName] = [productId]
		return true
	}

	removeProductFromCart = (categoryName, productId) => {
		localStorageRemoveProduct(categoryName, productId)

		if (isValueNotExists(this.store.cart, categoryName, productId)) {
			return false
		}

		if (!this.store.cart[categoryName]) {
			return false
		}

		this.store.cart[categoryName] = this.store.cart[categoryName].filter(
			item => item !== productId
		)

		return true
	}

	clearCart() {
		this.store.cart = {}
		localStorageClearAll()
		return true
	}

	checkProductInStore(categoryName, productId) {
		const products = this.store.cart[categoryName]

		if (!products || products.length === 0) {
			return false
		}

		return products.includes(productId)
	}
}

export default new Store(localStoragegetData)
