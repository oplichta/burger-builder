import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import withRouter from "../../hoc/withRouter/withRouter";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0,
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === "price") {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredients: ingredients, totalPrice: price });
  }

  checkoutCancelledHandler = () => {
    this.props.navigate(-1);
  };

  checkoutContinuedHandler = () => {
    this.props.navigate("/checkout/contact-data");
  };
  
  render() {
    let summary = <p>Loading...</p>;
    if (this.state.ingredients) {
      summary = (
        <div>
          <CheckoutSummary
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
            ingredients={this.state.ingredients}
          />
          <Routes>
            <Route
              path="contact-data"
              element={<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} />}
            />
          </Routes>
        </div>
      );
    }

    return summary;
  }
}

export default withRouter(Checkout);
