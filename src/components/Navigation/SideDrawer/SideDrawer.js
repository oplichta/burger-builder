import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aud from '../../../hoc/Aud/Aud';

const sideDrawer = (props) => {
  let attachedClasses = ['SideDrawer', 'Close'];
  if (props.open) {
    attachedClasses = ['SideDrawer', 'Open'];
  }
  return (
    <Aud>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className="Logo-wrapper">
          <Logo />
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aud>
  );
};

export default sideDrawer;
