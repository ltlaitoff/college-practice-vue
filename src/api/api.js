import { categories } from './apiData'

export const getCategories = async () => {
	return categories
}

const findInCategory = (field, value) => {
	return categories.find(category => category[field] === value)
}

const findCategoryName = (type, name) => {
	return categories.find(category => category.name[type] === name)
}

export const getCategoryById = async id => {
	return findInCategory('id', id)
}

export const getCategoryByShortName = async shortName => {
	return findCategoryName('short', shortName)
}

export const getCategoryByFullName = async fullName => {
	return findCategoryName('full', fullName)
}

export const getCategoryByMinifyName = async minifyName => {
	return findCategoryName('minify', minifyName)
}

/* products */
export const getCategoryProductsById = async id => {
	return (await getCategoryById(id))?.products
}

export const getCategoryProductsByShortName = async shortName => {
	return (await getCategoryByShortName(shortName))?.products
}

export const getCategoryProductsByFullName = async fullName => {
	return (await getCategoryByFullName(fullName))?.products
}

export const getCategoryProductsByMinifyName = async minifyName => {
	return (await getCategoryByMinifyName(minifyName))?.products
}

/* types */
const getProductsTypesFromCategoryProducts = products => {
	return Array.from(new Set(products.map(item => item.type)))
}

export const getCategoryProductsTypesById = async id => {
	const categoryProducts = await getCategoryProductsById(id)

	return getProductsTypesFromCategoryProducts(categoryProducts)
}

export const getCategoryProductsTypesByShortName = async shortName => {
	const categoryProducts = await getCategoryProductsByShortName(shortName)

	return getProductsTypesFromCategoryProducts(categoryProducts)
}

export const getCategoryProductsTypesFullName = async fullName => {
	const categoryProducts = await getCategoryProductsByFullName(fullName)

	return getProductsTypesFromCategoryProducts(categoryProducts)
}

export const getCategoryProductsTypesMinifyName = async minifyName => {
	const categoryProducts = await getCategoryProductsByMinifyName(minifyName)

	return getProductsTypesFromCategoryProducts(categoryProducts)
}
