import { jest } from '@jest/globals'
import 'jsdom-global'

import API from '@/api'
import TestsConsoleLog from '@/testHelpers/colors'

const DATA = [
	{
		id: 0,
		name: {
			short: 'category1 short',
			full: 'category1 full',
			minify: 'category1 minify'
		},
		image: 'image.jpg',
		icon: 'icon.svg',
		bg: 'bg.jpg',
		productBG: 'product-bg.svg',
		attentionIcon: 'attention-icon.svg',
		products: [
			{
				id: 0,
				name: 'Test1 Product1',
				type: 'Test1ProductType1',
				image: 'test-img',
				attentionText: 'attentionText',
				details: [
					{
						id: 0,
						title: 'detail1',
						text: 'detail1 text'
					},
					{
						id: 1,
						title: 'detail2',
						texts: ['detail1 text1', 'detail1 text2', 'detail1 text3']
					}
				]
			},
			{
				id: 1,
				name: 'Test1 Product2',
				type: 'Test1ProductType2',
				image: 'test-img',
				attentionText: 'attentionText'
			}
		]
	},
	{
		id: 1,
		name: {
			short: 'category2 short',
			full: 'category2 full',
			minify: 'category2 minify'
		},
		image: 'image.jpg',
		bg: 'bg.jpg',
		productBG: 'product-bg.svg',
		attentionIcon: 'attention-icon.svg',
		products: [
			{
				id: 0,
				name: 'Test2 Product1',
				type: 'Test2ProductType',
				attentionText: 'attentionText',
				image: 'test-img',
				details: [
					{
						id: 0,
						title: 'detail1',
						text: 'detail1 text'
					},
					{
						id: 1,
						title: 'detail2',
						texts: ['detail1 text1', 'detail1 text2', 'detail1 text3']
					}
				]
			},
			{
				id: 1,
				name: 'Test2 Product2',
				type: 'Test2ProductType',
				image: 'test-img'
			}
		]
	}
]

jest.mock('./apiData', () => {
	return {
		categories: DATA
	}
})

const category0 = {
	id: 0,
	name: {
		short: 'category1 short',
		full: 'category1 full',
		minify: 'category1 minify'
	},
	image: 'image.jpg',
	icon: 'icon.svg',
	bg: 'bg.jpg',
	productBG: 'product-bg.svg',
	attentionIcon: 'attention-icon.svg',
	products: [
		{
			id: 0,
			name: 'Test1 Product1',
			type: 'Test1ProductType1',
			image: 'test-img',
			attentionText: 'attentionText',
			details: [
				{
					id: 0,
					title: 'detail1',
					text: 'detail1 text'
				},
				{
					id: 1,
					title: 'detail2',
					texts: ['detail1 text1', 'detail1 text2', 'detail1 text3']
				}
			]
		},
		{
			id: 1,
			name: 'Test1 Product2',
			type: 'Test1ProductType2',
			image: 'test-img',
			attentionText: 'attentionText'
		}
	]
}

TestsConsoleLog.fixme('Create tests for getProductById')
TestsConsoleLog.fixme('Create tests for getProductsByIdArray')

describe('api', () => {
	it('getCategories should return categories', () => {
		expect(API.getCategories()).toEqual(DATA)
	})

	it('getCategoryById should return category with id = 0', () => {
		expect(API.getCategoryById(0)).toEqual(category0)
	})

	it('getCategoryByShortName should return category with short name = "category0 short"', () => {
		expect(API.getCategoryByShortName('category1 short')).toEqual(category0)
	})

	it('getCategoryByFullName should return category with short name = "category0 full"', () => {
		expect(API.getCategoryByFullName('category1 full')).toEqual(category0)
	})

	it('getCategoryByMinifyName should return category with short name = "category0 minify"', () => {
		expect(API.getCategoryByMinifyName('category1 minify')).toEqual(category0)
	})

	it('getCategoryProductsById should return category with id = 0', () => {
		expect(API.getCategoryProductsById(0)).toEqual(category0.products)
	})

	it('getCategoryProductsByShortName should return category with short name = "category0 short"', () => {
		expect(API.getCategoryProductsByShortName('category1 short')).toEqual(
			category0.products
		)
	})

	it('getCategoryProductsByFullName should return category with short name = "category0 full"', () => {
		expect(API.getCategoryProductsByFullName('category1 full')).toEqual(
			category0.products
		)
	})

	it('getCategoryProductsByMinifyName should return category with short name = "category0 minify"', () => {
		expect(API.getCategoryProductsByMinifyName('category1 minify')).toEqual(
			category0.products
		)
	})

	it.each`
		value          | result
		${'undefined'} | ${undefined}
		${''}          | ${undefined}
		${null}        | ${undefined}
		${123}         | ${undefined}
	`(
		'api functions with value = $value should return result = $result',
		({ value, result }) => {
			expect(API.getCategoryByShortName(value)).toEqual(result)
			expect(API.getCategoryByFullName(value)).toEqual(result)
			expect(API.getCategoryByMinifyName(value)).toEqual(result)
			expect(API.getCategoryProductsByShortName(value)).toEqual(result)
			expect(API.getCategoryProductsByFullName(value)).toEqual(result)
			expect(API.getCategoryProductsByMinifyName(value)).toEqual(result)
		}
	)

	describe('types', () => {
		const types = ['Test1ProductType1', 'Test1ProductType2']

		it('getCategoryProductsTypesById should return categoryTypes from categoryId = 0', () => {
			expect(API.getCategoryProductsTypesById(0)).toEqual(types)
		})

		it('getCategoryProductsTypesByShortName should return categoryTypes from categoryShortName = "category1 short"', () => {
			expect(
				API.getCategoryProductsTypesByShortName('category1 short')
			).toEqual(types)
		})

		it('getCategoryProductsTypesFullName should return categoryTypes from categoryFullName = "category1 full"', () => {
			expect(API.getCategoryProductsTypesFullName('category1 full')).toEqual(
				types
			)
		})

		it('getCategoryProductsTypesMinifyName should return categoryTypes from categoryMinifyName = "category1 minify"', () => {
			expect(
				API.getCategoryProductsTypesMinifyName('category1 minify')
			).toEqual(types)
		})
	})
})
