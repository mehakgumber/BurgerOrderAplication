import React from 'react';
import './NavigationItem.css';

const navigationitem=(props)=>(

    <li className="NavigationItem">
        <a href="/">{props.children}</a>

    </li>

);
export default navigationitem;