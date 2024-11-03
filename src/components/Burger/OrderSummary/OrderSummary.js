import React, { Component } from 'react';
import Aud from '../../../hoc/Aud/Aud';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <Aud>
        <h3> Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>Continiue to checkout?</p>
        <p>
          <strong>Total Price: {this.props.price} </strong>
        </p>
        {/*  FIXME :) 
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          Continue
        </Button> */}
      </Aud>
    );
  }
}

export default OrderSummary;
