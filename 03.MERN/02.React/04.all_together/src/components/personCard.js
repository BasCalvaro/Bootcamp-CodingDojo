import React, { Component } from "react";
import Button from "./Button.js";

class PersonCard extends Component {
	constructor(props) {
    super(props);
    this.state = {
      age: this.props.age
    };
  }

	handleButtonClick() {
    this.setState((prevState) => ({ age: prevState.age + 1 }));
  }
	
  render() {
    const { firstName, lastName, hairColor } = this.props;
    const { age } = this.state;

    return (
      <div>
        <div className="w-25 mx-auto">
          <h1>
            {lastName}, {firstName}
          </h1>
          <p>Age: {age} </p>
          <p>Hair Color: {hairColor}</p>
        </div>

        <Button
          text="Birthday Button for"
          onButtonClick={this.handleButtonClick.bind(this)}
          firstName={firstName}
          lastName={lastName}
        />
      </div>
    );
  }
}

export default PersonCard;
