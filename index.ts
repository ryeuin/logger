import chalk from 'chalk';

export async function logger(
	text: string = 'Please provide a valid log message', // notify the user that they need to add message
	level: number = 1337 // random color
) {
	function isNumber(n: any) {
		return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
	}

	if (!level)
		throw new TypeError(
			'Must provide a level, examples: 1, 2, 3, 4, 5, 1337 || Check docs for a list of levels: https://github.com/r6nted/logger#getting-started'
		);
	if (isNumber(level) === false) throw new TypeError('Level must be a number.');
	if (isNumber(text) === true) throw new TypeError('Text must be a string.');
	if (level !== 1 || 2 || 3 || 4 || 5 || 1337)
		throw new TypeError(
			'Check docs for a list of levels: https://github.com/r6nted/logger#getting-started'
		);

	if (level === undefined) return console.log(chalk.grey(text)); // grey
	if (level === 1) return console.log(chalk.green(text)); // green
	if (level === 2) return console.log(chalk.yellowBright(text)); // yellow
	if (level === 3) return console.log(chalk.yellow(text)); // orange
	if (level === 4) return console.log(chalk.magenta(text)); // purple
	if (level === 5) return console.log(chalk.red(text)); // red
	if (level === 1337) {
		const a = ['green', 'yellow', 'orange', 'purple', 'red'];
		const b = a[Math.floor(Math.random() * a.length)];

		return eval(`console.log(\`chalk.${b}(\`${text}\`)\`)`);
	}
}
