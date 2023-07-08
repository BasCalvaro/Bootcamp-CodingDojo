import React, {Component} from "react";

class PersonCard extends Component{
	render() {
		const { firstName, lastName, age, hairColor } = this.props;
		return (
			<div>
				<div className="w-25 mx-auto">
					<h1>
						{lastName}, {firstName}
					</h1>
					<p>Age: {age} </p>
					<p>Hair Color: {hairColor}</p>
				</div>
			</div>
		);
	}
}

export default PersonCard;