import React, { useState } from "react";
import axios from "axios";

const ProductForm = (props) => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------

	const { setLoading } = props;
	const [productTitle, setProductTitle] = useState("");
	const [productPrice, setProductPrice] = useState("");
	const [productDescription, setProductDescription] = useState("");

	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------

	const onSubmitHandler = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8000/products", {
				title: productTitle,
				price: productPrice,
				description: productDescription,
			})
			.then((res) => {
				setLoading(true);
				console.log(res);
				setProductTitle("");
				setProductPrice("");
				setProductDescription("");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const renderInputField = (label, value, onChange) => (
		<div className="d-flex bg-dark bg-opacity-10 rounded my-2">
			<label className="py-2 ps-3 w-25">{label}</label>
			<input
				type="text"
				onChange={onChange}
				value={value}
				className="w-75 m-2 px-2"
			/>
		</div>
	);

	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------

	return (
		<div className="d-flex justify-content-center">
			<form onSubmit={onSubmitHandler} className="w-50">
				{renderInputField("Title", productTitle, (e) =>
					setProductTitle(e.target.value)
				)}
				{renderInputField("Price", productPrice, (e) =>
					setProductPrice(e.target.value)
				)}
				{renderInputField("Description", productDescription, (e) =>
					setProductDescription(e.target.value)
				)}
				<div className="d-flex justify-content-center">
					<button
						type="submit"
						className="btn btn-success opacity-50 w-25 mt-4 mb-2"
					>
						Create
					</button>
				</div>
			</form>
		</div>
	);
};

export default ProductForm;
