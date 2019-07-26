import React from 'react'
import Aux from '../../../hoc/Aux';

//This component will house the summary of the order
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return(<li>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>)
        })
    
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Check Out?</p>
            <button>CANCEL</button>
            <button>CONTINUE</button>
        </Aux>
);
}

export default orderSummary;