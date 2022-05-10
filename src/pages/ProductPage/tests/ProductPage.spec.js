import VueRouter from 'vue-router'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import 'jsdom-global'

import ProductPage from '../ProductPage.vue'

import MainTitle from '@/components/MainTitle'

import { BCol, BContainer, BImg, BRow } from 'bootstrap-vue'

const DATA = {
	id: 0,
	categoryShortName: 'First test short',
	categoryFullName: 'First test full',
	categoryMinifyName: 'fisttest',
	categoryImage: 'fisttest',
	disabled: false,
	products: [
		{
			id: 0,
			name: 'product first',
			type: 'type',
			image: 'p1test',
			attentionText: 'attentionText',
			info: [
				{
					id: 0,
					title: 'info1',
					text: 'info1text'
				},
				{
					id: 1,
					title: 'info2',
					texts: ['info21', 'info22']
				}
			]
		}
	]
}

const getProductInfoById = id => {
	return DATA.products[0].info.filter(info => info.id === Number(id))[0]
}

jest.mock('../helpers/getImages', () => {
	return {
		getCategoryImages: value => value,
		getProductImages: value => value
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
		expect(button.find('img').exists()).toBe(true)

		expect(button.find('img').attributes().alt).not.toBe(undefined)

		expect(button.text()).toBe('Return back')
	})

	it('Product name and title should be in component', () => {
		const h2 = wrapper.find('h2')

		expect(h2.exists()).toBe(true)
		expect(h2.text()).toBe('product first type')
	})

	it('Attention should be in component', () => {
		const attention = wrapper.find('[data-testid="attention"]')

		expect(attention.exists()).toBe(true)
		expect(attention.find('img').exists()).toBe(true)
		expect(attention.find('img').attributes().alt).not.toBe(undefined)

		expect(attention.text()).toBe('attentionText')
	})

	it('MainImage should be in component', async () => {
		const imageblock = wrapper.find('[data-testid="mainimage"]')

		expect(imageblock.exists()).toBe(true)
		expect(imageblock.find('img').exists()).toBe(true)
		expect(imageblock.find('img').attributes().alt).not.toBe(undefined)

		const button = imageblock.find('button')
		expect(button.exists()).toBe(true)
		expect(button.find('img').exists()).toBe(true)
		expect(button.find('img').attributes().alt).not.toBe(undefined)

		await button.trigger('click')

		expect(mockDownloadAlert).toHaveBeenCalled()
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
