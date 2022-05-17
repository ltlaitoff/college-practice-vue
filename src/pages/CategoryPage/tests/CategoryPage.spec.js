import VueRouter from 'vue-router'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import 'jsdom-global'
import ProductCategoryPage from '../CategoryPage'

import MainTitle from '@/components/MainTitle'
import PageBG from '@/components/PageBG'
import AGDivider from '@/components/AGDivider'

import {
	BCard,
	BCardBody,
	BCardGroup,
	BCardImg,
	BCardText,
	BCardTitle,
	BContainer,
	BImg,
	BLink
} from 'bootstrap-vue'

const DATA = {
	id: 0,
	name: {
		short: 'category1 short',
		full: 'category1 full',
		minify: 'category1minify'
	},
	image: 'image.jpg',
	icon: 'icon.svg',
	bg: 'bg.jpg',
	productBG: 'product-bg.svg',
	attentionIcon: 'attention-icon.svg',
	products: [
		{
			id: 0,
			name: 'Test1 Product1',
			type: 'Test1ProductType1',
			image: 'test-img',
			attentionText: 'attentionText',
			details: [
				{
					id: 0,
					title: 'detail1',
					text: 'detail1 text'
				},
				{
					id: 1,
					title: 'detail2',
					texts: ['detail1 text1', 'detail1 text2', 'detail1 text3']
				}
			]
		},
		{
			id: 1,
			name: 'Test1 Product2',
			type: 'Test1ProductType2',
			image: 'test-img',
			attentionText: 'attentionText'
		}
	]
}

jest.mock('@/api', () => {
	return {
		getCategoryByMinifyName: () => DATA
	}
})

jest.mock('../helpers/loadImages', () => {
	return {
		loadPageBG: value => value,
		loadProductsImages: (_, products) => products
	}
})

jest.mock('../data/pagesInfo', () => {
	return {
		category1minify: {
			component: jest.fn()
		}
	}
})

const localVue = createLocalVue()

localVue.use(VueRouter)

const routes = [
	{
		name: 'ProductCategoryPage',
		path: '/products/:category',
		component: ProductCategoryPage
	},
	{
		path: '*',
		redirect: '/products/category1minify'
	}
]
const router = new VueRouter({ routes })

describe('CategoryPage', () => {
	let wrapper = null

	beforeEach(() => {
		wrapper = shallowMount(ProductCategoryPage, {
			localVue,
			router,
			stubs: {
				'b-img': BImg,
				'b-container': BContainer,
				'b-card-group': BCardGroup,
				'b-card': BCard,
				'b-link': BLink,
				'b-card-img': BCardImg,
				'b-card-body': BCardBody,
				'b-card-title': BCardTitle,
				'b-card-text': BCardText
			}
		})
	})

	afterEach(() => {
		wrapper.destroy()
	})

	it('MainTitle should be in the component with visibility = false', () => {
		expect(wrapper.findComponent(MainTitle).exists()).toBe(true)
		expect(wrapper.findComponent(MainTitle).props().visibility).toBe(false)
	})

	it('PageBG should be in the component with src = "category1minify"', () => {
		const page = wrapper.findComponent(PageBG)

		expect(page.exists()).toBe(true)
		expect(page.props().img).toBe('category1minify')
	})

	it('AGDivider should be in the component', () => {
		expect(wrapper.findComponent(AGDivider).exists()).toBe(true)
	})

	it('b-container should be in the component', () => {
		expect(wrapper.findComponent(BContainer).exists()).toBe(true)
	})

	it('In b-container should be h2, AGDivider, b-card-group', () => {
		const container = wrapper.findComponent(BContainer)

		expect(container.find('h2').exists()).toBe(true)
		expect(container.findComponent(AGDivider).exists()).toBe(true)
		// FIXME: Add PageData
		expect(container.findComponent(BCardGroup).exists()).toBe(true)
	})

	it('b-cards count should be 2', () => {
		expect(wrapper.findAllComponents(BCard)).toHaveLength(2)
	})

	it('b-card should have b-link', () => {
		const cards = wrapper.findAllComponents(BCard)
		cards.wrappers.forEach(item => {
			expect(item.findComponent(BLink).exists()).toBe(true)

			const id = item.attributes()['data-testid']

			expect(item.findComponent(BLink).attributes().href).toBe(
				`/products/category1minify/${id}`
			)
		})
	})

	it('b-link should have b-card-img and b-card-body', () => {
		const cards = wrapper.findAllComponents(BCard)
		cards.wrappers.forEach(item => {
			const link = item.findComponent(BLink)

			const id = item.attributes()['data-testid']

			const itemData = DATA.products.filter(
				product => product.id === Number(id)
			)[0]

			const img = link.findComponent(BCardImg)

			expect(img.exists()).toBe(true)
			expect(link.findComponent(BCardBody).exists()).toBe(true)

			expect(img.attributes().src).toBe(itemData.image)
			expect(img.attributes().alt).toBe(itemData.name)
		})
	})

	it('b-card-body should have b-card-title and b-card-text', () => {
		const cards = wrapper.findAllComponents(BCard)
		cards.wrappers.forEach(item => {
			const id = item.attributes()['data-testid']

			const itemData = DATA.products.filter(
				product => product.id === Number(id)
			)[0]

			const title = item.findComponent(BCardTitle)
			const text = item.findComponent(BCardText)

			expect(title.exists()).toBe(true)
			expect(text.exists()).toBe(true)

			expect(title.text()).toBe(itemData.name)
			expect(text.text()).toBe(itemData.type)
		})
	})
})
