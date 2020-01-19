const upperCaser = require('./helloWorld');

describe('The function upperCaser', () => {
	it('should return a string', () => {
		const result = upperCaser('sarvani');
		expect(typeof result).toBe('string');
	});
	it('should return uppercase of the input', () => {
		const result = upperCaser('sarvani');
		expect(result).toBe('SARVANI');
	});
});