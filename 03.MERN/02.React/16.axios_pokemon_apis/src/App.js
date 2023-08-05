import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

function App() {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------

	const [pokemon, setPokemon] = useState();
	const [request, setRequest] = useState(false);

	useEffect(() => {
		if (request) {
			axios
				.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
        .then(response => {
          setPokemon(response.data.results);
        })
        .catch(error => {
          console.error(error);
        });
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
				{pokemon &&
					pokemon.map((item, idx) => <li key={idx}>{item.name}</li>)}
			</ol>
		</div>
	);
}

export default App;