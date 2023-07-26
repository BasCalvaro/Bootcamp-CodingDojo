import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Wrapper from "./components/Wrapper";
import FormWrapper from "./components/FormWrapper";
import { UserProvider } from "./contexts/UserContext";

function App() {
	return (
		<UserProvider>
			<Wrapper>
				<FormWrapper />
			</Wrapper>
		</UserProvider>
	);
}

export default App;
