const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
		type: String,
		required: [true, "The Setup of your joke is required"],
		maxlength: [120, "Your joke setup should be at most 150 characters long"],
	},
	punchline: {
		type: String,
		required: [true, "The Punchline of your joke is required"],
		minlength: [6, "Your punchline should be at least 6 characters long"],
	},
}, { timestamps: true });

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
