import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'


const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 2,
    cheese: 1,
    meat: 3
}

//This component is where the controls to build the burger and the actual burger will be shown
class BurgerBuilder extends Component {
    // Old way of doing state
    // constructor(props) {
    //     super(props)
    //     this.state {...}
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        //Used to determine if the burger can be ordered
        purchaseable: false,
        //Used to determine if the user wants to purchase the burger
        purchasing: false
    }

    updatePurchaseState(ingredients){

        const sum = Object.keys(ingredients)
            .map(igKey =>{
                //Maps the values into an array
                return ingredients[igKey];
            }).reduce((sum, el) => {
                //Reduces values into single number for "sum"
                return sum + el
            }, 0)
            //If sum if more than 0 than the burger is purchaseable
            this.setState({purchaseable: sum > 0})
    }

    addIngredientHandler = (type) => {
        //Gets the previous account of the ingredients
        const oldCount = this.state.ingredients[type];

        //Updates the ingredient count
        const updatedCount = oldCount + 1;

        //Makes another array so that we can change the state immutably
        const updatedIngredients = {
            ...this.state.ingredients
        }

        //Update the ingredients in the new array
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];

        const newPrice = this.state.totalPrice + priceAddition;

        //Set the state
        this.setState({ingredients : updatedIngredients,
                        totalPrice: newPrice});

        this.updatePurchaseState(updatedIngredients)
    }

    deleteIngredientHandler = (type) => {
        //Gets the previous account of the ingredients
        const oldCount = this.state.ingredients[type];


        //If their are no instaces of this ingredient already, nothing will happen
        if (oldCount === 0){
            return;
        }

        //Updates the ingredient count
        const updatedCount = oldCount - 1;

        //Makes another array so that we can change the state immutably
        const updatedIngredients = {
            ...this.state.ingredients
        }

        //Update the ingredients in the new array
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];

        const newPrice = this.state.totalPrice - priceAddition;

        //Set the state
        this.setState({ingredients : updatedIngredients,
                        totalPrice: newPrice});
    
                        this.updatePurchaseState(updatedIngredients)
    }

    //If the user clicks order now; it turns the purchasing state to true
    purchaseHandler = () =>{
        this.setState({purchasing: true});
    }

    //Closes the modal
    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        const order = {
            ingredients: this.state.ingredients,
            //Would not calculate price here, would do this on the server
            price: this.state.totalPrice,
            customer: {
                name: 'Marcus Stancil',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        //Used to disable the less button if their is none of a certain ingredient on a burger
        //Copies ingredients array in state
        const disabledInfo = {
            ...this.state.ingredients
        };

        //If disabledKey is less than or equal to zero it will be true
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        purchase={this.purchaseContinueHandler}
                        cancelPurchase={this.purchaseCancelHandler}
                        price={this.state.totalPrice}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} decision/>
                <BuildControls 
                    add={this.addIngredientHandler} 
                    delete={this.deleteIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;