import { products } from './apiData'

export const getProducts = async () => {
	return products
}

export const getCategoryById = async id => {
	return products.filter(item => item.id === id)[0]
}

export const getCategoryProductsById = async id => {
	return products.filter(item => item.id === id)[0].products
}

export const getCategoryProductTypesById = async id => {
	const categoryProducts = await getCategoryProductsById(id)

	return Array.from(new Set(categoryProducts.map(item => item.type)))
}