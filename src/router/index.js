/* eslint-disable*/
import Vue from 'vue'
import VueRouter from 'vue-router'

const HomePage = () => import(/* webpackChunkName: "home" */ '@/pages/HomePage')
const CompanyProfile = () =>
	import(
		/* webpackChunkName: "company-profile" */ '@/pages/CompanyProfilePage.vue'
	)
const Products = () =>
	import(/* webpackChunkName: "products" */ '@/pages/ProductsPage')
const Category = () =>
	import(/* webpackChunkName: "category" */ '@/pages/CategoryPage')
const Product = () =>
	import(/* webpackChunkName: "product" */ '@/pages/ProductPage')
const ShoppingCart = () =>
	import(/* webpackChunkName: "shopping-card" */ '@/pages/ShoppingCartPage')
const Contact = () =>
	import(/* webpackChunkName: "contacnt" */ '@/pages/ContactPage')
const NotFound = () =>
	import(/* webpackChunkName: "not-found" */ '@/pages/NotFoundPage.vue')

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
		path: '/products/:category',
		name: 'CategoryPage',
		component: Category,
		inMenu: false
	},
	{
		id: 4,
		path: '/products/:category/:id',
		name: 'ProductPage',
		component: Product,
		inMenu: false
	},
	{
		id: 5,
		path: '/',
		name: 'R & D',
		redirect: '/',
		active: false
	},
	{
		id: 6,
		path: '/cart',
		name: 'Cart',
		component: ShoppingCart
	},
	{
		id: 7,
		path: '/contact',
		name: 'Contact',
		component: Contact
	},
	{
		id: 8,
		path: '*',
		name: 'Not found',
		component: NotFound,
		inMenu: false
	}
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router
