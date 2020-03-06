import React, {Component} from 'react';
import BookCard from '../BookCard/BookCard';
import './booklist.css';
import CartItem from '../CartItem/CartItem';



export default class BookList extends Component {
    constructor(props){
        super(props);
        this.state={
            cartList:[],
            reads: 0
        };
    }

    clean = () => {
        this.setState({
            cartList:[]
        });
    };

    addToCart = (bookId) => {
        const bookToAdd = this.props.books.find(book=> {
            return book.id === bookId;
        });
      /* if(bookToAdd){
            const cartUpdate =this.state.cartList.slice();
            cartUpdate.push(bookToAdd);
            this.setState({cartList:cartUpdate});
        }*/
        if(!bookToAdd){
            return undefined;
        }
        const cartUpdate = this.state.cartList.slice();
        const bookAlreadyAdded=cartUpdate.find(item => item.id ===bookId);

        if(bookAlreadyAdded){
            bookAlreadyAdded.count++;
        }else {
            const newBook = Object.assign({}, bookToAdd);
            newBook.count =1;
            cartUpdate.push(newBook);
        }

        this.setState({cartList: cartUpdate})
    }

    removeFromCart = (bookId) =>  {
        const cartUpdated = this.state.cartList.filter(cart => cart.id !== bookId);
        this.setState({cartList:cartUpdated});
        };

    removeBookFromCart = (bookId) => {
        let cartUpdated = this.state.cartList.slice();
        const bookToRemove = cartUpdated.find(item => item.id === bookId);

        if(bookToRemove && bookToRemove.count === 1){
            cartUpdated = cartUpdated.find(item => item.id !== bookId);
        } else {
            bookToRemove.count = bookToRemove.count -1;
        }
        this.setState({cartList:cartUpdated});
    }

    render(){
        return (
            <>
            <div className='book-list'> 
                    {this.props.books.map((book,i) => {
                        return <BookCard
                             /*books={this.props.books}*/
                             addBookToCart={this.addToCart}
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
                            cleanCart={this.clean}
                            remove={this.removeFromCart}
                            decrease={this.removeBookFromCart}
                            add={this.addToCart}
                            key={i}
                            bookId={cart.id}
                            author={cart.volumeInfo.authors ? cart.volumeInfo.authors.slice(0, 1): []}
                            title={cart.volumeInfo.title.substring(0, 38)}
                            count={cart.count}
                            />
                    })}
            </div>
            <button type='button'onClick={this.clean.bind(this)}>Clean cart</button>
            </>
        );
    }
       
        
};

