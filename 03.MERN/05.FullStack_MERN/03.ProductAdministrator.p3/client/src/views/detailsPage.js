import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import axios from "axios";

const DetailsPage = () => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------

	// State Hooks
	const [product, setProduct] = useState({});

	// Param Hooks
	const params = useParams();

	// Navigate Hooks
	const navigate = useNavigate();

	// Context Hooks

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
	}, [params.id]);

	const onClickDelete = async () => {
		try {
			const res = await axios.delete(
				"http://localhost:8000/products/" + params.id
			);
			console.log(res);
			navigate("/");
		} catch (err) {
			console.error(err);
		}
	};

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
					<div className="col-5">
						<button
							type="button"
							className="btn btn-info opacity-75 w-25 m-2"
							onClick={() => navigate(`/products/${params.id}/edit`)}
						>
							Edit
						</button>
						<button
							type="submit"
							className="btn btn-danger opacity-75 w-25 m-2"
							onClick={onClickDelete}
						>
							delete
						</button>
					</div>
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
