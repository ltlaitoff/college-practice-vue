import { shallowMount } from '@vue/test-utils'
import AGSocial from '@/components/AGSocial'
import 'jsdom-global'

import { BImg, BLink } from 'bootstrap-vue'

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

describe('AGSocial', () => {
	let wrapper = null

	beforeEach(() => {
		wrapper = shallowMount(AGSocial, {
			stubs: {
				'b-link': BLink,
				'b-img': BImg
			}
		})
	})

	afterEach(() => {
		wrapper.destroy()
	})

	it('Items count should be 5', () => {
		expect(wrapper.findAll('li.item')).toHaveLength(5)
	})

	it('All items should be have img inside', () => {
		wrapper.findAll('li.item').wrappers.forEach(item => {
			expect(item.findComponent('img').exists()).toBe(true)
		})
	})
})
