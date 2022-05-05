import { shallowMount } from '@vue/test-utils'
import AGDivider from '@/components/AGDivider'

import 'jsdom-global'
import { BImg } from 'bootstrap-vue'

describe('AGDivider', () => {
	let wrapper = null

	beforeEach(() => {
		wrapper = shallowMount(AGDivider, {
			stubs: {
				'b-img': BImg
			}
		})
	})

	afterEach(() => {
		wrapper.destroy()
	})

	it('AGDivider should be have 5 images', () => {
		expect(wrapper.findAllComponents(BImg)).toHaveLength(5)
	})
})
