import React, {Component} from 'react';
import SearchArea from './components/SearchArea/SearchArea';
import BookList from './components/BookList/BookList';
import CartItem from './components/CartItem/CartItem';
import Loader from './components/Loader/Loader'
import axios from 'axios';
import './books.css';



export default class Books extends Component{
    constructor(props){
        super(props);
        this.state={
            books:[],
            searchField: '',
            loader1: false
        }
    }
    

   searchBook = (e) => {
       e.preventDefault();
       axios.get("https://www.googleapis.com/books/v1/volumes?q="+this.state.searchField+"")
       .then(data => {
          this.setState({
              books:[...data.data.items]
          });
      }); 
       if(this.state.books === [])
       this.setState({loader1:true})
    }


    handleSearch = (e) => {
        
        this.setState({
            searchField: e.target.value
        })
    }

    render(){
       if(!this.state.loader1)
        return (
            <div>
            <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch}/>
            <BookList books={this.state.books}/>
            <CartItem/>
            </div>
        );
        else 
        return (
            <div>
            <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch}/>
            <Loader/>
            <BookList books={this.state.books}/>
            <CartItem/>
            </div>
        )
    }
};

