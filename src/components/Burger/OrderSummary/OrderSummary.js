import React from 'react';
import Aux from '../../../hoc/Aux';
import './OrderSummary.css';
import'../../UI/Button/Button.css';
import Button from '../../UI/Button/Button';

const ordersummary=(props) => {
    const ingredientSummary=Object.keys(props.ingredients)
    .map(igKey =>{
        return<li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
    });

    return(
   <Aux>
      <h1>YOUR ORDER:</h1>
      <p>A DELICIOUS BURGER WITH INGREDIENTS:</p>
       <u1>
       
         {ingredientSummary}
       
       </u1>
       <p><strong>total price: {props.price.toFixed(2)}</strong></p>
       <p>CONTINUE TO CHECKOUT?</p>
        <Button classname={"Danger"} clicked={props.purchaseCanceled}>Cancel</Button>
        <Button classname={"Danger"} clicked={props.purchaseContinued}>Continue</Button>
        
   </Aux>
    );
};
export default ordersummary;