import React from "react";

const Results = (props) => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------

	const { firstName, lastName, email, password, confirmPassword } = props.data;

	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------

	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------
	return (
		<div className="d-flex justify-content-center">
			<div>
				<h2>Your Form Data</h2>
				<ul className="list-unstyled">
        <li className="d-flex justify-content-between">
            First Name:
            <span>{firstName}</span>
          </li>
          <li className="d-flex justify-content-between">
            Last Name:
            <span>{lastName}</span>
          </li>
          <li className="d-flex justify-content-between">
            Email:
            <span>{email}</span>
          </li>
          <li className="d-flex justify-content-between">
            Password:
            <span>{password}</span>
          </li>
          <li className="d-flex justify-content-between">
            Confirm Password:
            <span>{confirmPassword}</span>
          </li>
				</ul>
			</div>
		</div>
	);
};

export default Results;
