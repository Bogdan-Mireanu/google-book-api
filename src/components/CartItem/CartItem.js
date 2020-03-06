import React, {Component} from 'react';
import './cartitem.css';



export default class CartItem extends Component{
    render(){
        return (
           <div className="cart-container">
              <span><b>{this.props.count}x</b></span> 
            
              <span>{this.props.title}  <span>&#9733;</span> {this.props.author}</span> 
              <button type='button' onClick={this.props.decrease.bind(this,this.props.bookId)}><b>-</b></button>
              <button type='button' onClick={this.props.add.bind(this,this.props.bookId)}><b>+</b></button>
              <button type='button' onClick={()=>this.props.remove(this.props.bookId)}>X</button>
            </div>
        )
    }
};