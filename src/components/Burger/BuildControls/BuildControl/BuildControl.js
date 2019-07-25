import React from 'react';
import classes from './BuildControl.module.css'

//This component is used to add and remove BurgerIngredients
const buildControl = (props) => (
    <div className={classes.BuildControl}> 
        {/* Receives the "label" prop from the BuildControl component in the BuildControls component  */}
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>
);

export default buildControl;