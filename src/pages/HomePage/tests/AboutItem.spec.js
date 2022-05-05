import { shallowMount } from '@vue/test-utils'
import AboutItem from '../components/AboutItem'
import 'jsdom-global'

import { BCol, BContainer, BImg, BRow } from 'bootstrap-vue'

describe('AboutItem', () => {
	let wrapper = null

	beforeEach(() => {
		wrapper = shallowMount(AboutItem, {
			stubs: {
				'b-container': BContainer,
				'b-row': BRow,
				'b-col': BCol,
				'b-img': BImg
			},
			propsData: {
				title: 'TEST TITLE',
				text: 'TEST TEXT',
				img: 'TEST IMG'
			}
		})
	})

	afterEach(() => {
		wrapper.destroy()
	})

	it('AboutItem should have 2 col', () => {
		expect(wrapper.findAllComponents(BCol).wrappers).toHaveLength(2)
	})

	it('AboutItem should have img in second column', () => {
		const second = wrapper.findComponent('[data-testid="2"]')
		expect(second.findComponent(BImg).exists()).toBe(true)
	})

	it('AboutItem should have title in first column', () => {
		const first = wrapper.findComponent('[data-testid="1"]')

		expect(first.find('h3.title').text()).toBe('TEST TITLE')
	})

	it('AboutItem should have divider in first column', () => {
		const first = wrapper.findComponent('[data-testid="1"]')

		expect(first.find('.divider').exists()).toBe(true)
	})

	it('AboutItem should have text in first column', () => {
		const first = wrapper.findComponent('[data-testid="1"]')

		expect(first.find('.text').text()).toBe('TEST TEXT')
	})

	it('Cols should be reversed on reversed = true', () => {
		wrapper = shallowMount(AboutItem, {
			stubs: {
				'b-container': BContainer,
				'b-row': BRow,
				'b-col': BCol,
				'b-img': BImg
			},
			propsData: {
				title: 'TEST TITLE',
				text: 'TEST TEXT',
				img: 'TEST IMG',
				reversed: true
			}
		})

		expect(wrapper.findAllComponents(BCol).wrappers).toHaveLength(2)

		expect(wrapper.findComponent('.order-1').findComponent(BImg).exists()).toBe(
			true
		)

		expect(wrapper.findComponent('.order-2').findComponent(BImg).exists()).toBe(
			false
		)
	})
})
