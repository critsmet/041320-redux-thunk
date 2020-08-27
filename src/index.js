import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
//Provider is using the technology of the context API
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import booksReducer from './redux/booksReducer'

//MIDDLEWARE IS ANY BIT OF CODE THAT INTERCEPTS A PROCESS AND CHANGES THE OUTCOME

let store = createStore(booksReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//1. Create reducer
//2. Create actions for reducer
//3. Create store, pass it to Provider
