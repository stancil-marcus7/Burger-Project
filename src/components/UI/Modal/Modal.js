import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import React from 'react';

const modal = (props) => (
    <Aux>
    <div className={classes.Modal}>
        {props.children}
    </div>
    </Aux>
)

export default modal;