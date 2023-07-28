import React from "react";
import {useParams} from 'react-router-dom';

const Pages = () => {
	// ---------------------------------------------
	// I) VARIABLES & HOOKS
	// ---------------------------------------------

	const {firstParameter, fontColor, backColor} = useParams();

	// ---------------------------------------------
	// II) HANDLERS & AUX FUNCTIONS
	// ---------------------------------------------

	// ---------------------------------------------
	// III) JSX
	// ---------------------------------------------

  return(
    <div>
      {
        (!firstParameter)
        ?<h1>Welcome</h1>
        :(!isNaN(firstParameter))
          ? <h1>The number is: {firstParameter}</h1>
          : (fontColor || backColor)
            ? <h1 style={{color: fontColor, background: backColor}}>The word is: {firstParameter}</h1>
            : <h1>The word is: {firstParameter}</h1>
      }
    </div>
  )

};

export default Pages;
