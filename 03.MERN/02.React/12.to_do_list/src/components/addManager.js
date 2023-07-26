import React, { useState, useCallback } from "react";
import ToDoItem from "./toDoItem";

const ToDo = () => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------

	const [entrie, setEntrie] = useState([]);
	const [label, setLabel] = useState("");
	const [checkedItems, setCheckedItems] = useState();
	const [errorMessage, setErrorMessage] = useState("");

	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------

	const handleOnSubmit = (e) => {
		e.preventDefault();
		if (label.trim() !== "") {
			setEntrie([...entrie, { text: label, isChecked: false }]);
			setLabel("");
			setCheckedItems((prevState) => ({
				...prevState,
				[entrie.length]: false,
			}));
			setErrorMessage("");
		} else {
			setErrorMessage("Field cannot be empty");
		}
	};

	const handleOnChange = (e) => {
		setLabel(e.target.value);
	};

	const handleOnDelete = (index) => {
		const updatedEntries = [...entrie];
		updatedEntries.splice(index, 1);
		setEntrie(updatedEntries);
	};

	const handleCheckboxChange = useCallback((index) => {
		setCheckedItems((prevState) => ({
			...prevState,
			[index]: !prevState[index],
		}));
	}, []);

	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------
	return (
		<>
			<div className="container row my-3">
				<form className="d-flex" onSubmit={handleOnSubmit}>
					<label className="w-100">
						<input
							type="text"
							name="name"
							value={label}
							className="form-control p-3 bg-info bg-opacity-10 border border-primary"
							onChange={handleOnChange}
						/>
					</label>
					<input
						type="submit"
						value="Add"
						className="btn btn-primary btn-lg ms-2"
					/>
				</form>
			</div>
			<p style={{ color: "red" }}>{errorMessage}</p>
			<ul className="d-flex flex-column container">
				{entrie.map((item, index) => (
					<ToDoItem
						key={index}
						item={item}
						index={index}
						isChecked={checkedItems[index]}
						handleCheckboxChange={handleCheckboxChange}
						handleOnDelete={handleOnDelete}
					/>
				))}
			</ul>
		</>
	);
};

export default ToDo;
