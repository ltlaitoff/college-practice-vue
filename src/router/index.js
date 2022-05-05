import Vue from 'vue'
import VueRouter from 'vue-router'

const HomePage = () =>
	import(/* webpackChunkName: "about" */ '@/pages/HomePage/HomePage.vue')
const CompanyProfile = () =>
	import(/* webpackChunkName: "about" */ '@/pages/CompanyProfilePage.vue')
const Products = () =>
	import(/* webpackChunkName: "about" */ '@/pages/ProductsPage.vue')
const Contact = () =>
	import(/* webpackChunkName: "about" */ '@/pages/ContactPage.vue')
const NotFound = () =>
	import(/* webpackChunkName: "about" */ '@/pages/NotFoundPage.vue')
Vue.use(VueRouter)

export const routes = [
	{
		id: 0,
		path: '/',
		name: 'Home',
		component: HomePage
	},
	{
		id: 1,
		path: '/company-profile',
		name: 'Company Profile',
		component: CompanyProfile
	},
	{
		id: 2,
		path: '/products',
		name: 'Products',
		component: Products
	},
	{
		id: 3,
		path: '/',
		name: 'R & D',
		component: () => {},
		active: false
	},
	{
		id: 4,
		path: '/contact',
		name: 'Contact',
		component: Contact
	},
	{
		id: 5,
		path: '*',
		name: 'Not found',
		component: NotFound,
		inMenu: false
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
