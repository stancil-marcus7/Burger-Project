import React from 'react';
import classes from "./SideDrawer.module.css";
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NativationItems'

const sideDrawer = (props) => {
    return (
        <div className={classes.SideDrawer}>
            <Logo height="11%"/>
                <nav>
                    <NavigationItems/>
                </nav>
        </div>
    );
};

export default sideDrawer;