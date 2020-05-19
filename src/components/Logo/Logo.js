import React from 'react';
import burgerLogo from '../../assets/image/burger-logo.png';
import './Logo.css';

const logo = (props) => (
  <div className="Logo" style={{ height: props.height }}>
    <img src={burgerLogo} alt="BurgerLogo" />
  </div>
);

export default logo;
