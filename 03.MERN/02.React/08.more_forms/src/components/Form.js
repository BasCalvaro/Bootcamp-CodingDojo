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
		let passwordFormat =
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

		if (key === "firstName" || key === "lastName") {
			if (value.length === 0) {
				currentError = "Field cannot be empty";
			} else if (value.length > 0 && value.length <= 2) {
				currentError =
					getFormattedKey(key) + " must have more than 2 characters";
			}
		} else if (key === "email") {
			if (value.length === 0) {
				currentError = "Field cannot be empty";
			} else if (!value.match(emailformat)) {
				currentError = "Invalid email";
			}
		} else if (key === "password") {
			if (value.length === 0) {
				currentError = "Field cannot be empty";
			} else if (!value.match(passwordFormat)) {
				currentError =
					"Must contain at least one number, one symbol and one uppercase and lowercase letter, and at least 8 or more characters";
			}
		} else if (key === "confirmPassword" && value !== details.password) {
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

	const renderField = (inputFieldName) => {
		const errorKey = `${inputFieldName}Error`;

		return (
			<div className="form-group row mb-3 p-3 bg-light border rounded">
				<label className="col-sm-5 col-form-label">
					{getFormattedKey(inputFieldName)}:
				</label>
				<div className="px-0 col-sm-7">
					<input
						type={
							inputFieldName === "password" ||
							inputFieldName === "confirmPassword"
								? "password"
								: "text"
						}
						className="form-control"
						name={inputFieldName}
						onChange={handleOnChangeDetails}
					/>
				</div>
				{details[errorKey] && (
					<p className="text-danger small">{details[errorKey]}</p>
				)}
			</div>
		);
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
						{renderField("firstName")}
						{renderField("lastName")}
						{renderField("email")}
						{renderField("password")}
						{renderField("confirmPassword")}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Form;
