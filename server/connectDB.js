const mongoose = require("mongoose");
require('dotenv').config();

async function connectDB() {
	try {
		const connect = await mongoose.connect(
			process.env.MONGODB_CONNECTION_STRING,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);

	} catch (error) {
		console.error(error.message);
	}
}

module.exports = { connectDB };