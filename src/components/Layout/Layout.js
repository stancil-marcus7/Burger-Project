import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

//Layout will house the Tookbar, SideDrawer, and Backdrop components
class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    toggleButtonHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render(){
        return(
            <Aux>
                <div>
                    <Toolbar clicked={this.toggleButtonHandler}/>
                    <SideDrawer
                        open={this.state.showSideDrawer} 
                        closed={this.sideDrawerClosedHandler}
                        clicked={this.toggleButtonHandler}/>
                </div>
                {/* The CSS for main is used to put distance between the BurgerBuilder component and the components in Layout */}
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
            )
}
}
    


export default Layout;