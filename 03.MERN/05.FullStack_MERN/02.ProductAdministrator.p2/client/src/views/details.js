import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";

const DetailsPage = () => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------

	// State Hooks
	const [product, setProduct] = useState({});

	// Param Hooks
	const params = useParams();

	// Effect Hooks

	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------

	useEffect(() => {
		axios
			.get("http://localhost:8000/products/" + params.id)
			.then((res) => {
				console.log(res);
				setProduct({ ...res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);


	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------
	return (
		<div className="p-3">
			<h1 className="mb-3">Products Details</h1>
			{product.data && (
                <div>
                    <h3>{product.data[0].title}</h3>
                    <ul>
                        <li>Price: ${product.data[0].price}</li>
                        <li>Description: {product.data[0].description}</li>
                    </ul>
                </div>
            )}
			<hr />
			<div className="mt-2">
				<Link to={"/"}>Back to Home</Link>
			</div>
		</div>
	);
};

export default DetailsPage;
