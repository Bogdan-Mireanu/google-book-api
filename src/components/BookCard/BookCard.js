import React, {Component} from 'react';
import './bookcard.css';



export default class BookCard extends Component {

    render(){
        return (
            <div className='card-container'>
              <img src={this.props.image} alt=""/>
              <span>{this.props.title}</span>
              <span>{this.props.author}</span>
              <button type='button' 
              onClick={this.props.addBookToCart.bind(this,this.props.bookId)} 
              className="buy">Buy</button>
              <input type='checkbox' name='checkIt'/>
              <label>Did you read it?</label>
            </div>
        )
    }
};

