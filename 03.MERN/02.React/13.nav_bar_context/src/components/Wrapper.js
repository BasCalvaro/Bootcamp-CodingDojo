import React from "react";
import Navbar from "./NavBar";
import FormWrapper from "./FormWrapper";
import { UserProvider } from "../contexts/UserContext";

const Wrapper = ({ children }) => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------

	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------

	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------

	return (
      <UserProvider>
        <div>
          <Navbar />
          <FormWrapper />
        </div>
      </UserProvider>
    );
  };
  
  export default Wrapper;
