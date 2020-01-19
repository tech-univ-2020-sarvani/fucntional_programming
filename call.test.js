const duckCount = require('./call');

describe('The function duckCount', () => {
	it('should return a number', () => {
		const input = { 0: 'argument0', 1: 'argument1', length: 2 };
		const result = duckCount(input);
		expect(typeof result).toBe('number');
	});
	it('should validate the inputs with tag quack', () => {
		const input = { 'quack': true, 1: 'argument1', length: 2 };
		const result = duckCount(input);
		expect(result).toBe(1);
	});
	it('should return 0 if no arguments are sent', () => {
		const input = {};
		const result = duckCount(input);
		expect(result).toBe(0);
	}) ;
});
