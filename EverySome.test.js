const checkUsersValid = require('./EverySome');

describe('The function checkUsersValid', () => {
	it('should return a function', () => {
		const goodUsers = [{id:1}, {id:2}, {id:3}];
		const result = checkUsersValid(goodUsers);
		expect(typeof result).toBe('function'); 
	});
	it('should return true if all the users are in goodUsers', () => {
		const goodUsers = [{id:1}, {id:2}, {id:3}];
		const Users = checkUsersValid(goodUsers);
		const submittedUsers = [{id:1}];
		const result = Users(submittedUsers);
		expect(result).toBe(true);
	});
	it('should return false if all the users are not in goodUsers', () => {
		const goodUsers = [{id:1}, {id:2}, {id:3}];
		const Users = checkUsersValid(goodUsers);
		const submittedUsers = [{id:1}, {id:4}];
		const result = Users(submittedUsers);
		expect(result).toBe(false);
	});
});