import { shallowMount } from '@vue/test-utils'
import AGDivider from '@/components/AGDivider'
import 'jsdom-global'
import InlineSvg from 'vue-inline-svg'

jest.mock('@/helpers/dividerLoadSvg', () => {
	return () => 'testsrc'
})

describe('AGDivider', () => {
	let wrapper = null

	beforeEach(() => {
		wrapper = shallowMount(AGDivider, {})
	})

	afterEach(() => {
		wrapper.destroy()
	})

	it('AGDivider should be have 5 inlineSvgs', () => {
		expect(wrapper.findAllComponents(InlineSvg)).toHaveLength(5)
		wrapper.findAllComponents(InlineSvg).wrappers.map(item => {
			expect(item.attributes().src).toBe('testsrc')
			expect(item.attributes().alt).toBe('cross')
		})
	})
})
