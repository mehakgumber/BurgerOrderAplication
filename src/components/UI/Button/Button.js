import React from 'react';
import './Button.css';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary'

 const button=(props)=>{
     return(
    <div>
     <button className={props.className}
     onClick={props.clicked}>{props.children}</button>  
    
     </div>
     );    
};

 export default button;
