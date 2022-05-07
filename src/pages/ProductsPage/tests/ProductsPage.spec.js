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
				image: 'p1test'
			},
			{
				id: 1,
				name: 'product first',
				type: 'type2',
				image: 'p2test'
			}
		]
	},
	{
		id: 1,
		categoryShortName: 'Ornamental Sunflowers',
		categoryFullName: 'Ornamental Sunflowers',
		categoryMinifyName: 'ornamentalSunflowers',
		categoryImage: 'ornamentalSunflowers',
		disabled: true,
		products: []
	}
]

jest.mock('@/api', () => {
	return {
		getProducts: async () => DATA
	}
})

describe('AGFooter', () => {
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

	it('PageBG should be in component with src = "testbg" and imgAlt="productsBg"', () => {
		const page = wrapper.findComponent(PageBG)

		expect(page.exists()).toBe(true)
		expect(page.props().img).toBe('testbg')
		expect(page.props().imgAlt).toBe('productsBg')
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
				`products/${currentItemData.categoryMinifyName}`
			)
			expect(link.attributes()['aria-disabled']).toBe(
				currentItemData.disabled ? String(currentItemData.disabled) : undefined
			)
			expect(img.attributes().src).toBe(currentItemData.categoryImage)
			expect(img.attributes().alt).toBe(currentItemData.categoryMinifyName)
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
				`products/${currentItemData.categoryMinifyName}`
			)
			expect(link.attributes()['aria-disabled']).toBe(
				currentItemData.disabled ? String(currentItemData.disabled) : undefined
			)

			expect(title.text()).toBe(currentItemData.categoryShortName)
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
					`products/${currentItemData.categoryMinifyName}/${currentProduct.id}`
				)

				const groupItem = link.findComponent(BListGroupItem)

				expect(groupItem.exists()).toBe(true)
				expect(groupItem.text()).toBe(currentProduct.name)
			})
		})
	})
})
