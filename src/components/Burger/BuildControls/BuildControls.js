import React from 'react';
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const buildControls = (props) => (

    <div className={classes.BuildControls}>
        {/* Where the price will be displayed */}
        <p>Current Price: $<strong>{props.price.toFixed(2)}</strong></p>

        {/* This maps the label and type for each of the ingredients for the controls */}
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                add={() => props.add(ctrl.type)}
                delete={() => props.delete(ctrl.type)}
                //We need the type to see which ingredient's "less" button should be disabled
                disabled={props.disabled[ctrl.type]}/>
        ))}
        <button className={classes.OrderButton} disabled={!props.purchaseable}>ORDER NOW</button>
    </div>
)

export default buildControls;