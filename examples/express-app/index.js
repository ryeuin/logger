const { logger } = require('../../index');
const express = require('express');

const app = express();

app.get('/', async (req, res) => {
	res.send(200, 'Example Express App - @r6nted/logger');
});

app.listen(3000, () => {
	logger('Listening on port 3000', 1);
});
