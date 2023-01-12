import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/lib/styles.scss";

function CreditCardNpm() {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  return (
    <div id="PaymentForm">
      <Cards cvc={this.state.cvc} expiry={this.state.expiry} focused={this.state.focus} name={this.state.name} number={this.state.number} />
      <form>
        <input type="tel" name="number" placeholder="Card Number" onChange={this.handleInputChange} onFocus={this.handleInputFocus} />
      </form>
    </div>
  );
}

export default CreditCardNpm;
