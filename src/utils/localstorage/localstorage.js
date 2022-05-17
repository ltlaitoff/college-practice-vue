import { isValueExists, isValueNotExists } from '../helpers'
import { validation } from './validation'

const LOCAL_STORAGE_KEY = 'agridera'

export const getData = () => {
	const localStorageData = localStorage.getItem(LOCAL_STORAGE_KEY)

	return localStorageData ? JSON.parse(localStorageData) : {}
}

const setData = data => {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))

	return true
}

export const addProduct = (categoryName, productId) => {
	validation(categoryName, productId)

	const data = getData()

	if (isValueExists(data, categoryName, productId)) {
		return false
	}

	if (data[categoryName] !== undefined) {
		data[categoryName].push(productId)
	} else {
		data[categoryName] = [productId]
	}

	return setData(data)
}

export const removeProduct = (categoryName, productId) => {
	validation(categoryName, productId)

	let data = getData()

	if (isValueNotExists(data, categoryName, productId)) {
		return false
	}

	data[categoryName] = data[categoryName].filter(id => id !== productId)

	return setData(data)
}

export const clearAll = () => {
	localStorage.clear()
}
