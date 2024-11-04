import React from "react";
import "./Orders";

const order = (props) => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }
  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });
  return (
    <div className="Order">
      <div className="customer-container">
        <div>
          Customer: <strong>{props.customer.name}</strong>
        </div>
        <div>
          Email: <strong>{props.customer.email}</strong>
        </div>
      </div>

      <p>Ingredients: {ingredientOutput} </p>
      <p>
        Price: <strong>PLN {props.price.toFixed(2)}</strong>
      </p>
      <button onClick={props.onComplete}>Complete</button>
    </div>
  );
};

export default order;
