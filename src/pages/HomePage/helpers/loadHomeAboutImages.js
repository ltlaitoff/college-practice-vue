export const loadHomeAboutImages = data => {
	console.log(data)
	return data.map(item => {
		return {
			...item,
			img: require('../assets/' + item.img)
		}
	})
}
