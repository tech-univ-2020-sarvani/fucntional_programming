const getShortMessages = require('./filter');

describe('The function getShoerMessages', () => {
	it('should return instance of Array', () => {
		let arr = [{message: 'goodMorning'}, {message: 'goodAfternoon'}, {message: 'GoodNight'}];
		const result = getShortMessages(arr);
		expect(typeof result).toBe('object');
	});
	it('should return messages with length less than  50', () => {
		let arr = [{message: 'goodMorning'}, {message: 'goodAfternoon'}, {message: 'GoodNight'}];
		const result = getShortMessages(arr);
		expect(result).toEqual(['goodMorning', 'goodAfternoon', 'GoodNight']);
	});
});