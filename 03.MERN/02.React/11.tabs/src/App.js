import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import TabManager from "./components/tabManager";

function App() {
	return (
		<div className="bg-light">
			<div className="row justify-content-center">
				<div className="col-4 p-4">
					<TabManager />
				</div>
			</div>
		</div>
	);
}

export default App;
