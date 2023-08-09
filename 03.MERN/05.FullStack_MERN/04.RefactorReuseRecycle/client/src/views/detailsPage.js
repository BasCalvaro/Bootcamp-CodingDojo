import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

import DeleteButton from "../components/deleteButton";

const DetailsPage = () => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------

	// State Hooks
	const [products, setProducts] = useState();
	const [loading, setLoading] = useState(true);

	// Param Hooks
	const params = useParams();

	// Navigate Hooks
	const navigate = useNavigate();

	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------

	const getProductDetail = useCallback(async () => {
		await axios
			.get("http://localhost:8000/products/" + params.id)
			.then((res) => {
				setProducts(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [params.id]);

	useEffect(() => {
		if (loading) {
			getProductDetail();
		}
	}, [loading, getProductDetail]);

	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------
	return (
		<div className="p-3">
			<h1 className="mb-3">Products Details</h1>
			{products &&
				products.data.map((product, index) => {
					return (
						<div key={index}>
							<h3>{product.title}</h3>
							<ul>
								<li>Price: ${product.price}</li>
								<li>Description: {product.description}</li>
							</ul>
							<div className="col-5">
								<button
									type="button"
									className="btn btn-info opacity-75 m-2 btn-sm"
									onClick={() => navigate(`/products/${params.id}/edit`)}
								>
									Edit
								</button>
								<DeleteButton
									origin={"details"}
									product={product}
									setLoading={setLoading}
								/>
							</div>
						</div>
					);
				})}
			<hr />
			<div className="mt-2">
				<Link to={"/"}>Back to Home</Link>
			</div>
		</div>
	);
};

export default DetailsPage;
