import { shallowMount } from '@vue/test-utils'
import SubProducts from '../components/SubProducts'
import 'jsdom-global'
import { BImg } from 'bootstrap-vue'

const DATA = [
	{
		id: 0,
		name: 'Wheat',
		icon: 'test-icon'
	},
	{
		id: 1,
		name: 'Confection watermalon',
		icon: 'test-icon'
	},
	{
		id: 2,
		name: 'Clover',
		icon: 'test-icon'
	},
	{
		id: 3,
		name: 'Confection Sunflower',
		icon: 'test-icon'
	},
	{
		id: 4,
		name: 'Tomato',
		icon: 'test-icon'
	},
	{
		id: 5,
		name: 'Eggplant P/O',
		icon: 'test-icon'
	},
	{
		id: 6,
		name: 'Ornamental Sunflower',
		icon: 'test-icon'
	}
]
jest.mock('../data/subproducts', () => DATA)

describe('SubProducts', () => {
	let wrapper = null

	beforeEach(() => {
		wrapper = shallowMount(SubProducts, {
			stubs: {
				'b-img': BImg
			}
		})
	})

	afterEach(() => {
		wrapper.destroy()
	})

	it('Items count should be 5', () => {
		expect(wrapper.findAll('li.item')).toHaveLength(7)
	})

	it('All items should have img', () => {
		wrapper.findAll('li.item').wrappers.forEach(item => {
			expect(item.findComponent(BImg).exists()).toBe(true)
		})
	})

	it('All items should have text', () => {
		const NAMES = {
			0: 'Wheat',
			1: 'Confection watermalon',
			2: 'Clover',
			3: 'Confection Sunflower',
			4: 'Tomato',
			5: 'Eggplant P/O',
			6: 'Ornamental Sunflower'
		}

		wrapper.findAll('li.item').wrappers.forEach(item => {
			expect(NAMES[item.attributes('data-testid')]).toBe(item.text())
		})
	})
})
