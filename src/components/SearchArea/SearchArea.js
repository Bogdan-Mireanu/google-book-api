import React, {Component} from 'react';
import './searcharea.css';



export default class SearchArea extends Component {
    render(){
        return (
            <div className='search-area'>
                <form onSubmit={this.props.searchBook} action=''>
                    <input type='text' onChange={this.props.handleSearch} placeholder='Search for books' autoFocus/>
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
};


