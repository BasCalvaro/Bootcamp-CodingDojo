import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Pages from "./components/pages";

function App() {
	return (
		<div className="p-3 text-center">
			<Routes>
				<Route path="/home" element={<Pages />} />
				<Route
					path="/:firstParameter/:fontColor/:backColor"
					element={<Pages />}
				/>
				<Route path="/:firstParameter/:fontColor" element={<Pages />} />
				<Route path="/:firstParameter" element={<Pages />} />				
				<Route path="/" element={<Pages />} />
			</Routes>
		</div>
	);
}

export default App;
