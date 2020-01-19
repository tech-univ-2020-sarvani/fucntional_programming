const doubleAll = require('./map');

describe('The function doubleAll', () => {
	it('should return instance of Array', () => {
		let arr = [1,2,3];
		const result = doubleAll(arr);
		expect(typeof result).toBe('object');
	});
	it('should return double of the input numbers', () => {
		let arr = [1,2,3];
		const result = doubleAll(arr);
		console.log(typeof result);
		expect(result).toEqual([2, 4, 6]);
	});
});