export async function logger(text: string, level?: number, type?: string) {
	function isNumber(n: any) {
		return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
	}

	if (!level && !type)
		throw new TypeError('Must provide either level or type property.');
	if (level && type)
		throw new TypeError('Must only provide either level or type property.');
	if (isNumber(level) === false) throw new TypeError('Level must be a number.');
	if (isNumber(type) === true) throw new TypeError('Type must be a string.');
	if (isNumber(text) === true) throw new TypeError('Text must be a string.');

	return console.log('h');
}
