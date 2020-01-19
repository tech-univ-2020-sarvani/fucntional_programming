const repeat = require('./hof');

describe('The function repeat', () => {
	it('should execute the function n number of times', () => {
		const operation = jest.fn();
		repeat(operation, 3);
		expect(operation).toHaveBeenCalledTimes(3);
	});
	it('should return nothing when no arguments passed', () => {
		const result = repeat();
		expect(result).toBeUndefined();
	});
});