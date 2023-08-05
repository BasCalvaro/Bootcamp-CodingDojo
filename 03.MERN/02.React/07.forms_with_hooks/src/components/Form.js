import React, { useState } from "react";
import Results from "./Results.js";

const Form = (props) => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------
	const { details, setDetails } = props;
	
	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------

	const handleOnChangeDetails = (e) => {
    setDetails( {...details, [e.target.name]: e.target.value} );
  };

	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------
	return (
		<div className="row justify-content-center">
			<div className="col-5">
				<div className="text-left p-4">
					<h1 className="mb-5">Register Form</h1>
					<form>
						<div className="form-group row mb-3 p-3 bg-light border rounded">
							<label className="col-sm-5 col-form-label">First Name:</label>
							<div className="px-0 col-sm-7">
								<input
									type="text"
									className="form-control"
									name="firstName"
									onChange={handleOnChangeDetails}
								/>
							</div>
						</div>
						<div className="form-group row mb-3 p-3 bg-light border rounded">
							<label className="col-sm-5 col-form-label">Last Name: </label>
							<div className="px-0 col-sm-7">
								<input
									type="text"
									className="form-control"
									name="lastName"
									onChange={handleOnChangeDetails}
								/>
							</div>
						</div>
						<div className="form-group row mb-3 p-3 bg-light border rounded">
							<label className="col-sm-5 col-form-label">Email: </label>
							<div className="px-0 col-sm-7">
								<input
									type="email"
									className="form-control"
									name="email"
									onChange={handleOnChangeDetails}
								/>
							</div>
						</div>
						<div className="form-group row mb-3 p-3 bg-light border rounded">
							<label className="col-sm-5 col-form-label">Password: </label>
							<div className="px-0 col-sm-7">
								<input
									type="password"
									className="form-control"
									name="password"
									onChange={handleOnChangeDetails}
								/>
							</div>
						</div>
						<div className="form-group row mb-3 p-3 bg-light border rounded">
							<label className="col-sm-5 col-form-label">
								Confirm Password:{" "}
							</label>
							<div className="px-0 col-sm-7">
								<input
									type="password"
									className="form-control"
									name="confirmPassword"
									onChange={handleOnChangeDetails}
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
			<Results data={details}/>
		</div>
	);
};

export default Form;
