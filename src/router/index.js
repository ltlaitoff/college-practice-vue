import Vue from 'vue'
import VueRouter from 'vue-router'

const HomePage = () =>
	import(/* webpackChunkName: "about" */ '@/pages/HomePage.vue')
const AboutPage = () =>
	import(/* webpackChunkName: "about" */ '@/pages/AboutPage.vue')

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomePage
	},
	{
		path: '/about',
		name: 'about',
		component: AboutPage
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
