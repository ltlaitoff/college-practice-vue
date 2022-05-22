import { jest } from '@jest/globals'
import 'jsdom-global'

import API from '@/api'

const DATA = [
	{
		id: 0,
		name: {
			short: 'category1 short',
			full: 'category1 full',
			minify: 'category1minify'
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
			minify: 'category2minify'
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
		minify: 'category1minify'
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
		expect(API.getCategoryByMinifyName('category1minify')).toEqual(category0)
	})

	it('getCategoryProductsById should return category with id = 0', () => {
		expect(API.getCategoryProductsById(0)).toEqual(category0.products)
	})

	it('getCategoryProductsByShortName should return category with short name = "category1 short"', () => {
		expect(API.getCategoryProductsByShortName('category1 short')).toEqual(
			category0.products
		)
	})

	it('getCategoryProductsByFullName should return category with short name = "category1 full"', () => {
		expect(API.getCategoryProductsByFullName('category1 full')).toEqual(
			category0.products
		)
	})

	it('getCategoryProductsByMinifyName should return category with short name = "category1minify"', () => {
		expect(API.getCategoryProductsByMinifyName('category1minify')).toEqual(
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

		it('getCategoryProductsTypesMinifyName should return categoryTypes from categoryMinifyName = "category1minify"', () => {
			expect(API.getCategoryProductsTypesMinifyName('category1minify')).toEqual(
				types
			)
		})
	})

	describe('getProductById', () => {
		const products = {
			category1minify: [
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
			],
			category2minify: [
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

		it.each`
			categoryMinifyName   | id    | result
			${'category1minify'} | ${0}  | ${products.category1minify[0]}
			${'category1minify'} | ${1}  | ${products.category1minify[1]}
			${'category2minify'} | ${0}  | ${products.category2minify[0]}
			${'category2minify'} | ${1}  | ${products.category2minify[1]}
			${'null'}            | ${1}  | ${undefined}
			${null}              | ${1}  | ${undefined}
			${'category1minify'} | ${-1} | ${undefined}
		`(
			'getProductById with categoryMinifyName = $categoryMinifyName, id = $id should return correct product',
			({ categoryMinifyName, id, result }) => {
				expect(API.getProductById(categoryMinifyName, id)).toEqual(result)
			}
		)
	})

	describe('getProductsByIdArray', () => {
		const products = {
			category1minify: [
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
			],
			category2minify: [
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

		it.each`
			categoryMinifyName   | idArray   | result
			${'category1minify'} | ${[0]}    | ${[products.category1minify[0]]}
			${'category1minify'} | ${[1]}    | ${[products.category1minify[1]]}
			${'category1minify'} | ${[0, 1]} | ${[products.category1minify[0], products.category1minify[1]]}
			${'category2minify'} | ${[0]}    | ${[products.category2minify[0]]}
			${'category2minify'} | ${[1]}    | ${[products.category2minify[1]]}
			${'category2minify'} | ${[0, 1]} | ${[products.category2minify[0], products.category2minify[1]]}
			${'null'}            | ${[1]}    | ${[]}
			${null}              | ${[1]}    | ${[]}
			${'category1minify'} | ${[-1]}   | ${[]}
			${'category1minify'} | ${null}   | ${[]}
			${null}              | ${1}      | ${[]}
		`(
			'getProductsByIdArray with categoryMinifyName = $categoryMinifyName, idArray = $idArray should return correct products Array',
			({ categoryMinifyName, idArray, result }) => {
				expect(API.getProductsByIdArray(categoryMinifyName, idArray)).toEqual(
					result
				)
			}
		)
	})
})
