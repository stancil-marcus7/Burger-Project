import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        {/* If navigation item is active it will be assigned the .NavigationItem active class */}
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Check Out</NavigationItem>
    </ul>
);

export default navigationItems;