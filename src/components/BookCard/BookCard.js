import React, {Component} from 'react';
import './bookcard.css';



export default class BookCard extends Component {
    render(){
        return (
            <div className='card-container'>
              <img src={this.props.image} alt=""></img>
              <span>{this.props.title}</span>
              <span>{this.props.author}</span>
              <button>Add to wishlist</button>
              <button className="buy">Buy</button>
            </div>
        )
    }
};

