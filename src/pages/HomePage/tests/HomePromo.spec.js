import { shallowMount } from '@vue/test-utils'
import HomePromo from '../components/HomePromo'
import MainTitle from '@/components/MainTitle'
import 'jsdom-global'

import { BButton } from 'bootstrap-vue'

describe('HomePromo', () => {
	let wrapper = null

	beforeEach(() => {
		wrapper = shallowMount(HomePromo, {
			stubs: {
				'b-button': BButton
			}
		})
	})

	afterEach(() => {
		wrapper.destroy()
	})

	it('HomePromo should have MainTitle', () => {
		expect(wrapper.findComponent(MainTitle).exists()).toBe(true)
	})

	it('HomePromo should have b-button with text read more', () => {
		expect(wrapper.findComponent(BButton).exists()).toBe(true)
		expect(wrapper.findComponent(BButton).text()).toBe('read more')
	})
})
