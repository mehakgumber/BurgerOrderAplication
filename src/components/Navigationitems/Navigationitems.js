import React from 'react';
import './Navigationitems.css';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationitems=(props)=>(

    <ul className="NavigationItems">
        <a href={props.link} className={props.active ? "active" : null}>{props.children}</a>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/">BCheckout</NavigationItem>
</ul>
);
export default navigationitems;