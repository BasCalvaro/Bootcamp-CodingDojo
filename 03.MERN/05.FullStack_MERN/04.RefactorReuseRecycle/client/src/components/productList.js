import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import DeleteButton from "../components/deleteButton";

const ProductsList = (props) => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------
	const { loading, setLoading } = props;
	
	// State Hooks
	const [products, setProducts] = useState();

	// Navigate Hooks
	const navigate = useNavigate();

	const getAllProducts = useCallback(async () => {
		await axios.get("http://localhost:8000/products/").then((res) => {
			setProducts(res.data);
			setLoading(false);
		});
	}, [setLoading]);

	useEffect(() => {
		if (loading) {
			getAllProducts();
		}
	}, [loading, getAllProducts]);
	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------

	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------

	return (
		<div className="row justify-content-center">
			<h1 className="text-center">All Products:</h1>
			<ul className="list-group w-50">
				{products &&
					products.data.map((product, index) => {
						return (
							<li
								key={index}
								className="list-group-item d-flex justify-content-between align-items-center"
							>
								<Link to={"/products/" + product._id}>
									<u>{product.title}</u>
								</Link>
								<div>
									<button
										type="button"
										className="btn btn-info opacity-75 mx-1 btn-sm"
										onClick={() => navigate(`/products/${product._id}/edit`)}
									>
										Edit
									</button>
									<DeleteButton product={product} setLoading={setLoading} />
								</div>
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default ProductsList;
