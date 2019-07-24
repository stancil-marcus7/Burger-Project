import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

//This component will serve as a wrapper for the BurgerIngredient components
const burger = (props) => {
    return(
        <div className={classes.Burger}>
            {/* Rendering the ingredients */}
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;