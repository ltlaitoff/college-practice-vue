import VueRouter from 'vue-router'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import AGHeader from '@/components/AGHeader'
import MainNavigation from '@/components/MainNavigation'
import 'jsdom-global'

import {
	BButton,
	BContainer,
	BFormInput,
	BIcon,
	BImg,
	BLink
} from 'bootstrap-vue'

const localVue = createLocalVue()

localVue.use(VueRouter)

const router = new VueRouter()

describe('AGHeader', () => {
	let wrapper = null

	beforeEach(() => {
		wrapper = shallowMount(AGHeader, {
			localVue,
			router,
			stubs: {
				'b-container': BContainer,
				'b-link': BLink,
				'b-img': BImg,
				'b-form-input': BFormInput,
				'b-button': BButton,
				'b-icon': BIcon
			}
		})
	})

	afterEach(() => {
		wrapper.destroy()
	})

	it('BContainer should be have children header component', () => {
		expect(
			wrapper.getComponent('.container').getComponent('header').exists()
		).toBe(true)
	})

	it('Search input should be in component', () => {
		expect(wrapper.findComponent('input.search').exists()).toBe(true)
	})

	it('Button should be in header and should be have a icon as children', () => {
		const header = wrapper.findComponent('header')
		const button = header.findComponent('button.button')
		const icon = button.findComponent('.b-icon')

		expect(button.exists()).toBe(true)
		expect(icon.exists()).toBe(true)
	})

	it('MainNavigation should be in header', () => {
		const header = wrapper.findComponent('header')
		const mainNavigation = header.findComponent(MainNavigation)

		expect(mainNavigation.exists()).toBe(true)
	})
})
