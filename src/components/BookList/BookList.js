import React, {Component} from 'react';
import BookCard from '../BookCard/BookCard';
import './booklist.css';



export default class BookList extends Component {
    render(){
        return (
            <div className='list'> 
                    {this.props.books.map((book,i) => {
                     return <BookCard
                             key={i+'a'}
                             bookId={i}
                             image={book.volumeInfo.imageLinks.thumbnail}
                             author={book.volumeInfo.authors.slice(0, 1)}
                             title={book.volumeInfo.title.substring(0, 38)}
                            />
                    })}
            </div>
        )
    }
};

