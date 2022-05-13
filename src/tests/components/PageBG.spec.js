import { shallowMount } from '@vue/test-utils'
import PageBG from '@/components/PageBG'
import 'jsdom-global'

describe('PageBG', () => {
	let wrapper = null

	it.each`
		src
		${'imgsrc'}
		${'test'}
		${'src'}
	`('PageBG should have img with src = $src and alt = $alt', ({ src }) => {
		wrapper = shallowMount(PageBG, {
			propsData: {
				img: src
			}
		})

		const div = wrapper.findComponent('div')
		expect(div.exists()).toBe(true)
		expect(div.attributes().style).toBe(`background-image: url(${src});`)

		wrapper.destroy()
	})
})
