import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductForm from "../components/productForm";
import ProductList from "../components/productList";

function Main() {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------
	const [product, setProducts] = useState([]);
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		axios.get("http://localhost:8000/products/").then((res) => {
			setProducts(res.data);
			setLoaded(true);
		});
	}, []);
	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------

	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------

	return (
		<div className="col p-3">
			<ProductForm />
			<hr />
			{loaded && <ProductList product={product} />}
		</div>
	);
}

export default Main;
