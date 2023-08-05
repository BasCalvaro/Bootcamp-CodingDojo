import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------

	const [pokemons, setPokemons] = useState();
	const [request, setRequest] = useState(false);

	useEffect(() => {
		if (request) {
			fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
				.then((response) => {
					return response.json();
				})
				.then((response) => {
					setPokemons(response.results);
				})
				.catch((error) => {
					console.log(error);
				});
			setRequest(false);
		}
	}, [request]);

	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------


	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------

	return (
		<div className="container col-5 my-3">
			<button
				className="btn btn-primary btn-lg btn-block"
				onClick={() => setRequest(true)}
			>
				Fetch Pokemon
			</button>
			<p className="my-3">List of Pokemons: </p>
			<ol>
				{pokemons &&
					pokemons.map((item, idx) => <li key={idx}>{item.name}</li>)}
			</ol>
		</div>
	);
}

export default App;
