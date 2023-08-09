import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteButton = (props) => {
	//-----------------------------------
	// I) HOOKS & VARIABLES
	// ----------------------------------

	const { product, setLoading, origin } = props;

	// Navigate Hooks
	const navigate = useNavigate();

	//-----------------------------------
	// II) HANDLERS
	// ----------------------------------

	const deleteProduct = async (productID) => {
		try {
			const res = await axios.delete(
				"http://localhost:8000/products/" + productID
			);
			console.log(res);
			setLoading(true);
			if (origin === "details") {
				navigate("/");
			}
		} catch (err) {
			console.log(err);
		}
	};

	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------

	return (
		<>
			<button
				className="mx-1 btn btn-danger opacity-75 btn-sm"
				onClick={(e) => deleteProduct(product._id)}
			>
				Delete
			</button>
		</>
	);
};

export default DeleteButton;
