import VueRouter from 'vue-router'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import AGHeader from '@/components/AGHeader'
import MainNavigation from '@/components/MainNavigation'
import 'jsdom-global'

import {
	BButton,
	BCollapse,
	BContainer,
	BFormInput,
	BIcon,
	BImg,
	BNavbar,
	BNavbarBrand,
	BNavbarNav,
	BNavbarToggle,
	BNavForm
} from 'bootstrap-vue'

const localVue = createLocalVue()

localVue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL
})

describe('AGHeader', () => {
	let wrapper = null

	beforeEach(() => {
		wrapper = shallowMount(AGHeader, {
			localVue,
			router,
			stubs: {
				'b-container': BContainer,
				'b-navbar': BNavbar,
				'b-navbar-brand': BNavbarBrand,
				'b-img': BImg,
				'b-navbar-toggle': BNavbarToggle,
				'b-collapse': BCollapse,
				'b-navbar-nav': BNavbarNav,
				'b-nav-form': BNavForm,
				'b-form-input': BFormInput,
				'b-button': BButton,
				'b-icon': BIcon
			}
		})
	})

	afterEach(() => {
		wrapper.destroy()
	})

	it('header should be in component', () => {
		const header = wrapper.find('header')

		expect(header.exists()).toBe(true)
	})

	{
		//		<b-form-input
		//			v-model="searchInput"
		//			size="sm"
		//			class="search"
		//			placeholder="Search"
		//		></b-form-input>
		//		<b-button size="sm" class="button" type="submit">
		//			<b-icon icon="search" />
		//		</b-button>
	}

	it('b-navbar should be in component', () => {
		expect(wrapper.findComponent(BNavbar).exists()).toBe(true)
	})

	it('b-navbar-brand should be in component and should have img', () => {
		const brand = wrapper.findComponent(BNavbarBrand)
		expect(brand.exists()).toBe(true)
		expect(brand.attributes().href).toBe('/')

		const img = brand.findComponent(BImg)
		expect(img.exists()).toBe(true)
		expect(img.attributes().src).not.toBe(undefined)
		expect(img.attributes().alt).not.toBe(undefined)
	})

	it('b-navbar-toggle and b-collapse should be in component', () => {
		const toggle = wrapper.findComponent(BNavbarToggle)
		const collapse = wrapper.findComponent(BCollapse)

		expect(toggle.exists()).toBe(true)
		expect(collapse.exists()).toBe(true)

		expect(toggle.attributes()['aria-controls']).toBe(collapse.attributes().id)
	})

	it('b-collapse should have b-navbar-nav and MainNavigation', () => {
		const collapse = wrapper.findComponent(BCollapse)

		expect(collapse.findComponent(BNavbarNav).exists()).toBe(true)
		expect(collapse.findComponent(MainNavigation).exists()).toBe(true)
	})

	it('search b-navbar-nav should have a b-nav-form > b-form-input, b-button', () => {
		const nav = wrapper.findComponent(BNavbarNav)
		const form = nav.findComponent(BNavForm)
		const input = form.findComponent(BFormInput)
		const button = form.findComponent(BButton)

		expect(form.exists()).toBe(true)
		expect(input.exists()).toBe(true)
		expect(button.exists()).toBe(true)
	})

	//FIXME: Add test for search submit
})
