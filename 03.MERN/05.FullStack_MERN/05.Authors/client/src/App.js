import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Main from "./views/main";
import AuthorsForm from "./views/authorsForm";

function App() {
	return (
		<div>
			<h1 className="pt-3 px-3">Favorite Authors</h1>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/new" element={<AuthorsForm formType={"create"} />} />
				<Route path="/edit/:id/" element={<AuthorsForm formType={"edit"} />} />
			</Routes>
		</div>
	);
}
export default App;
