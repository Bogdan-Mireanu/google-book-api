import React, {Component} from 'react';
import { delay } from './utils';
import { CONFIG } from './CONFIG';
import SearchArea from './components/SearchArea/SearchArea';
import BookList from './components/BookList/BookList';
import Loader from './components/Loader/Loader';
import axios from 'axios';
import './books.css';



export default class Books extends Component{
    constructor(props){
        super(props);
        this.state={
            books:[],
            searchField: '',
            loaded: false,
            loading: false,
            hasError: false,  
        };
    }
    

   searchBook = (e) => {
       e.preventDefault();
        this.setState({
            loading: true
        });

        this.getBooks()
            .then((delay(CONFIG.APP_DELAY)))
            .then((response) => {
                this.setState({
                    books: [...response.data.items],
                    loading: false,
                    loaded: true
                });
            })
            .catch((err)=> {
                console.log({err});
                this.setState({
                    books: [],
                    loaded: true,
                    loading: false,
                    hasError: true,
                });
            });
        if (this.state.books === [])this.setState({loaded:true, loading:false,hasError:false});


    };

        getBooks(){
        return axios.get("https://www.googleapis.com/books/v1/volumes?q="+this.state.searchField+"");
    }

    handleSearch = (e) => {
        this.setState({
            searchField: e.target.value
        })
    }

 
    render(){
       if(this.state.loading)
          return (
                <div>
                <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch}/> 
                <Loader/>
                </div>
            );
        if(this.state.loaded && this.state.hasError)
            return (
                <div>
                <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch}/> 
                <div>Something went wrong</div>
                </div>
            );
        if (this.state.loaded && !this.state.books.length) {
            return (
                <div>
                    <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} />
                    No results
                </div>
            );
        }
        if (this.state.loading && this.state.books.length) {
            return (
                <div>
                    <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} />
                    <BookList books={this.state.books} />
                </div>
            );
        }

        return (
            <div>
                <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} />
                <BookList books={this.state.books}/>
            </div>
        );
    }
}

