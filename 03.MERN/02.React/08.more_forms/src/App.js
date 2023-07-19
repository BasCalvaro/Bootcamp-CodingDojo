import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import Form from "./components/Form.js";

function App() {
	const [state, setState] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	return <Form details={state} setDetails={setState}></Form>;
}

export default App;
