import React from 'react';
import './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal=({show,modalclosed,children})=>(
    <Aux>
        <Backdrop show={show} clicked={modalclosed}/>
     <div className="Modal"
         style={{
             transform: show ? 'translateY(0)' : 'translateY(-100vh)',
             opacity: show ? '1': '0'
         }}>
         {children}
     </div>
     </Aux>
);
export default modal;