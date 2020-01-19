function duckCount(...args) {
	const len = args.filter((x) =>  Object.prototype.hasOwnProperty.call(x, 'quack') == true).length;
	return len;
}
module.exports = duckCount;