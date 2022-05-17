/* eslint-disable */
import { isValueExists, isValueNotExists } from '../helpers'

import {
	getData as localStoragegetData,
	addProduct as localStorageAddProduct,
	removeProduct as localStorageRemoveProduct,
	clearAll as localStorageClearAll,
	getArrayAsData as localStorageGetArrayAsData
} from '../localstorage'
import API from '@/api'

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
		localStorageRemoveProduct(productId)

		if (isValueNotExists(this.store.cart, categoryName, productId)) {
			return false
		}

		if (!this.store.cart[categoryName]) {
			return false
		}

		this.store.cart[categoryName] = this.store.cart[categoryName].filter(
			item => item.id !== productId
		)
		return true
	}

	clearCart = () => {
		this.store.cart = {}
		localStorageClearAll()
		return true
	}
}

class Bridge extends Store {
	constructor(cartDefaultFunction) {
		super(cartDefaultFunction)
	}
	async getProducts() {
		const cart = JSON.parse(JSON.stringify(this.store.cart))
		const keys = Object.keys(this.store.cart)

		if (keys.length === 0) {
			return {}
		}

		keys.forEach(async key => {
			cart[key] = await API.getProductsByIdArray(key, cart[key])
		})

		return cart
	}
}

export default new Bridge(localStoragegetData)
