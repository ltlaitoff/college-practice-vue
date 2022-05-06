import { jest } from '@jest/globals'
import 'jsdom-global'

import {
	getProducts,
	getCategoryById,
	getCategoryProductsById,
	getCategoryProductTypesById
} from '@/api'

const DATA = [
	{
		id: 0,
		categoryShortName: 'test1',
		categoryFullName: 'test1 long',
		categoryImage: 'test1',
		disabled: false,
		products: [
			{
				id: 0,
				name: 'Test1 Product1',
				type: 'Test1ProductType1',
				image: 'test-img'
			},
			{
				id: 1,
				name: 'Test1 Product2',
				type: 'Test1ProductType1',
				image: 'test-img'
			},
			{
				id: 1,
				name: 'Test1 Product3',
				type: 'Test1ProductType2',
				image: 'test-img'
			}
		]
	},
	{
		id: 1,
		categoryShortName: 'test2',
		categoryFullName: 'test2 lonk',
		categoryImage: 'test2',
		disabled: false,
		products: [
			{
				id: 0,
				name: 'Test2 Product1',
				type: 'Test2ProductType',
				image: 'test-img'
			},
			{
				id: 1,
				name: 'Test2 Product2',
				type: 'Test2ProductType',
				image: 'test-img'
			},
			{
				id: 1,
				name: 'Test2 Product3',
				type: 'Test2ProductType',
				image: 'test-img'
			}
		]
	}
]

jest.mock('./apiData', () => {
	return {
		products: DATA
	}
})

describe('api', () => {
	it('getProducts should return all object', async () => {
		expect(await getProducts()).toEqual(DATA)
	})

	it('getCategoryById should return category with id = 1', async () => {
		const category = {
			id: 1,
			categoryShortName: 'test2',
			categoryFullName: 'test2 lonk',
			categoryImage: 'test2',
			disabled: false,
			products: [
				{
					id: 0,
					name: 'Test2 Product1',
					type: 'Test2ProductType',
					image: 'test-img'
				},
				{
					id: 1,
					name: 'Test2 Product2',
					type: 'Test2ProductType',
					image: 'test-img'
				},
				{
					id: 1,
					name: 'Test2 Product3',
					type: 'Test2ProductType',
					image: 'test-img'
				}
			]
		}
		expect(await getCategoryById(1)).toEqual(category)
	})

	it('getCategoryProductsById should return category products with category id = 0', async () => {
		const categoryProducts = [
			{
				id: 0,
				name: 'Test1 Product1',
				type: 'Test1ProductType1',
				image: 'test-img'
			},
			{
				id: 1,
				name: 'Test1 Product2',
				type: 'Test1ProductType1',
				image: 'test-img'
			},
			{
				id: 1,
				name: 'Test1 Product3',
				type: 'Test1ProductType2',
				image: 'test-img'
			}
		]
		expect(await getCategoryProductsById(0)).toEqual(categoryProducts)
	})

	it('getCategoryProductTypesById should return category products types list with category id = 0', async () => {
		const types = ['Test1ProductType1', 'Test1ProductType2']

		expect(await getCategoryProductTypesById(0)).toEqual(types)
	})
})
