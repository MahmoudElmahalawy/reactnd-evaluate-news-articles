require("dotenv").config();

const path = require("path");
const express = require("express");
const axios = require("axios");
const mockAPIResponse = require("./mockAPI.js");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 8081;
const API_KEY = process.env.API_KEY;
const API_URL = "https://api.meaningcloud.com/sentiment-2.1?key=";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("dist"));
app.use(cors());

app.get("/", (req, res) => {
	res.sendFile(path.resolve("src/client/views/index.html"));
});

app.get("/url", (req, res) => {
	const input = req.query.input;
	try {
		axios
			.get(API_URL + API_KEY + "&lang=auto&url=" + input)
			.then((response) => {
				res.send(response.data);
			})
			.catch((error) => console.log(error));
	} catch (error) {
		console.log(error);
	}
});

app.get("/test", (req, res) => {
	res.send(mockAPIResponse);
});

// Start server on the specified port
app.listen(PORT, (error) => {
	if (error) throw new Error(error);
	console.log(`Server is listening on port ${PORT}!`);
});

module.exports = app;
