import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Books from './Books';




class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <div className="books-container">
        <Books/>
        </div>
      </div>
    );
  }
  
}

export default App;
