import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Navbar = () => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------

	const { username } = useContext(UserContext);

	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------

	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------

	return (
		<div className="d-flex justify-content-end p-3 bg-danger bg-opacity-50">
			<h1>¡Hola, {username}!</h1>
		</div>
	);
};

export default Navbar;
