import React, { Component } from "react";

class Button extends Component {
	render() {
		const { text, firstName, lastName, onButtonClick } = this.props;
		return (
			<div className="d-flex justify-content-center">
				<button className="btn btn-primary" onClick={onButtonClick}>
					{text} {firstName} {lastName}
				</button>
				<hr />
			</div>
		);
	}
}

export default Button;
