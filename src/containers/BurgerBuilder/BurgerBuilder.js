import React, { Component } from 'react';
import Aud from '../../hoc/Aud';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  render() {
    return (
      <Aud>
        <Burger />
        <div>Build Controls</div>
      </Aud>
    );
  }
}

export default BurgerBuilder;
