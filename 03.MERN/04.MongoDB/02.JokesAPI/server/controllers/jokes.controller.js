const Joke = require("../models/jokes.model");

module.exports = {
	findAllJokes: (req, res) => {
		Joke.find()
			.then((allJokes) => res.json({ allJokes }))
			.catch((err) =>
				res.json({ message: "Something went wrong", error: err })
			);
	},

	findOneSingleJoke: (req, res) => {
		Joke.findOne({ _id: req.params.id })
			.then((oneSingleJoke) => res.json({ oneSingleJoke }))
			.catch((err) =>
				res.json({ message: "Something went wrong", error: err })
			);
	},

	createNewJoke: (req, res) => {
		Joke.create(req.body)
			.then((newJoke) => res.json({ newJoke }))
			.catch((err) =>
				res.json({ message: "Something went wrong", error: err })
			);
	},

	updateExistingJoke: (req, res) => {
		Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
			.then((updatedJoke) => res.json({ updatedJoke }))
			.catch((err) =>
				res.json({ message: "Something went wrong", error: err })
			);
	},

	deleteAnExistingJoke: (req, res) => {
		Joke.deleteOne({ _id: req.params.id })
			.then((deletedJoke) => res.json({ deletedJoke }))
			.catch((err) =>
				res.json({ message: "Something went wrong", error: err })
			);
	},
};
