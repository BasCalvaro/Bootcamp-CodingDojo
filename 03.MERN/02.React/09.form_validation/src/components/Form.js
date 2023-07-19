import React, { useReducer } from "react";

const Form = (props) => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------

	const initialState = {
		firstName: {
			value: "",
			error: null,
		},
		lastName: {
			value: "",
			error: null,
		},
		email: {
			value: "",
			error: null,
		},
	};

	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------

	const reducer = (state, action) => {
		return {
			...state,
			[action.type]: {
				...state[action.type],
				value: action.payload,
				error: action.error,
			},
		};
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	const handleOnChangeDetails = (e) => {
		const { name, value } = e.target;

		let currentError = null;
		let emailformat =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

		if (name === "firstName" || name === "lastName") {
			if (value.length === 0) {
				currentError = "Field cannot be empty";
			} else if (value.length > 0 && value.length <= 2) {
				currentError =
					getFormattedKey(name) + " must have more than 2 characters";
			}
		} else if (name === "email") {
			if (value.length === 0) {
				currentError = "Field cannot be empty";
			} else if (!value.match(emailformat)) {
				currentError = "Invalid email";
			}
		}

		dispatch({
			type: name,
			payload: value,
			error: currentError,
		});
	};

	const getFormattedKey = (key) => {
		switch (key) {
			case "firstName":
				return "First Name";
			case "lastName":
				return "Last Name";
			case "email":
				return "Email";
			default:
				return key;
		}
	};

	const renderField = (inputFieldName) => {
		const errorKey = state[inputFieldName].error;
		return (
			<div className="form-group row mb-3 p-3">
				<label className="mb-3 col-sm-5 col-form-label">
					{getFormattedKey(inputFieldName)}:
				</label>
				<div>
					<input
						type={"text"}
						className="form-control"
						name={inputFieldName}
						onChange={handleOnChangeDetails}
					/>
				</div>
				{errorKey !== null && (
				<p className="text-danger small">{errorKey}</p>
				)}
			</div>
		);
	};

	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------
	return (
		<div className="row justify-content-center bg-light">
			<div className="col-6">
				<div className="text-left p-4">
					<form>
						{renderField("firstName")}
						{renderField("lastName")}
						{renderField("email")}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Form;
