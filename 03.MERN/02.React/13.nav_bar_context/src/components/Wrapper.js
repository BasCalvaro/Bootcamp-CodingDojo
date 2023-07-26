import React from "react";
import Navbar from "./NavBar";

const Wrapper = ({ children }) => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------

	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------

	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------

	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
};

export default Wrapper;
