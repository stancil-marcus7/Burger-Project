import React, {Component} from 'react'

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

//This component will house the summary of the order
class OrderSummary extends Component {
    componentDidUpdate(){
        console.log("[OrderSummary] ComponentDidUpdate")
    }
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return(<li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>)
        })
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Check Out?</p>
                <Button btnType={"Danger"} click={this.props.cancelPurchase}>CANCEL</Button>
                <Button btnType={"Success"} click={this.props.purchase}>CONTINUE</Button>
            </Aux>
    );
    
    }
}
    
    
    

export default OrderSummary;