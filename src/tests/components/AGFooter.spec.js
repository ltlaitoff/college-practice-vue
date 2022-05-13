import { shallowMount } from '@vue/test-utils'
import AGFooter from '@/components/AGFooter'
import MainNavigation from '@/components/MainNavigation'
import AGSocial from '@/components/AGSocial'
import 'jsdom-global'

import { BContainer, BNavbar } from 'bootstrap-vue'

jest.mock('../../data/social', () => [
	{
		id: 0,
		name: 'facebook',
		icon: 'test-icon'
	},
	{
		id: 1,
		name: 'instagram',
		icon: 'test-icon'
	},
	{
		id: 2,
		name: 'youtube',
		icon: 'test-icon'
	},
	{
		id: 3,
		name: 'twitter',
		icon: 'test-icon'
	},
	{
		id: 4,
		name: 'facebook',
		icon: 'test-icon'
	}
])

describe('AGFooter', () => {
	let wrapper = null

	beforeEach(() => {
		wrapper = shallowMount(AGFooter, {
			stubs: {
				'b-container': BContainer,
				'b-navbar': BNavbar
			}
		})
	})

	afterEach(() => {
		wrapper.destroy()
	})

	it('footer component should have top div', () => {
		const footer = wrapper.find('footer')
		expect(footer.find('.top').exists()).toBe(true)
	})

	it('footer component should have bottom div', () => {
		const footer = wrapper.find('footer')
		expect(footer.find('.bottom').exists()).toBe(true)
	})

	it('Top should have b-container inside', () => {
		const top = wrapper.find('.top')

		expect(top.findComponent(BContainer).exists()).toBe(true)
	})

	it('BContainer should be have MainNavigation ', () => {
		const container = wrapper.findComponent(BContainer)

		expect(container.findComponent(MainNavigation).exists()).toBe(true)
	})

	it('BContainer should be have Social', () => {
		const container = wrapper.findComponent(BContainer)

		expect(container.findComponent(AGSocial).exists()).toBe(true)
	})

	it('bottom should have text "AGRIDERA SEEDS & AGRICULTURE LTD. © 2020"', () => {
		const bottom = wrapper.find('.bottom')
		const text = 'AGRIDERA SEEDS & AGRICULTURE LTD. © 2020'

		expect(bottom.text()).toBe(text)
	})
})
