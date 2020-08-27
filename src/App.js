import React from 'react';
import Book from './Book'

import { connect } from 'react-redux'
//if my component needs redux store's state or dispatch, I need to connect is

import { fetchBooks } from './redux/actions'

//When the application starts, make a fetch request to the GBAPI and store the books in the Redux store
//Generate the books inside of the UL below

class App extends React.Component {

  componentDidMount(){
    this.props.dispatchFetchBooks()
    
    //WHY DO WE USE THUNK? ORGANIZATION
    //THIS LOGIC HAS NOTHING TO DO WITH THIS COMPONENT, IT HAS EVERYTHING TO DO WITH CHANGING THE REDUX STORE'S STATE
    //LET'S GET RID OF IT
    //IT STILL WORKS, BUT LET'S MAKE OUR ACTION TAKE CARE OF IT

    // fetch("https://www.googleapis.com/books/v1/volumes?q=dogs")
    //   .then(res => res.json())
    //   .then(booksObj => {
    //     this.props.dispatchAddBooks(booksObj.items)
    //   })
  }


  render(){
    console.log(this.props)
    return (
      <div className="App">
      <h1>Another Google Books API App 🙄</h1>
      <ul>{this.props.books.map(book => <Book key={book.id} title={book.volumeInfo.title}/>)}</ul>
      </div>
    )
  }
}

function mSTP(state){
  return {
    books: state.books
  }
}

function mDTP(dispatch){
  return {
    dispatchFetchBooks: (items) => dispatch(fetchBooks(items)),
  }
}
//DO IT THE WAY ABOVE
//BUT IF YOU MUST PASS IN AN OBJECT INSTEAD OF A FUNCTION,
//PLEASE DO NOT DESTRUCTURE
//GIVE THEM NEW KEYS SO THAT YOU REMEMBER THE DIFFERENCE
//{ dispatchedAddBooks: addBooks }


export default connect(mSTP, mDTP)(App);
