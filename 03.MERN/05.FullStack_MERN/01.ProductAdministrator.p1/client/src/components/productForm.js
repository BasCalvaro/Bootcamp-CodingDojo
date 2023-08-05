import React, { useState } from "react";
import axios from "axios";

export default () => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------

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
			.then((res) => 
			console.log(res),
			setProductTitle(""),
			setProductPrice(""),
			setProductDescription(""),
			)
			.catch((err) => console.log(err));
			
	};

	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------

	return (
		<form onSubmit={onSubmitHandler} className="w-50">
			<div className="d-flex bg-dark bg-opacity-10 rounded my-2">
				<label className="py-2 ps-3 pe-5 ">Title</label>
				<input
					type="text"
					onChange={(e) => setProductTitle(e.target.value)}
					value={productTitle}
					className="w-100 m-2 px-2"
				/>
			</div>
			<div className="d-flex bg-dark bg-opacity-10 rounded my-2">
				<label className="py-2 ps-3 pe-5 ">Price</label>
				<input
					type="text"
					onChange={(e) => setProductPrice(e.target.value)}
					value={productPrice}
					className="w-100 m-2 px-2"
				/>
			</div>
			<div className="d-flex bg-dark bg-opacity-10 rounded my-2">
				<label className="py-2 ps-3 pe-1">Description</label>
				<input
					type="text"
					onChange={(e) => setProductDescription(e.target.value)}
					value={[productDescription]}
					className="w-100 m-2 px-2"
				/>
			</div>
			<div className="d-flex justify-content-center ">
				{" "}
				<button type="submit" className="btn btn-dark opacity-50 ">Create</button>
			</div>
		</form>
	);
};
