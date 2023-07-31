const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
  //GET
  app.get("/api/Joke/", JokeController.findAllJokes);
  app.get("/api/Joke/:id", JokeController.findOneSingleJoke);
  // app.get("/api/Joke/random", JokeController.findRandomJoke);

  //POST
  app.post("/api/Joke/new", JokeController.createNewJoke);

  //PUT
  app.put("/api/Joke/update/:id", JokeController.updateExistingJoke);

  //DELETE
  app.delete("/api/Joke/delete/:id", JokeController.deleteAnExistingJoke);
};