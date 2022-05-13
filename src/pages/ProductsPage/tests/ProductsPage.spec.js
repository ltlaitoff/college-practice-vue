import { shallowMount } from '@vue/test-utils'
import ProductsPage from '../ProductsPage.vue'

import MainTitle from '@/components/MainTitle'
import PageBG from '@/components/PageBG'

import 'jsdom-global'

import {
	BCard,
	BCardBody,
	BCardGroup,
	BCardImg,
	BCardTitle,
	BContainer,
	BLink,
	BListGroup,
	BListGroupItem
} from 'bootstrap-vue'

jest.mock('@/helpers/getImages', () => {
	return {
		getProductsImages: value => value
	}
})

const DATA = [
	{
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
	},
	{
		id: 1,
		name: {
			short: 'category2 short',
			full: 'category2 full',
			minify: 'category2minify'
		},
		image: 'image.jpg',
		bg: 'bg.jpg',
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

jest.mock('@/api', () => {
	return {
		getCategories: async () => DATA
	}
})

jest.mock('@/helpers/loadImages', () => {
	return {
		loadCategoriesImages: value => value
	}
})

describe('ProductsPage', () => {
	let wrapper = null

	beforeEach(() => {
		wrapper = shallowMount(ProductsPage, {
			stubs: {
				'b-container': BContainer,
				'b-card-group': BCardGroup,
				'b-card': BCard,
				'b-link': BLink,
				'b-card-img': BCardImg,
				'b-card-body': BCardBody,
				'b-card-title': BCardTitle,
				'b-list-group': BListGroup,
				'b-list-group-item': BListGroupItem
			},
			computed: {
				getBGImage() {
					return 'testbg'
				}
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

	it('PageBG should be in component with src = "testbg"', () => {
		const page = wrapper.findComponent(PageBG)

		expect(page.exists()).toBe(true)
		expect(page.props().img).toBe('testbg')
	})

	it('container should be in component', () => {
		expect(wrapper.findComponent(BContainer).exists()).toBe(true)
	})

	it('b-card-group should be in container', () => {
		const container = wrapper.findComponent(BContainer)
		expect(container.findComponent(BCardGroup).exists()).toBe(true)
	})

	it('b-card should be in container in count 2', () => {
		const group = wrapper.findComponent(BCardGroup)
		expect(group.findAllComponents(BCard)).toHaveLength(2)
	})

	it('b-card should be have link with img', () => {
		const cards = wrapper.findAllComponents(BCard)
		cards.wrappers.forEach(item => {
			const link = item.findComponent(BLink)
			expect(link.exists()).toBe(true)

			const img = link.findComponent(BCardImg)
			expect(img.exists()).toBe(true)

			const currentItemData = DATA.filter(
				product => product.id === Number(item.attributes()['data-test-id'])
			)[0]

			expect(link.attributes().href).toBe(
				`products/${currentItemData.name.minify}`
			)
			expect(link.attributes()['aria-disabled']).toBe(
				currentItemData.disabled ? String(currentItemData.disabled) : undefined
			)
			expect(img.attributes().src).toBe(currentItemData.image)
			expect(img.attributes().alt).toBe(currentItemData.name.minify)
		})
	})

	it('b-card-body should be in all b-cards', () => {
		const cards = wrapper.findAllComponents(BCard)
		cards.wrappers.forEach(item => {
			expect(item.findComponent(BCardBody).exists()).toBe(true)
		})
	})

	it('b-card-body link should have title', () => {
		const cards = wrapper.findAllComponents(BCard)
		cards.wrappers.forEach(item => {
			const body = item.findComponent(BCardBody)
			const link = body.findComponent(BLink)

			expect(link.exists()).toBe(true)

			const title = link.findComponent(BCardTitle)
			expect(title.exists()).toBe(true)

			const currentItemData = DATA.filter(
				product => product.id === Number(item.attributes()['data-test-id'])
			)[0]

			expect(link.attributes().href).toBe(
				`products/${currentItemData.name.minify}`
			)
			expect(link.attributes()['aria-disabled']).toBe(
				currentItemData.disabled ? String(currentItemData.disabled) : undefined
			)

			expect(title.text()).toBe(currentItemData.name.short)
		})
	})

	it('b-card-body should have divider', () => {
		const cards = wrapper.findAllComponents(BCard)
		cards.wrappers.forEach(item => {
			const body = item.findComponent(BCardBody)

			expect(body.find('hr').exists()).toBe(true)
		})
	})

	it('b-card-body should have b-list-group with b-link with b-list-group-item', () => {
		const cards = wrapper.findAllComponents(BCard)
		cards.wrappers.forEach(item => {
			const body = item.findComponent(BCardBody)
			const list = body.findComponent(BListGroup)

			expect(list.exists()).toBe(true)

			const currentItemData = DATA.filter(
				product => product.id === Number(item.attributes()['data-test-id'])
			)[0]

			const links = list.findAllComponents(BLink)

			expect(links).toHaveLength(currentItemData.products.length)

			links.wrappers.forEach(link => {
				const currentProduct = currentItemData.products.filter(
					product => product.id === Number(link.attributes()['data-test-id'])
				)[0]

				expect(link.attributes().href).toBe(
					`products/${currentItemData.name.minify}/${currentProduct.id}`
				)

				const groupItem = link.findComponent(BListGroupItem)

				expect(groupItem.exists()).toBe(true)
				expect(groupItem.text()).toBe(currentProduct.name)
			})
		})
	})
})
