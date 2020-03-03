import React, {Component} from 'react';
import BookCard from '../BookCard/BookCard';
import './booklist.css';



export default class BookList extends Component {
    constructor(props){
        super(props);
        this.state={
            cartList:[],
             
        };
    }
  
    addToCart(bookId){
        const bookToAdd = this.props.books.find(book => book.bookId === bookId);
        if(bookToAdd){
            return undefined;
        }
        const cartUpdate = this.state.cartList.slice();
        const bookAlreadyAdded = cartUpdate.find((item,i)=>item.id === bookId);

        if(bookAlreadyAdded){
            bookAlreadyAdded.count++;
        }else {
            const newBook = Object.assign({}, bookToAdd);
            newBook.count = 1;
            cartUpdate.push(newBook);
        }
        this.setState({cartList:cartUpdate});
    }

    render(){
        
        return (
            <div className='list'> 
                    {this.props.books.map((book,i) => {
                     return <BookCard
                             books={this.props.books}
                             addToCart={this.addToCart}
                             key={i+'a'}
                             bookId={i+1}
                             image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null}
                             author={book.volumeInfo.authors ? book.volumeInfo.authors.slice(0, 1) : []}
                             title={book.volumeInfo.title.substring(0, 38)}
                            />
                    })}
            </div>
        )
    }
};

