import React from 'react';
import classes from "./SideDrawer.module.css";
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NativationItems'
import Backdrop from "../../UI/Backdrop/Backdrop"
import Aux from '../../../hoc/Aux'
import ToggleButton from '../SideDrawer/ToggleButton/ToggleButton'

const sideDrawer = (props) => {
    let showSideDrawer = [classes.SideDrawer, classes.Close]

    if (props.open){
        showSideDrawer = [classes.SideDrawer, classes.Open]
    }

    return (
        <Aux>
            {/* Once the backdrop is clicked, it will disappear */}
            <Backdrop show={props.open} clicked={props.closed}/>
                <div className={showSideDrawer.join(' ')}>
                    <div className={classes.Logo}>
                        <Logo/>
                    </div>
                        <nav>
                            <NavigationItems/>
                        </nav>
                </div>
        </Aux>
    );
};

export default sideDrawer;