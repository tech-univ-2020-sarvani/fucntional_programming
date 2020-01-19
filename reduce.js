function countWords(inputWords){
	const obj = {};
	inputWords.forEach(function(el) {
		obj[el] = obj[el] ? ++obj[el] : 1;
	});
	return obj;
}
module.exports = countWords;