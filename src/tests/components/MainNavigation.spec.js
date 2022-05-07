import { shallowMount } from '@vue/test-utils'
import MainNavigation from '../../components/MainNavigation'
import { BNav, BNavItem } from 'bootstrap-vue'

import 'jsdom-global'

jest.mock('../../router/index', () => ({
	routes: [
		{
			id: 0,
			path: '/',
			name: 'First',
			active: true
		},
		{
			id: 1,
			path: '/second',
			name: 'Second'
		},
		{
			id: 2,
			path: '/Third',
			name: 'Third',
			inMenu: true
		},
		{
			id: 3,
			path: '/four',
			name: 'Four',
			active: false
		},
		{
			id: 4,
			path: '/five',
			name: 'Five'
		},
		{
			id: 5,
			path: '/six',
			name: 'Six',
			inMenu: false
		}
	]
}))

describe('MainNavigation', () => {
	let wrapper = null

	beforeEach(() => {
		wrapper = shallowMount(MainNavigation, {
			stubs: {
				'b-nav': BNav,
				'b-nav-item': BNavItem
			}
		})
	})

	afterEach(() => {
		wrapper.destroy()
	})

	it('<nav> should be in component ', () => {
		expect(wrapper.find('nav').exists()).toBe(true)
	})

	it('Navigation items count should be 5', () => {
		expect(wrapper.findAllComponents(BNavItem)).toHaveLength(5)
	})

	it('All items without inMenu = false should be rendered', () => {
		let arrayOfValues = ['First', 'Second', 'Third', 'Four', 'Five']

		wrapper.findAllComponents(BNavItem).wrappers.forEach(item => {
			arrayOfValues = arrayOfValues.filter(value => value !== item.text())
		})

		expect(arrayOfValues).toHaveLength(0)
	})

	it('All items with active = true should be rendered with disabled', () => {
		const disabledComponents = wrapper.findAllComponents(
			'[aria-disabled="true"]'
		)
		expect(disabledComponents).toHaveLength(1)
	})
})
