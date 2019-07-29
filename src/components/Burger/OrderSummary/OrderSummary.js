import React from 'react'
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

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
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Check Out?</p>
            <Button btnType={"Danger"} click={props.cancelPurchase}>CANCEL</Button>
            <Button btnType={"Success"} click={props.purchase}>CONTINUE</Button>
        </Aux>
);
}

export default orderSummary;