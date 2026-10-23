const express = require("express");
const dotenv = require('dotenv');

const env_value = process.argv[2] || "development";
dotenv.config({ path: `.env.${env_value}` });

const app = express();

const PORT = process.env.PORT;
const APP = process.env.APP;

function log(message) {
	const time = new Date().toISOString();
	console.log(`[${time}] [${env_value.toUpperCase()}] ${message}`);
}
app.get('/', (req, res) => {
	res.send('Hello World from expresss from ' + APP);
});

app.get('/health', (req, res) => {
        console.log("Health check called");
	res.status(200).json({
		status: "UP"
	});
});

app.listen(PORT , (req, res) => {
	log("Server is running on PORT " + PORT);
});
