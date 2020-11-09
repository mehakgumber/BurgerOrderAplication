import DrawerTool from '../SideDrawer/DrawerTool/DrawerTool';
import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems';
const toolbar=(props) =>(
    <header className="Toolbar">
        <DrawerTool clicked={props.drawerclicked}/>
        <div className="Logo">
        <Logo />
        </div>
        <nav className="DesktopOnly">
           <Navigationitems/>
        </nav>
    </header>
);
export default toolbar;