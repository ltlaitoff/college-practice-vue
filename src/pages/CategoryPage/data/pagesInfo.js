const TomatoData = () => import('../components/TomatoData.vue')
const WheatData = () => import('../components/WheatData.vue')

export default {
	tomato: {
		component: TomatoData
	},
	ornamentalSunflowers: {},
	wheat: {
		component: WheatData
	},
	pineapple: {}
}
