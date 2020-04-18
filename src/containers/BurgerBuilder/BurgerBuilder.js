import React, { Component } from 'react';
import Aud from '../../hoc/Aud';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
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
