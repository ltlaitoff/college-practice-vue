const loadCategoryImage = (category, type) => {
	const field = category[type]

	if (!field) return null

	return require(`../assets/images/category/${category.name.minify}/${category[type]}`)
}

export const loadCategoriesImages = categories => {
	return categories.map(category => {
		return {
			...category,
			image: loadCategoryImage(category, 'image'),
			icon: loadCategoryImage(category, 'icon'),
			bg: loadCategoryImage(category, 'bg'),
			productBG: loadCategoryImage(category, 'productBG'),
			attentionIcon: loadCategoryImage(category, 'attentionIcon')
		}
	})
}

export const loadMainActivitiesImages = data => {
	return data.map(item => {
		return {
			...item,
			icon: require('@/assets/images/seeds/' + item.icon)
		}
	})
}

export const loadSocialIcons = data => {
	return data.map(item => {
		return {
			...item,
			icon: require('@/assets/images/icons/' + item.icon)
		}
	})
}
