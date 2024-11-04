import React, { Component } from "react";
import axios from "../../../axios-orders";
import Button from "../../../components/UI/Button/Button";
import "./ContactData.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import withNavigate from "../../../hoc/withNavigate/withNavigate";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: { street: "", postalCode: "" },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: this.state.name,
        address: {
          street: this.state.address.street,
          zipCode: this.state.address.postalCode,
          country: "Poland",
        },
        email: this.state.email,
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.navigate("/orders");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  inputChangedHandler = (event) => {
    const { name, value } = event.target;
    if (name === "street" || name === "postalCode") {
      this.setState((prevState) => ({
        address: {
          ...prevState.address,
          [name]: value,
        },
      }));
    } else {
      this.setState({ [name]: value });
    }
  };

  render() {
    let form = (
      <form>
        <input
          className="Input"
          type="text"
          name="name"
          placeholder="Your Name"
          value={this.state.name}
          onChange={this.inputChangedHandler}
        />
        <input
          className="Input"
          type="email"
          name="email"
          placeholder="Your Email"
          value={this.state.email}
          onChange={this.inputChangedHandler}
        />
        <input
          className="Input"
          type="text"
          name="street"
          placeholder="Street"
          value={this.state.address.street}
          onChange={this.inputChangedHandler}
        />
        <input
          className="Input"
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          value={this.state.address.postalCode}
          onChange={this.inputChangedHandler}
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="ContactData">
        <h4> Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default withNavigate(ContactData);
