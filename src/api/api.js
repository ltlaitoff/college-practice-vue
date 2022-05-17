import { categories } from './apiData'

const getAPIData = async () => {
	return categories
}

class APIMethods {
	constructor(getDataFunc) {
		this.getDataFunc = getDataFunc
		this.getDataFunc().then(value => {
			this.data = value
		})
	}

	async updateDataFromAPI() {
		this.getDataFunc().then(value => {
			this.data = value
		})
	}

	getCategories() {
		return this.data
	}

	#findInCategory(field, value) {
		const categories = this.getCategories()

		return categories.find(category => category[field] === value)
	}

	#findCategoryName(type, name) {
		const categories = this.getCategories()

		return categories.find(category => category.name[type] === name)
	}

	getCategoryById(id) {
		return this.#findInCategory('id', id)
	}

	getCategoryByShortName(shortName) {
		return this.#findCategoryName('short', shortName)
	}

	getCategoryByFullName(fullName) {
		return this.#findCategoryName('full', fullName)
	}

	getCategoryByMinifyName(minifyName) {
		return this.#findCategoryName('minify', minifyName)
	}

	/* products */
	getCategoryProductsById(id) {
		return this.getCategoryById(id)?.products
	}

	getCategoryProductsByShortName(shortName) {
		return this.getCategoryByShortName(shortName)?.products
	}

	getCategoryProductsByFullName(fullName) {
		return this.getCategoryByFullName(fullName)?.products
	}

	getCategoryProductsByMinifyName(minifyName) {
		return this.getCategoryByMinifyName(minifyName)?.products
	}

	/* types */
	#getProductsTypesFromCategoryProducts = products => {
		return Array.from(new Set(products.map(item => item.type)))
	}

	getCategoryProductsTypesById(id) {
		const categoryProducts = this.getCategoryProductsById(id)

		return this.#getProductsTypesFromCategoryProducts(categoryProducts)
	}

	getCategoryProductsTypesByShortName(shortName) {
		const categoryProducts = this.getCategoryProductsByShortName(shortName)

		return this.#getProductsTypesFromCategoryProducts(categoryProducts)
	}

	getCategoryProductsTypesFullName(fullName) {
		const categoryProducts = this.getCategoryProductsByFullName(fullName)

		return this.#getProductsTypesFromCategoryProducts(categoryProducts)
	}

	getCategoryProductsTypesMinifyName(minifyName) {
		const categoryProducts = this.getCategoryProductsByMinifyName(minifyName)

		return this.#getProductsTypesFromCategoryProducts(categoryProducts)
	}

	getProductById(categoryMinifyName, id) {
		const products = this.getCategoryProductsByMinifyName(categoryMinifyName)

		return products.find(product => product.id === id)
	}

	getProductsByIdArray(categoryMinifyName, idArray) {
		const products = this.getCategoryProductsByMinifyName(categoryMinifyName)

		return products.filter(product => idArray.includes(product.id))
	}
}

export default new APIMethods(getAPIData)
