import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import React from 'react';


const modal = (props) => (
    <Aux>
    <div className={classes.Modal} style={{
        //If props.show is true the modal will show, if now it will slide out the way
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        //If props.shpw is true the opacity will be 1; if not it will be zero
        opacity: props.show ? '1':'0'
    }}>
        {props.children}
    </div>
    </Aux>
)

export default modal;