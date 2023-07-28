import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Form = (props) => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------

	const { starWarsElement, setStarWarsElement, setSendRequest } = props;
	const [selectedField, setSelectedField] = useState("people");
	const [id, setId] = useState("");

	const navigate = useNavigate();

	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------

	useEffect(() => {
		axios
			.get(
				`https://swapi.dev/api/${starWarsElement.field}/${starWarsElement.id}`
			)
			.catch((err) => {
				console.log(err);
			});
	}, [starWarsElement.field, starWarsElement.id]);

	const handleIdChange = (e) => {
		setId(e.target.value);
	};

	const handleSelectionStarWarsElement = (e) => {
		setSelectedField(e.target.value);
	};

	const handleSubmitRequest = (e) => {
		e.preventDefault();
		setStarWarsElement({ field: selectedField, id: id });
		setSendRequest(true);
		if (selectedField && id) {
			navigate(`/${selectedField}/${id}`);
		}
	};

	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------
	return (
		<div className="p-3">
			<form
				className="p-3 d-flex align-content-center"
				onSubmit={handleSubmitRequest}
			>
				<p className="m-3">Search for: </p>
				<select
					className="form-select m-3"
					value={selectedField}
					onChange={handleSelectionStarWarsElement}
				>
					<option value="people">People</option>
					<option value="starships">Starships</option>
					<option value="vehicles">Vehicles</option>
					<option value="species">Species</option>
					<option value="planets">Planets</option>
				</select>

				<p className="m-3">Id: </p>
				<input
					className="form-control m-3"
					placeholder="Ingrese el id"
					type="text"
					value={id}
					onChange={handleIdChange}
				/>

				<button type="submit" className="btn btn-primary m-3">
					Search
				</button>
			</form>
		</div>
	);
};

export default Form;
