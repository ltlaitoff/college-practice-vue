const TomatoData = () => import('../components/TomatoData.vue')
const WheatData = () => import('../components/WheatData.vue')

export default {
	tomato: {
		bg: require('@/assets/images/tomatoCategoryBG.jpg'),
		component: TomatoData
	},
	ornamentalSunflowers: {
		bg: require('@/assets/images/ornamentalSunflowersCategoryBG.jpg')
	},
	wheat: {
		bg: require('@/assets/images/wheatCategoryBG.jpg'),
		component: WheatData
	}
}
