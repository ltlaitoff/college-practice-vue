import { shallowMount } from '@vue/test-utils'
import PageBG from '@/components/PageBG'
import 'jsdom-global'

import { BImg } from 'bootstrap-vue'

describe('AGDivider', () => {
	let wrapper = null

	it.each`
		src         | alt
		${'imgsrc'} | ${'imgalt'}
		${'test'}   | ${'test'}
		${'src'}    | ${'alt'}
	`('PageBG should have img with src = $src and alt = $alt', ({ src, alt }) => {
		wrapper = shallowMount(PageBG, {
			stubs: {
				'b-img': BImg
			},
			propsData: {
				img: src,
				imgAlt: alt
			}
		})
		const img = wrapper.findComponent(BImg)
		expect(img.exists()).toBe(true)
		const imgAttributes = img.attributes()
		expect(imgAttributes.src).toBe(src)
		expect(imgAttributes.alt).toBe(alt)

		wrapper.destroy()
	})
})
