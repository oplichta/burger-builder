import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  const ingredientToArray = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  });
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {ingredientToArray}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
