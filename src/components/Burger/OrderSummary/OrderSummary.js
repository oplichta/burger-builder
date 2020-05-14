import React from 'react';
import Aud from '../../../hoc/Aud';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
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
        <strong>Total Price: {props.price} </strong>
      </p>
      <Button btnType="Success" clicked={props.purchaseContiniued}>
        Continue
      </Button>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        Cancel
      </Button>
    </Aud>
  );
};

export default orderSummary;
