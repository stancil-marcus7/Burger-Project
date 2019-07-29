import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.module.css'

const logo = (props) => (
    // When the logo is in the Toolbar component on desktops, its height will be %80
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="My Burger"></img>
    </div>
);

export default logo;