import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const controls=[
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildcontrols=(props) => (
    <div className="BuildControls">
         <p>CURR PRICE: {props.price}</p>
        {controls.map(ctrl=>(
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            type={ctrl.type} 
            added={() => props.ingredientsAdded(ctrl.type)}
            removed={() => props.ingredientsRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]} />
        ))}
        <button className="OrderButton"
        disabled={!props.purchasable} 
        onClick={props.ordered}>ORDER NOW</button>
    </div>
);
export default buildcontrols;