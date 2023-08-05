import { createContext, useState } from "react";

// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------

const UserContext = createContext();

// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------

const UserProvider = ({ children }) => {
	const [username, setUsername] = useState("");

	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------

	return (
		<UserContext.Provider value={{ username, setUsername }}>
			{children}
		</UserContext.Provider>
	);
};

export { UserContext, UserProvider };
