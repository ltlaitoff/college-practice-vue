import { shallowMount } from '@vue/test-utils'
import 'jsdom-global'
import HomeAbout from '../components/HomeAbout'

import { BCardTitle, BCardText, BCard, BContainer } from 'bootstrap-vue'
import AGDivider from '@/components/AGDivider'

jest.mock('../helpers/loadHomeAboutImages', () => {
	return {
		loadHomeAboutImages: value => value
	}
})

jest.mock('../data/homeabout', () => {
	return [
		{
			id: 0,
			title: 'test1',
			text: 'test1 text',
			img: 'test.jpg'
		},
		{
			id: 1,
			title: 'test2',
			text: 'test2 text',
			img: 'test.jpg',
			reversed: true
		}
	]
})

describe('HomeAbout', () => {
	let wrapper = null

	beforeEach(() => {
		wrapper = shallowMount(HomeAbout, {
			stubs: {
				'b-card-title': BCardTitle,
				'b-card-text': BCardText,
				'b-card': BCard,
				'b-container': BContainer
			}
		})
	})

	afterEach(() => {
		wrapper.destroy()
	})

	it('HomeAbout should have 2 cards', () => {
		expect(wrapper.findAllComponents(BCard).wrappers).toHaveLength(2)
	})

	it('Images should be in the cards', () => {
		const cards = wrapper.findAllComponents(BCard).wrappers

		expect(cards[0].find('img').exists()).toBe(true)
		expect(cards[0].find('img').attributes().src).toBe('test.jpg')
		expect(cards[0].find('img').attributes().alt).toBe('test1')

		expect(cards[1].find('img').exists()).toBe(true)
		expect(cards[1].find('img').attributes().src).toBe('test.jpg')
		expect(cards[1].find('img').attributes().alt).toBe('test2')
	})

	it('Content should be in the cards', () => {
		const cards = wrapper.findAllComponents(BCard).wrappers

		expect(cards[0].findComponent(BCardTitle).exists()).toBe(true)
		expect(cards[0].findComponent(BCardTitle).text()).toBe('test1')
		expect(cards[0].findComponent(AGDivider).exists()).toBe(true)
		expect(cards[0].findComponent(BCardText).exists()).toBe(true)
		expect(cards[0].findComponent(BCardText).text()).toBe('test1 text')

		expect(cards[1].findComponent(BCardTitle).exists()).toBe(true)
		expect(cards[1].findComponent(BCardTitle).text()).toBe('test2')
		expect(cards[1].findComponent(AGDivider).exists()).toBe(true)
		expect(cards[1].findComponent(BCardText).exists()).toBe(true)
		expect(cards[1].findComponent(BCardText).text()).toBe('test2 text')
	})
})
