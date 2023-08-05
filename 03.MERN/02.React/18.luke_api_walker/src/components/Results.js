import React, { useEffect, useState } from "react";
import axios from "axios";

const Results = (props) => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------

	const { starWarsElement, sendRequest, setSendRequest } = props;
	const [homeworld, setHomeworld] = useState({});
	const [results, setResults] = useState([]);

	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------

	useEffect(() => {
		if (sendRequest) {
			axios
				.get(
					`https://swapi.dev/api/${starWarsElement.field}/${starWarsElement.id}`
				)
				.then((res) => {
					setResults([res.data]);
					return axios.get(res.data.homeworld);
				})
				.then((res) => {
					setHomeworld(res.data);
				})
				.catch((err) => {
					setResults([]);
					console.log(err);
				});
			setSendRequest(false);
		}
	}, [sendRequest, setSendRequest, starWarsElement]);

	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------

	return (
		<div>
			<h2 className="text-center">Results for {starWarsElement.field}</h2>
			<ul>
				{results && results.length > 0 ? (
					results.map((result, index) => (
						<React.Fragment key={index}>
							<h1>Name: {result.name}</h1>
							{starWarsElement.field === "people" ? (
								<>
									<li>Height: {result.height}</li>
									<li>Mass: {result.mass}</li>
									<li>Birth year: {result.birth_year}</li>
									<li>Gender: {result.gender}</li>
									{homeworld.name && <li>Homeworld: {homeworld.name}</li>}
								</>
							) : starWarsElement.field === "starships" ? (
								<>
									<li>Model: {result.model}</li>
									<li>Manufacturer: {result.manufacturer}</li>
									<li>Length: {result.length}</li>
									<li>Crew: {result.crew}</li>
								</>
							) : starWarsElement.field === "vehicles" ? (
								<>
									<li>Model: {result.model}</li>
									<li>Manufacturer: {result.manufacturer}</li>
									<li>Length: {result.length}</li>
									<li>
										Max atmosphering speed: {result.max_atmosphering_speed}
									</li>
								</>
							) : starWarsElement.field === "species" ? (
								<>
									<li>Classification: {result.classification}</li>
									<li>Designation: {result.designation}</li>
									<li>Average height: {result.average_height}</li>
									<li>Average lifespan: {result.average_lifespan}</li>
								</>
							) : starWarsElement.field === "planets" ? (
								<>
									<li>Rotation period: {result.rotation_period}</li>
									<li>Orbital period: {result.orbital_period}</li>
									<li>Diameter: {result.diameter}</li>
									<li>Climate: {result.climate}</li>
								</>
							) : null}
						</React.Fragment>
					))
				) : (
					<div className="text-center m-5">
						<h1>These aren't the droids you're looking for!</h1>
						<img
							className="img-fluid rounded"
							src={
								"http://cloudfront-us-east-1.images.arcpublishing.com/copesa/RBTAD2WRDNG5TOLLK7RIUZGV2E.jpg"
							}
							alt="Obi-Wan Kenobi"
						/>
					</div>
				)}
			</ul>
		</div>
	);
};

export default Results;
