function logger(prefix){
	return console.log.bind(null, prefix);
}

module.exports = logger;