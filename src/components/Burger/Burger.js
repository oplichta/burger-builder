import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  let dynamicIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (dynamicIngredients.length === 0) {
    dynamicIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {dynamicIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
