import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, Link } from "react-router-dom";

import Form from "./components/Form";
import Results from "./components/Results";
import PersonDetail from "./components/personDetail"

function App() {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------

	const [starWarsElement, setStarWarsElement] = useState({
		field: "",
		id: "",
	});

	const [sendRequest, setSendRequest] = useState(false);

	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------

	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------
	return (
		<div className="container">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link to="/" className="navbar-brand">
					<h1>Luke APIWalker</h1>
				</Link>
			</nav>
			<div className="mt-3">
				<Form
					starWarsElement={starWarsElement}
					setStarWarsElement={setStarWarsElement}
					setSendRequest={setSendRequest}
				/>
				<Routes>
					<Route path="/" element={<h2>Welcome to Luke APIWalker!</h2>} />
					<Route
						path="/:field/:id"
						element={
							<Results
								starWarsElement={starWarsElement}
								setStarWarsElement={setStarWarsElement}
								sendRequest={sendRequest}
								setSendRequest={setSendRequest}
							/>
						}
					/>
          <Route path="/people/:id" element={<PersonDetail />} />
          <Route path="/:id" element={<PersonDetail />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
