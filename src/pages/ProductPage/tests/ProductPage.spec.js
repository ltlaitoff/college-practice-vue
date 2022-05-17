import VueRouter from 'vue-router'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import 'jsdom-global'
import InlineSvg from 'vue-inline-svg'
import ProductPage from '../ProductPage.vue'

import MainTitle from '@/components/MainTitle'

import { BCol, BContainer, BImg, BRow } from 'bootstrap-vue'

const DATA = {
	id: 0,
	name: {
		short: 'category1 short',
		full: 'category1 full',
		minify: 'category1 minify'
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

const getProductInfoById = id => {
	return DATA.products[0].details.filter(info => info.id === Number(id))[0]
}

jest.mock('../helpers/loadImages', () => {
	return {
		loadLeftArrow: () => 'left-arrow-icon',
		loadPDFIcon: () => 'pdf-icon',
		loadProductImages: (category, product) => product,
		loadCategoryImages: category => category
	}
})

jest.mock('@/api', () => {
	return {
		getCategoryByMinifyName: async () => DATA
	}
})

const localVue = createLocalVue()

localVue.use(VueRouter)

const routes = [
	{
		name: 'ProductCategoryPage',
		path: '/products/:category/:id',
		component: ProductPage
	},
	{
		path: '*',
		redirect: '/products/fisttest/0'
	}
]

const router = new VueRouter({ routes })

const mockDownloadAlert = jest.fn().mockImplementation(() => jest.fn())

describe('ProductPage', () => {
	let wrapper = null

	beforeEach(() => {
		wrapper = shallowMount(ProductPage, {
			localVue,
			router,
			stubs: {
				'b-container': BContainer,
				'b-img': BImg,
				'b-row': BRow,
				'b-col': BCol
			},
			computed: {
				downloadAlert: mockDownloadAlert
			}
		})
	})

	afterEach(() => {
		wrapper.destroy()
	})

	it('MainTitle should be in component with visibility = false', () => {
		expect(wrapper.findComponent(MainTitle).exists()).toBe(true)
		expect(wrapper.findComponent(MainTitle).props().visibility).toBe(false)
	})

	it('container should be in component', () => {
		expect(wrapper.findComponent(BContainer).exists()).toBe(true)
	})

	it('Back button should be in component', () => {
		const button = wrapper.find('button')

		expect(button.exists()).toBe(true)
		expect(button.findComponent(InlineSvg).exists()).toBe(true)
		expect(button.findComponent(InlineSvg).attributes().src).toBe(
			'left-arrow-icon'
		)

		expect(button.text()).toBe('Return back')
	})

	it('Product name and title should be in component', () => {
		const h2 = wrapper.find('h2')

		expect(h2.exists()).toBe(true)

		expect(h2.text()).toBe('Test1 Product1 Test1ProductType1')
	})

	it('Attention should be in component', () => {
		const attention = wrapper.find('[data-testid="attention"]')

		expect(attention.exists()).toBe(true)
		expect(attention.findComponent(BImg).exists()).toBe(true)
		expect(attention.findComponent(BImg).attributes().alt).not.toBe(undefined)

		expect(attention.text()).toBe('attentionText')
	})

	it('MainImage should be in component', async () => {
		const imageblock = wrapper.find('[data-testid="mainimage"]')

		expect(imageblock.exists()).toBe(true)
		expect(imageblock.findComponent(BImg).exists()).toBe(true)
		expect(imageblock.findComponent(BImg).attributes().src).toBe('test-img')
		expect(imageblock.findComponent(BImg).attributes().alt).not.toBe(undefined)
	})

	it('Two cards should be in component', () => {
		const cards = wrapper.findAll('[data-testid="card"]')

		expect(cards).toHaveLength(2)

		cards.wrappers.forEach(card => {
			const currentProduct = getProductInfoById(
				Number(card.attributes()['data-test-cardid'])
			)

			expect(card.find('h3').text()).toBe(currentProduct.title)
			expect(card.find('[data-testid="info-text"]').text()).toBe(
				currentProduct.text ? currentProduct.text : ''
			)
			if (currentProduct.texts) {
				expect(card.find('ul').exists()).toBe(true)
				expect(card.findAll('li')).toHaveLength(currentProduct.texts.length)
			}
		})
	})
})
