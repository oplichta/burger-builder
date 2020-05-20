import React, { Component } from 'react';
import './Modal.css';
import Aud from '../../../hoc/Aud/Aud';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    return (
      <Aud>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}></Backdrop>
        <div
          className="Modal"
          style={{ transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: this.props.show ? '1' : '0' }}
        >
          {this.props.children}
        </div>
      </Aud>
    );
  }
}

export default Modal;
