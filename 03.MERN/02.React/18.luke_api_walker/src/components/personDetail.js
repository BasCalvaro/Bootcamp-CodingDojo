import React, { useEffect, useState} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const PersonDetails = () => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------

	const { id } = useParams();
	const [person, setPerson] = useState({});
	const [homeworld, setHomeworld] = useState({});

	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------
	useEffect(() => {
		axios
			.get(`https://swapi.dev/api/people/${id}`)
			.then((res) => {
				setPerson(res.data);
				return axios.get(res.data.homeworld);
			})
			.then((res) => {
				setHomeworld(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);
	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------

	return (
		<div>
			<h2>{person.name}</h2>
			<p>Height: {person.height}</p>
			<p>Mass: {person.mass}</p>
			<p>Birth Year: {person.birth_year}</p>
			<p>Gender: {person.gender}</p>
			{homeworld.name && <p>Homeworld: {homeworld.name}</p>}
		</div>
	);
};

export default PersonDetails;
