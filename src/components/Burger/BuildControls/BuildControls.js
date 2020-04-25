import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => (
  <div className="BuildControls">
    <p>
      Current Price: <strong>{props.totalPrice.toFixed(2)}</strong>
    </p>
    {controls.map((crtl) => (
      <BuildControl
        key={crtl.label}
        label={crtl.label}
        added={() => props.ingredientAdded(crtl.type)}
        removed={() => props.ingredientRemoved(crtl.type)}
        disabled={props.disabled[crtl.type]}
      />
    ))}
  </div>
);

export default BuildControls;
