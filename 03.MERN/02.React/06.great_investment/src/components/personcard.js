import React from "react";

const PersonCard = (props) => {
	return (
		<div>
			<div className="w-25 mx-auto">
				<h1>
					{props.lastName}, {props.firstName}
				</h1>
				<p>Age: {props.age} </p>
				<p>Hair Color: {props.hairColor}</p>
			</div>
		</div>
	);
};

export default PersonCard;