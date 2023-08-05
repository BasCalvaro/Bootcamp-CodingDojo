import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import AddManager from "./components/addManager";

function App() {
	return (
		<div className="bg-light">
			<div className="row justify-content-center">
				<div className="col-6 py-4">
					<h2 className="bg-body-secondary p-3 rounded-4 text-center">
						ToDo List to Get Mern Black belt
					</h2>
					<AddManager />
				</div>
			</div>
		</div>
	);
}

export default App;
