import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Form = () => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------

	const { username, setUsername } = useContext(UserContext);

	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------

	const handleChange = (e) => {
		setUsername(e.target.value);
	};

	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------

	return (
			<div className="d-flex w-50 mb-3 align-items-center">
				<label for="exampleInputEmail1" className="w-100 form-label">
					Cambiar nombre de usuario:
				</label>
				<input
					type="text"
					value={username}
					onChange={handleChange}
					className="form-control w-100"
					placeholder="Ingrese su nombre"
				/>
			</div>
	);
};

export default Form;
