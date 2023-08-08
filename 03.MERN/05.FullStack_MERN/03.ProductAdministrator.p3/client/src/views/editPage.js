import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditPage = () => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------

	const [products, setProducts] = useState();
	const [loading, setLoading] = useState(true);

	const navigate = useNavigate();
	const params = useParams();

	const getOneProduct = useCallback(async () => {
		try {
			const res = await axios.get(
				"http://localhost:8000/products/" + params.id
			);
			setProducts(res.data);
			setLoading(false);
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	}, [params.id]);

	useEffect(() => {
		if (loading) {
			getOneProduct();
		}
	}, [loading, getOneProduct]);
	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		try {
			console.log(products.data[0]);
			await axios.put(
				"http://localhost:8000/products/" + params.id,
				{
					title: products.data[0].title,
					price: products.data[0].price,
					description: products.data[0].description,
				}
			);
			navigate("/");
		} catch (error) {
			console.error(error);
		}
	};

	const onChangeProductHandler = (e, index) => {
		const updatedProducts = [...products.data];
		updatedProducts[index][e.target.name] = e.target.value;
		setProducts({ ...products, data: updatedProducts });
	};
	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------

	const renderInputField = (label, value, index) => (
		<div className="d-flex bg-dark bg-opacity-10 rounded my-2">
			<label className="py-2 ps-3 w-25">{label}</label>
			<input
				type="text"
				onChange={(e) => onChangeProductHandler(e, index)}
				name={label.toLowerCase()}
				value={value}
				className="w-75 m-2 px-2"
			/>
		</div>
	);

	return (
		<div className="d-flex justify-content-center">
			{products &&
				products.data.map((product, index) => {
					return (
						<form key={index} onSubmit={onSubmitHandler} className="w-50">
							{renderInputField("Title", product.title, index)}
							{renderInputField("Price", product.price, index)}
							{renderInputField("Description", product.description, index)}
							<div className="d-flex justify-content-center">
								<button
									type="submit"
									className="btn btn-success opacity-50 w-25 mt-4 mb-2"
								>
									Update
								</button>
							</div>
						</form>
					);
				})}
		</div>
	);
};

export default EditPage;
