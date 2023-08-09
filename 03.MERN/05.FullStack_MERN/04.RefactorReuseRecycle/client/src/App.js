import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Main from "./views/main";
import Details from "./views/detailsPage";
import Edit from "./views/editPage";

function App() {
	return (
			<div>
				<h1 className="p-3 text-center">Product Manager</h1>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/products/:id" element={<Details />} />
					<Route path="/products/:id/edit" element={<Edit />} formType={"edit"} />
				</Routes>
			</div>
	);
}
export default App;
