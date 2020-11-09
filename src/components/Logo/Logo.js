import React from 'react';
import './Logo.css';
import burgerlogo from '../../assets/images/burger-logo.jpeg';
const logo=(props) =>(
    <div className="Logo" style={{height: props.height}}>
        <img src={burgerlogo} alt="my burger"/>
    </div>


);

export default logo;