export async function logger(
	text: string = 'Please provide a valid log message',
	level: number = 1337
) {
	function isNumber(n: any) {
		return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
	}

	if (!level)
		throw new TypeError('Must provide a level, examples: 1, 2, 3, 4, 5, 1337');
	if (isNumber(level) === false) throw new TypeError('Level must be a number.');
	if (isNumber(text) === true) throw new TypeError('Text must be a string.');

	return console.log('h');
}
