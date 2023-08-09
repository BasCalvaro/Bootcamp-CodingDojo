import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductForm = (props) => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------

	const { formType, setLoading } = props;
	const [products, setProducts] = useState({
		title: "",
		price: "",
		description: "",
	});

	const navigate = useNavigate();
	const params = useParams();

	const getOneProduct = useCallback(async () => {
		try {
			const res = await axios.get(
				"http://localhost:8000/products/" + params.id
			);
			setProducts(res.data);
		} catch (error) {
			console.error(error);
		}
	}, [params.id]);

	useEffect(() => {
		if (formType === "edit") {
			getOneProduct();
		} else if (formType === "create") {
			setProducts({
				title: "",
				price: "",
				description: "",
			});
		}
	}, [formType, getOneProduct]);
	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		try {
			if (formType === "create") {
				await axios
					.post("http://localhost:8000/products", {
						title: products.title,
						price: products.price,
						description: products.description,
					})
					.then((res) => {
						setLoading(true);
						console.log(res);
						setProducts({
							title: "",
							price: "",
							description: "",
						});
					});
			} else if (formType === "edit") {
				await axios.put("http://localhost:8000/products/" + params.id, {
					title: products.data[0].title,
					price: products.data[0].price,
					description: products.data[0].description,
				});
				navigate("/");
			}
		} catch (error) {
			console.error(error);
			setLoading(false);
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

	const renderInputField = (label, value, onChange) => (
		<div className="d-flex bg-dark bg-opacity-10 rounded my-2">
			<label className="py-2 ps-3 w-25">{label}</label>
			<input
				type="text"
				onChange={onChange}
				name={label.toLowerCase()}
				value={value}
				className="w-75 m-2 px-2"
			/>
		</div>
	);

	return (
		<div className="d-flex justify-content-center">
			<form onSubmit={onSubmitHandler} className="w-50">
				{formType === "create" ? (
					<>
						{renderInputField("Title", products.title, (e) =>
							setProducts({ ...products, title: e.target.value })
						)}
						{renderInputField("Price", products.price, (e) =>
							setProducts({ ...products, price: e.target.value })
						)}
						{renderInputField("Description", products.description, (e) =>
							setProducts({ ...products, description: e.target.value })
						)}
					</>
				) : (
					products.data &&
					products.data.map((product, index) => {
						return (
							<div key="index">
								{renderInputField("Title", product.title, (e) =>
									onChangeProductHandler(e, index)
								)}
								{renderInputField("Price", product.price, (e) =>
									onChangeProductHandler(e, index)
								)}
								{renderInputField("Description", product.description, (e) =>
									onChangeProductHandler(e, index)
								)}
							</div>
						);
					})
				)}
				<div className="d-flex justify-content-center">
					<button
						type="submit"
						className="btn btn-success opacity-50 w-25 mt-4 mb-2"
					>
						{formType === "create" ? "Create" : "Update"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default ProductForm;
