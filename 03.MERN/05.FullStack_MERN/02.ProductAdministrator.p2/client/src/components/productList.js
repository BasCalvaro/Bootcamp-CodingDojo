import React from "react";
import { Link } from "react-router-dom";

const ProductsList = (props) => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------

	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------

	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------

	return (
		<div className="row justify-content-center text-center">
			<h1>All Products:</h1>
			<ul className="list-group w-25">
				{props.product.data.map((product, index) => {
					return (
						<li key={index} className="list-group-item">
							<Link to={"/products/" + product._id}>
								<u>{product.title}</u>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ProductsList;
