import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import React, {Component} from 'react';
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component{
    
    //Will restrict modal from rendering until the show property is different from the previous state's
    shouldComponentUpdate ( nextProps, nextState ){
        return nextProps.show !== this.props.show;
    }

    componentDidUpdate () {
        console.log('[Modal] WillUpdate')
    }
    
    render(){
        return(
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={classes.Modal} style={{
                    //If props.show is true the modal will show, if now it will slide out the way
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    //If props.shpw is true the opacity will be 1; if not it will be zero
                    opacity: this.props.show ? '1':'0'
                }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;