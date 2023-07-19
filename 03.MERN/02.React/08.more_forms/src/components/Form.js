import React from "react";

const Form = (props) => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------
	const { details, setDetails } = props;

	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------

	const handleOnChangeDetails = (e) => {
		let key = e.target.name;
		let value = e.target.value;

		let currentError = null;
		let emailformat =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		let passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

		if (key == "firstName" || key == "lastName") {
			if (value.length === 0) {
				currentError = "Field cannot be empty";
			} else if (value.length > 0 && value.length <= 2) {
				currentError =
					getFormattedKey(key) + " must have more than 2 characters";
			}
		} else if (key == "email") {
			if (value.length === 0) {
				currentError = "Field cannot be empty";
			} else if (!value.match(emailformat)) {
				currentError = "Invalid email";
			}
		} else if (key == "password") {
			if (value.length === 0) {
				currentError = "Field cannot be empty";
			} else if (!value.match(passwordFormat)) {
				currentError = "Must contain at least one number, one symbol and one uppercase and lowercase letter, and at least 8 or more characters";
			}
		}else if (key === "confirmPassword" && value !== details.password) {
			currentError = "Passwords does not match";
		}
		setDetails({ ...details, [key]: value, [`${key}Error`]: currentError });
	};

	const getFormattedKey = (key) => {
		switch (key) {
			case "firstName":
				return "First Name";
			case "lastName":
				return "Last Name";
			case "email":
				return "Email";
			case "password":
				return "Password";
			case "confirmPassword":
				return "Confirm Password";
			default:
				return key;
		}
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
						<p className="text-danger small"> {details.firstNameError}</p>

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
						<p className="text-danger small"> {details.lastNameError}</p>

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
						<p className="text-danger small"> {details.emailError}</p>

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
						<p className="text-danger small"> {details.passwordError}</p>

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
						<p className="text-danger small">{details.confirmPasswordError}</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Form;
