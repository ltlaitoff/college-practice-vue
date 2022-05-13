import { shallowMount } from '@vue/test-utils'
import 'jsdom-global'
import ContactPage from '../ContactPage'

import MainTitle from '@/components/MainTitle'
import PageBG from '@/components/PageBG'
import AGDivider from '@/components/AGDivider'

import {
	BButton,
	BCol,
	BContainer,
	BForm,
	BFormGroup,
	BFormInput,
	BFormSelect,
	BFormTextarea,
	BRow
} from 'bootstrap-vue'

jest.mock('../helpers/loadPageBG', () => {
	return {
		loadPageBG: () => 'testbg'
	}
})

describe('ContactPage', () => {
	let wrapper = null

	beforeEach(() => {
		wrapper = shallowMount(ContactPage, {
			stubs: {
				'b-container': BContainer,
				'b-form': BForm,
				'b-row': BRow,
				'b-col': BCol,
				'b-form-group': BFormGroup,
				'b-form-select': BFormSelect,
				'b-form-input': BFormInput,
				'b-form-textarea': BFormTextarea,
				'b-button': BButton
			}
		})
	})

	afterEach(() => {
		wrapper.destroy()
	})

	it('MainTitle should be in the component with visibility = false', () => {
		expect(wrapper.findComponent(MainTitle).exists()).toBe(true)
		expect(wrapper.findComponent(MainTitle).props().visibility).toBe(false)
	})

	it('PageBG should be in the component with src = "testbg"', () => {
		const page = wrapper.findComponent(PageBG)

		expect(page.exists()).toBe(true)
		expect(page.props().img).toBe('testbg')
	})

	it('AGDivider should be in the component', () => {
		expect(wrapper.findComponent(AGDivider).exists()).toBe(true)
	})

	//FIXME: Write test on ContactPage
	/* To be continue */
})
