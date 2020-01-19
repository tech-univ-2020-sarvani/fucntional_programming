function checkValidUsers(goodUsers){
	return function allUsersValid(submittedUsers){
		return submittedUsers.every((x) => goodUsers.includes(x));
	};
}
module.exports = checkValidUsers;