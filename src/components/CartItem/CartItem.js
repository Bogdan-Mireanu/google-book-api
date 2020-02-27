import React, {Component} from 'react';
import './cartitem.css';



export default class CartItem extends Component{
    render(){
        return (
           <div className="cart-container">
               <span>{this.props.title}</span>
           </div>
        )
    }
};