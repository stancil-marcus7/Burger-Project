import React from 'react';
import classes from "./Toolbar.module.css"
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NativationItems'
import ToggleButton from '../SideDrawer/ToggleButton/ToggleButton'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <ToggleButton clicked={props.clicked}/>
        <Logo height="80%"/>      
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;