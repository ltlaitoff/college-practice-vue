const checkFieldOnType = (value, name, type) => {
	if (typeof value !== type) {
		throw new Error(`${name} must be a number`)
	}
	return true
}

const checkFieldOnNumber = (value, name) => {
	return checkFieldOnType(value, name, 'number')
}

const checkFieldOnString = (value, name) => {
	return checkFieldOnType(value, name, 'string')
}

export const validation = (categoryName, productId) => {
	checkFieldOnString(categoryName, 'categoryName')
	checkFieldOnNumber(productId, 'productId')
}
