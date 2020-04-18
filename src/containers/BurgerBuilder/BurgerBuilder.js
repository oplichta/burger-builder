import React, { Component } from 'react';
import Aud from '../../hoc/Aud';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 1,
    },
  };
  render() {
    return (
      <Aud>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Aud>
    );
  }
}

export default BurgerBuilder;
