import React from 'react';
import classes from './BuildControl.module.css'

//This component is used to add and remove BurgerIngredients
const buildControl = (props) => (
    <div className={classes.BuildControl}> 
        {/* Receives the "label" prop from the BuildControl component in the BuildControls component  */}
        <div className={classes.Label}>{props.label}</div>
        <button onClick={props.delete} className={classes.Less} disabled={props.disabled}>Less</button>
        <button  onClick={props.add}className={classes.More}>More</button>
    </div>
);

export default buildControl;