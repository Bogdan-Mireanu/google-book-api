import React, {Component} from 'react';
import BookCard from '../BookCard/BookCard';
import './booklist.css';
import CartItem from '../CartItem/CartItem';



export default class BookList extends Component {
    constructor(props){
        super(props);
        this.state={
            cartList:[],
        };
    }
  
    addToCart = (bookId) => {
        const bookToAdd = this.props.books.find(book=> book.id === bookId);
        if(bookToAdd){
            return undefined;
        }
        const cartUpdate = this.state.cartList.slice();
        const bookAlreadyAdded = cartUpdate.find(item=>item.id === bookId);

        if(bookAlreadyAdded){
            bookAlreadyAdded.count++;
        }else {
            const newBook = Object.assign({}, bookToAdd);
            newBook.count = 1;
            cartUpdate.push(newBook);
        }
        this.setState({cartList:cartUpdate});
        console.log(bookId);
        
    }

    render(){
        
        return (
            <>
            <div className='book-list'> 
                    {this.props.books.map((book,i) => {
                     return <BookCard
                             addToCart={this.addToCart}
                             key={i+'a'}
                             bookId={book.id}
                             image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null}
                             author={book.volumeInfo.authors ? book.volumeInfo.authors.slice(0, 1) : []}
                             title={book.volumeInfo.title.substring(0, 38)}
                            />
                    })}
            </div>
            <div className='cart-list'>
                    {this.state.cartList.map((cart,i)=>{
                      return <CartItem
                              
                              key={i+'b'}
                              bookId={cart.id}
                              title={cart.title}
                              author={cart.author}
                             />
                    })}
            </div>
            </>
        )
    }
};

