import React from 'react';
import './Modal.css';
import Aud from '../../../hoc/Aud';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
  <Aud>
    <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
    <div className="Modal" style={{ transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0' }}>
      {props.children}
    </div>
  </Aud>
);

export default modal;
