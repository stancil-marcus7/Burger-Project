import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

//Layout will house the Tookbar, SideDrawer, and Backdrop components
const layout = (props) => (
    <Aux>
        <div>
            Toolbar SideDrawer Backdrop
        </div>
        {/* The CSS for main is used to put distance between the BurgerBuilder component and the components in Layout */}
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout;