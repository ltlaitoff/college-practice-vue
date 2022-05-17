import { isValueExists, isValueNotExists } from './index'

describe('utils helpers', () => {
	it.each`
		data                | categoryName | value       | result
		${{ test: [1, 2] }} | ${'test'}    | ${1}        | ${true}
		${{ test: [2] }}    | ${'test'}    | ${1}        | ${false}
		${{ test: [] }}     | ${'test'}    | ${1}        | ${false}
		${{ test: [1, 2] }} | ${'test2'}   | ${1}        | ${false}
		${{ test: [2] }}    | ${'random'}  | ${'random'} | ${false}
	`(
		'isValueExists should with data = $data, categoryName = $categoryName, value = $value return result $result',
		({ data, categoryName, value, result }) => {
			expect(isValueExists(data, categoryName, value)).toBe(result)
			expect(isValueNotExists(data, categoryName, value)).not.toBe(result)
		}
	)
})
