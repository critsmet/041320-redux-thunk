export default function booksReducer(state={books: []}, action){
  switch (action.type){
    case 'ADD_BOOKS':
      console.log("WE MADE IT INTO THE REDUCER, YAY!", action.type, action.payload)
      return {books: action.payload}
    default:
      return state
  }
}
