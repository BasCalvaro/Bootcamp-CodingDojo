import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Wrapper from "./components/Wrapper";
import FormWrapper from "./components/FormWrapper";
import NavBar from "./components/NavBar";

function App() {
	return (
			<Wrapper>
        <NavBar/>
				<FormWrapper />
			</Wrapper>
	);
}

export default App;
