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

	async getCategories() {
		return await this.data
	}

	async #findInCategory(field, value) {
		const categories = await this.getCategories()

		return categories.find(category => category[field] === value)
	}

	async #findCategoryName(type, name) {
		const categories = await this.getCategories()

		return categories.find(category => category.name[type] === name)
	}

	async getCategoryById(id) {
		return await this.#findInCategory('id', id)
	}

	async getCategoryByShortName(shortName) {
		return await this.#findCategoryName('short', shortName)
	}

	async getCategoryByFullName(fullName) {
		return await this.#findCategoryName('full', fullName)
	}

	async getCategoryByMinifyName(minifyName) {
		return await this.#findCategoryName('minify', minifyName)
	}

	/* products */
	async getCategoryProductsById(id) {
		return (await this.getCategoryById(id))?.products
	}

	async getCategoryProductsByShortName(shortName) {
		return (await this.getCategoryByShortName(shortName))?.products
	}

	async getCategoryProductsByFullName(fullName) {
		return (await this.getCategoryByFullName(fullName))?.products
	}

	async getCategoryProductsByMinifyName(minifyName) {
		return (await this.getCategoryByMinifyName(minifyName))?.products
	}

	/* types */
	#getProductsTypesFromCategoryProducts = products => {
		return Array.from(new Set(products.map(item => item.type)))
	}

	async getCategoryProductsTypesById(id) {
		const categoryProducts = await this.getCategoryProductsById(id)

		return this.#getProductsTypesFromCategoryProducts(categoryProducts)
	}

	async getCategoryProductsTypesByShortName(shortName) {
		const categoryProducts = await this.getCategoryProductsByShortName(
			shortName
		)

		return this.#getProductsTypesFromCategoryProducts(categoryProducts)
	}

	async getCategoryProductsTypesFullName(fullName) {
		const categoryProducts = await this.getCategoryProductsByFullName(fullName)

		return this.#getProductsTypesFromCategoryProducts(categoryProducts)
	}

	async getCategoryProductsTypesMinifyName(minifyName) {
		const categoryProducts = await this.getCategoryProductsByMinifyName(
			minifyName
		)

		return this.#getProductsTypesFromCategoryProducts(categoryProducts)
	}
}

export default new APIMethods(getAPIData)
