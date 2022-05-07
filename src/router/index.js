import Vue from 'vue'
import VueRouter from 'vue-router'

const HomePage = () => import('@/pages/HomePage')
const CompanyProfile = () => import('@/pages/CompanyProfilePage.vue')
const Products = () => import('@/pages/ProductsPage')
const ProductCategory = () => import('@/pages/ProductCategoryPage')
const Contact = () => import('@/pages/ContactPage.vue')
const NotFound = () => import('@/pages/NotFoundPage.vue')

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
		name: 'ProductCategoryPage',
		component: ProductCategory,
		inMenu: false
	},
	{
		id: 4,
		path: '/',
		name: 'R & D',
		component: () => {},
		active: false
	},
	{
		id: 5,
		path: '/contact',
		name: 'Contact',
		component: Contact
	},
	{
		id: 6,
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
