import React from 'react';
import classes from "./Toolbar.module.css"
import Logo from '../Logo/Logo'
import NavigationItems from '../Navigation/NavigationItems/NativationItems'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo height="80"/>      
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;