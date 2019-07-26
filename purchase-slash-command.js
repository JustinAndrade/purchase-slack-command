const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/purchase', async (req, res) => {
	console.log(req.body);
	res.send('OK');
});

const port = 5000;

app.listen(port, () => {
	console.log(`Currently listening on port: ${port}`);
});
