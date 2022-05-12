import { shallowMount } from '@vue/test-utils'
import MainActivities from '@/components/MainActivities'
import 'jsdom-global'

import { BCol, BContainer, BImg, BRow } from 'bootstrap-vue'

jest.mock('@/data/mainActivities', () => [
	{
		id: 0,
		title: 'test-title',
		text: 'test-text',
		icon: 'test-icon'
	},
	{
		id: 1,
		title: 'test-title',
		text: 'test-text',
		icon: 'test-icon'
	},
	{
		id: 2,
		title: 'test-title',
		text: 'test-text',
		icon: 'test-icon'
	}
])

jest.mock('@/helpers/loadImages', () => {
	return {
		loadMainActivitiesImages: value => value
	}
})

describe('MainActivities', () => {
	let wrapper = null

	beforeEach(() => {
		wrapper = shallowMount(MainActivities, {
			stubs: {
				'b-container': BContainer,
				'b-row': BRow,
				'b-col': BCol,
				'b-img': BImg
			},
			slots: {
				default: 'test slot data'
			}
		})
	})

	afterEach(() => {
		wrapper.destroy()
	})

	it('test slot data should be in the component', () => {
		expect(wrapper.text().includes('test slot data')).toBe(true)
	})

	it('MainActivities items count should be 3', () => {
		expect(wrapper.findAllComponents(BCol)).toHaveLength(3)
	})

	it('All items should include img', () => {
		wrapper.findAllComponents(BCol).wrappers.forEach(item => {
			expect(item.findComponent(BImg).exists()).toBe(true)
		})
	})

	it('All items should include title', () => {
		wrapper.findAllComponents(BCol).wrappers.forEach(item => {
			expect(item.findComponent('h3.item-title').exists()).toBe(true)
		})
	})

	it('All items should include divider', () => {
		wrapper.findAllComponents(BCol).wrappers.forEach(item => {
			expect(item.findComponent('.item-divider').exists()).toBe(true)
		})
	})

	it('All items should include text', () => {
		wrapper.findAllComponents(BCol).wrappers.forEach(item => {
			expect(item.findComponent('.item-text').exists()).toBe(true)
		})
	})
})
