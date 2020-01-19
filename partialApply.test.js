const logger = require('./partialApply');

describe('The function logger', () => {
	it('should call function', () => {
		var info = logger('INFO:');
		expect(typeof info).toBe('function'); 
	});
	it('should call console.log', () => {
		console.log = jest.fn();
		var info = logger('INFO:');
		info('message');
		expect(console.log).toHaveBeenCalledWith('INFO:', 'message');
	});
		
});