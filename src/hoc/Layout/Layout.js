import React, {Component} from 'react';
import Aux from '../Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

//Layout will house the Tookbar, SideDrawer, and Backdrop components
class Layout extends Component {
    state = {
        showSideDrawer: false
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