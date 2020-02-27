import React, {Component} from 'react';
import './header.css';



export default class Header extends Component{
    render(){
        return (
            <header>
                <i className="fas fa-book-reader fa-5x"></i>
                <h1>Google Books App</h1>
            </header>
        )
    }
};

