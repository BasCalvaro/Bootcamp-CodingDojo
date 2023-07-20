import React, { useState } from "react";
import validateColor from "validate-color";

const BoxCreator = (props) => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------
	const [input, setInput] = useState([]);
	const [color, setColor] = useState("");
	const [height, setHeight] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------

	const colorHandler = (e) => {
		setColor(e.target.value);
	};
	const heightHandler = (e) => {
		setHeight(e.target.value);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();

		if (color.trim() !== "" && height.trim() !== "") {
			if (validateColor(color)) {
				if(height<=500){
					const newItem = {
					color: color,
					height: height,
				};

				setInput([...input, newItem]);
				setColor("");
				setHeight("");
				setErrorMessage("");
				}else{
					setErrorMessage(
						"Your box is too big. Please enter a valid number."
					);
					setHeight("");
				}
				
			} else {
				setErrorMessage("Invalid color. Please enter a valid color.");
				setColor("");
			}
			if (isNaN(height)) {
				setErrorMessage(
					"Invalid box dimension. Please enter a valid number."
				);
				setHeight("");
			}
		} else {
			setErrorMessage("Field cannot be empty");
		}
	};

	const box = () => {
		return input.map((item, index) => {
			return (
				<div
					key={index}
					style={{
						backgroundColor: item.color,
						height: `${item.height}px`,
						width: `${item.height}px`,
						margin: `5px`,
					}}
				>
					{item.text}
				</div>
			);
		});
	};

	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------
	return (
		<div>
			<div className="text-center">
				<form onSubmit={handleOnSubmit}>
					<div>
						<label className="m-3">Color Selector: </label>
						<input
							type="text"
							name="inputValue"
							value={color}
							onChange={colorHandler}
							placeholder="Write your color here"
							className="px-2"
						/>
					</div>
					<div>
						<label className="m-3">Height and Width: </label>
						<input
							type="text"
							name="inputValue"
							value={height}
							onChange={heightHandler}
							placeholder="Write your box size here"
							className="px-2"
						/>
					</div>
					<p style={{ color: "red" }}>{errorMessage}</p>
					<div className="my-3">
						<button type="submit" className="btn btn-primary">
							Add
						</button>
					</div>
				</form>
			</div>
			<div className="d-flex flex-wrap">{box()}</div>
		</div>
	);
};

export default BoxCreator;
