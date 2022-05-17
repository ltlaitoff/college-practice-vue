export const isValueExists = (data, categoryName, value) => {
	if (!data[categoryName]) return false

	return data[categoryName].includes(value) !== false
}

export const isValueNotExists = (data, categoryName, value) => {
	return !isValueExists(data, categoryName, value)
}
