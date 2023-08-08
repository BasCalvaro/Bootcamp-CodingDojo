import React, { useState } from "react";

import ProductForm from "../components/productForm";
import ProductList from "../components/productList";

const Main = () => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------

	const [loading, setLoading] = useState(true);

	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------

	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------

	return (
		<div className="col p-3">
			<ProductForm 
				loading={loading} 
				setLoading={setLoading}
			/>
			
			<hr />

			<ProductList 
				loading={loading} 
				setLoading={setLoading}
			/>
		</div>
	);
};

export default Main;
