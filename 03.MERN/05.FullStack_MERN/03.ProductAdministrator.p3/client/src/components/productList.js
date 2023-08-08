import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import DeleteButton from "../components/deleteButton";

const ProductsList = (props) => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------
	const { loading, setLoading } = props;
	const navigate = useNavigate();
	const [products, setProducts] = useState();

	const getAllProducts = useCallback(async () => {
		await axios.get("http://localhost:8000/products/").then((res) => {
			console.log(res.data);
			setProducts(res.data);
			setLoading(false);
		});
	}, [setLoading]);

	useEffect(() => {
		console.log(loading);
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
										onClick={() =>
											navigate(`/products/${product._id}/edit`)
										}
									>
										Edit
									</button>
									<DeleteButton product={products} setLoading={setLoading} />
								</div>
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default ProductsList;
