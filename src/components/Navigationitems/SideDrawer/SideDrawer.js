import React from 'react';
import './SideDrawer.css';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
const sidebar=(props) =>{
    // const attachedClasses="SideDrawer Close"
    // if(props.open){
    //     attachedClasses="SideDrawer Open"
    // }
    return (
        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
         <div className={ props.open ? 'SideDrawer Open' : 'SideDrawer Closed'}>
          <Logo className="Logo"/>
          <nav>
              <Navigationitems />
          </nav>
        </div>
        </Aux>
    )
};
export default sidebar;