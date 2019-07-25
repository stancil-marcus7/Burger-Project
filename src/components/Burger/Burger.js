import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

//This component will serve as a wrapper for the BurgerIngredient components
const burger = (props) => {
    //transformedIngredients gets the ingredients from the state of the BurgerBuilder component and transforms them into BurgerIngredients
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i)=>{
                return <BurgerIngredient key={igKey + i} type={igKey}/>
            });
            //This reduces everything to a single array for the BurgerIngredients
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    
    //If no ingredients are present, this message will display between the two burger buns
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please startt adding ingredients!</p>
    }
    
    console.log(transformedIngredients);
    
    return(
        <div className={classes.Burger}>
            {/* Rendering the ingredients */}
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;