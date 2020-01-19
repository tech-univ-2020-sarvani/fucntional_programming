const countWords = require('./reduce');

describe('The functio countwords', () => {
	it('should return an object', () => {
		const result = countWords(['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']);
		expect(typeof result).toBe('object');
	});
	it('should return an object that contains the number of times each string occured in the array.', () => {
		const result = countWords(['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']);
		expect(result).toEqual({Apple:2, Banana:1, Durian:3});
	});
});