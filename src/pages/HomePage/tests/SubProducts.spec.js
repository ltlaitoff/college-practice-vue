import { shallowMount } from '@vue/test-utils'
import SubProducts from '../components/SubProducts'
import 'jsdom-global'
import { BLink } from 'bootstrap-vue'
import InlineSvg from 'vue-inline-svg'

const DATA = [
	{
		id: 0,
		name: {
			short: 'category1short',
			full: 'category1full',
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
	},
	{
		id: 1,
		name: {
			short: 'category2 short',
			full: 'category2 full',
			minify: 'category2minify'
		},
		image: 'image.jpg',
		icon: 'test.svg',
		bg: 'bg.jpg',
		disabled: true,
		productBG: 'product-bg.svg',
		attentionIcon: 'attention-icon.svg',
		products: [
			{
				id: 0,
				name: 'Test2 Product1',
				type: 'Test2ProductType',
				attentionText: 'attentionText',
				image: 'test-img',
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
				name: 'Test2 Product2',
				type: 'Test2ProductType',
				image: 'test-img'
			}
		]
	}
]

jest.mock('@/helpers/loadImages', () => {
	return {
		loadCategoriesImages: value => value
	}
})

jest.mock('@/api', () => {
	return {
		getCategories: async () => DATA
	}
})

describe('SubProducts', () => {
	let wrapper = null

	beforeEach(() => {
		wrapper = shallowMount(SubProducts, {
			stubs: {
				'b-link': BLink
			}
		})
	})

	afterEach(() => {
		wrapper.destroy()
	})

	it('Items count should be 2', () => {
		expect(wrapper.findAll('li.item')).toHaveLength(2)
	})

	it('All items should have link', () => {
		const items = wrapper.findAll('li.item').wrappers

		expect(items[0].findComponent(BLink).exists()).toBe(true)
		expect(items[0].findComponent(BLink).attributes().href).toBe(
			'products/category1minify'
		)

		expect(items[1].findComponent(BLink).exists()).toBe(true)
		expect(items[1].findComponent(BLink).attributes().href).toBe(
			'products/category2minify'
		)
	})

	it('All items should have svg', () => {
		const items = wrapper.findAll('li.item').wrappers

		expect(items[0].findComponent(InlineSvg).exists()).toBe(true)
		expect(items[0].findComponent(InlineSvg).attributes().src).toBe('icon.svg')

		expect(items[1].findComponent(InlineSvg).exists()).toBe(true)
		expect(items[1].findComponent(InlineSvg).attributes().src).toBe('test.svg')
	})

	it('All items should have text', () => {
		const items = wrapper.findAll('li.item').wrappers

		expect(items[0].text()).toBe('category1short')
		expect(items[1].text()).toBe('category2 short')
	})
})
